import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import '@testing-library/jest-dom';
import { act } from '@testing-library/react';
import { Provider } from 'react-redux';
import moment from 'moment';

import { CalendarModal } from '../../../components/calendar/CalendarModal';
import { uiCloseModal } from '../../../actions/ui';
import { 
    eventsClearActive, 
    eventsStartUpdate,
    eventsStartAddNew } from '../../../actions/events';
import Swal from 'sweetalert2';

//**************************************************************************

// Mock actions

jest.mock( 'sweetalert2' , () => ({
    fire: jest.fn()
}));

jest.mock('../../../actions/ui', () => ({
    uiCloseModal: jest.fn()
}));

jest.mock('../../../actions/events', () => ({
    eventsClearActive: jest.fn(),
    eventsStartUpdate: jest.fn(),
    eventsStartAddNew: jest.fn()
}));

Storage.prototype.setItem = jest.fn();

//**************************************************************************

// Mock store

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const now = moment().minutes(0).seconds(0).add(1,'hours');
const tomorrow = now.clone().add(1, 'days');

const initialState = {
    ui: {
        modalOpen: true
    },
    events:{
        events: [],
        activeEvent: {
            title: 'Hello world',
            notes: 'Some notes',
            start: now.toDate(),
            end: tomorrow.toDate()
        }
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
        <CalendarModal /> 
    </Provider>
);

//**************************************************************************

describe('Testing calendarModal component', () => {

    beforeEach(() => {
        jest.clearAllMocks()
    })
    test('should show the modal', () => {

        expect( wrapper.find('Modal').prop('isOpen') ).toBe( true );
        
    });
    
    test('should call the action to update, close and clear active when submit', () => {

        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        expect( uiCloseModal ).toHaveBeenCalled();
        expect( eventsStartUpdate ).toHaveBeenCalledWith( initialState.events.activeEvent );
        expect( eventsClearActive ).toHaveBeenCalled();
    })
    
    test('should show an error if the title is missing', () => {
        
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        expect( wrapper.find('input[name="title"]').hasClass('is-invalid') ).toBe( true );
    })
    
    test('should create a new event', () => {

        // Store does not have an active event and modal is opened
        const initialState = {
            ui: {
                modalOpen: true
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

        const wrapper = mount( 
            <Provider store={ store }>
                <CalendarModal /> 
            </Provider>
        );

        // We fill the form
        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'Hello world'
            }
        })

        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        // A new event should have been created
        expect( eventsStartAddNew ).toHaveBeenCalledWith( {
            end: expect.any(Date),
            start: expect.any(Date),
            notes: '',
            title: 'Hello world'
        })

        expect( uiCloseModal ).toHaveBeenCalled();
        expect( eventsClearActive ).toHaveBeenCalled();
    });

    test('should validate the dates', () => {

        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'Hello world'
            }
        })

        const today = new Date();

        act( () => {
            wrapper.find('DateTimePicker').at(0).prop('onChange')(today);
            wrapper.find('DateTimePicker').at(1).prop('onChange')(today);
        })

        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });
        
        expect( Swal.fire ).toHaveBeenCalledWith('Error', 'Start date should be before end date', 'error');
        expect( uiCloseModal ).not.toHaveBeenCalled();
    })
    
    
})
