import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import '@testing-library/jest-dom'

import { Provider } from 'react-redux';
import { LoginScreen } from '../../../components/auth/LoginScreen';
import { user } from '../../fixtures/user';
import { startLogin } from '../../../actions/auth';

//**************************************************************************

// Mock actions

jest.mock('../../../actions/auth', () => ({
    startLogin: jest.fn()
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
        <LoginScreen /> 
    </Provider>
);

//**************************************************************************

describe('Testing LoginScreen component', () => {
    
    test('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should call dispatch when the user press the login button', () => {
        
        // Fill the form

        wrapper.find('input[name="lEmail"]').simulate('change',{
            target: {
                name: 'lEmail',
                value: user.email
            }
        });

        wrapper.find('input[name="lEmail"]').simulate('change',{
            target: {
                name: 'lPassword',
                value: user.password
            }
        });

        // Submit
        wrapper.find('form').at(0).prop('onSubmit')({
            preventDefault(){}
        })

        expect( store.dispatch ).toHaveBeenCalled();
        expect( startLogin ).toHaveBeenCalledWith( user.email, user.password );
    });

})
