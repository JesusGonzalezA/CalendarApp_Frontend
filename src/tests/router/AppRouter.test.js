import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import '@testing-library/jest-dom'

import { Provider } from 'react-redux';
import { AppRouter } from '../../router/AppRouter';

//**************************************************************************

// Mock actions

//**************************************************************************

// Mock store

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

//**************************************************************************

describe('Testing AppRouter component', () => {
   
    test('should match the snapshot', () => {

        const initialState = {
            auth: {
                checking: true
            }
        };
        const store = mockStore( initialState );

        const wrapper = mount( 
            <Provider store={ store }>
                <AppRouter /> 
            </Provider>
        );

        expect( wrapper ).toMatchSnapshot();
    });

    test('should show the public route when the user is not authed', () => {

        const initialState = {
            auth: {
                checking: false,
                uid: null
            }
        }
        const store = mockStore( initialState );

        const wrapper = mount( 
            <Provider store={ store }>
                <AppRouter /> 
            </Provider>
        );
        
        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('.login-container').exists() ).toBe(true);
    })
    
    test('should show the private route when the user is authed', () => {
        const initialState = {
            ui: {
                modalOpen: false
            },
            events: {
                events: [],
                activeEvent: null
            },
            auth: {
                checking: false,
                uid: 'TestUid',
                name: 'TestName'
            }
        }
        const store = mockStore( initialState );

        const wrapper = mount( 
            <Provider store={ store }>
                <AppRouter /> 
            </Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('.calendar-screen').exists() ).toBe(true);
    })
    
})
