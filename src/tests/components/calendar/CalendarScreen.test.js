import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import '@testing-library/jest-dom'
import { act } from '@testing-library/react'
import { Provider } from 'react-redux';
import { CalendarScreen } from '../../../components/calendar/CalendarScreen';
import { uiOpenModal } from '../../../actions/ui';
import { eventsSetActive } from '../../../actions/events';

//**************************************************************************

// Mock actions
Storage.prototype.setItem = jest.fn();

//**************************************************************************

// Mock store

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initialState = {
    ui: {
        modalOpen: false
    },
    events:{
        events: [],
        activeEvent: null
    },
    auth: {
        checking: false,
        name: 'Test',
        uid: 'Testuid'
    }
};
const store = mockStore( initialState );
store.dispatch = jest.fn();

//**************************************************************************

// Snapshot component

const wrapper = mount( 
    <Provider store={ store }>
        <CalendarScreen /> 
    </Provider>
);

//**************************************************************************

describe('Testing calendarScreen component', () => {

    test('should should match the snapshot', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    
    test('testing interactions', () => {
        
        const calendar = wrapper.find('Calendar');

        calendar.prop('onDoubleClickEvent')();
        expect( store.dispatch ).toHaveBeenCalledWith( uiOpenModal() );

        calendar.prop('onSelectEvent')({});
        expect( store.dispatch ).toHaveBeenCalledWith( eventsSetActive({}) );

        act( () => {
            calendar.prop('onView')('week');
            expect( localStorage.setItem ).toHaveBeenCalledWith( 'lastView', 'week' );
        })
    })
    
})
