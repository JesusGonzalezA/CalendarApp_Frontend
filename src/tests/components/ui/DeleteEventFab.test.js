import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import '@testing-library/jest-dom'

import { DeleteEventFab } from '../../../components/ui/DeleteEventFab';
import { Provider } from 'react-redux';
import { eventsStartDelete } from '../../../actions/events';

//**************************************************************************

// Mock actions

jest.mock('../../../actions/events', () => ({
    eventsStartDelete: jest.fn()
}));

//**************************************************************************

// Mock store

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initialState = {};
const store = mockStore( initialState );
store.dispatch = jest.fn();

//**************************************************************************

// Snapshot component

const wrapper = mount( 
    <Provider store={ store }>
        <DeleteEventFab /> 
    </Provider>
);

//**************************************************************************

describe('Testing deleteEventFab', () => {
    
    test('should match the snapshot', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should dispatch an action when the user clicks the button', () => {
        
        const button = wrapper.find('button');
        button.simulate('click');

        expect( store.dispatch ).toHaveBeenCalled();
        expect( eventsStartDelete ).toHaveBeenCalled();
    });
    
    
})
