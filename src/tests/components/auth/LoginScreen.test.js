import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import '@testing-library/jest-dom'

import { Provider } from 'react-redux';
import { LoginScreen } from '../../../components/auth/LoginScreen';
import { user } from '../../fixtures/user';
import { startLogin, startRegister } from '../../../actions/auth';
import Swal from 'sweetalert2';

//**************************************************************************

// Mock actions

jest.mock('../../../actions/auth', () => ({
    startLogin: jest.fn(),
    startRegister: jest.fn()
}));

jest.mock('sweetalert2', () => ({
    fire: jest.fn()
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

    beforeEach( () => {
        jest.clearAllMocks();
    })
    
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

    test('should show an error when the password are different', () => {
        
        // Fill the form

        wrapper.find('input[name="rName"]').simulate('change',{
            target: {
                name: 'rName',
                value: 'Test'
            }
        });

        wrapper.find('input[name="rEmail"]').simulate('change',{
            target: {
                name: 'rEmail',
                value: user.email
            }
        });

        wrapper.find('input[name="rPassword1"]').simulate('change',{
            target: {
                name: 'rPassword1',
                value: 'Test1'
            }
        });

        wrapper.find('input[name="rPassword2"]').simulate('change',{
            target: {
                name: 'rPassword2',
                value: 'Test2'
            }
        });

        // Submit
        wrapper.find('form').at(1).prop('onSubmit')({
            preventDefault(){}
        })

        // Expect
        expect( startRegister ).not.toHaveBeenCalled();
        expect( Swal.fire ).toHaveBeenCalledWith('Error', 'Passwords should match', 'error');
    });

    test('should call register when the passwords match and all the validations', () => {
        // Fill the form

        wrapper.find('input[name="rName"]').simulate('change',{
            target: {
                name: 'rName',
                value: 'Test'
            }
        });

        wrapper.find('input[name="rEmail"]').simulate('change',{
            target: {
                name: 'rEmail',
                value: user.email
            }
        });

        wrapper.find('input[name="rPassword1"]').simulate('change',{
            target: {
                name: 'rPassword1',
                value: 'Test1'
            }
        });

        wrapper.find('input[name="rPassword2"]').simulate('change',{
            target: {
                name: 'rPassword2',
                value: 'Test1'
            }
        });

        // Submit
        wrapper.find('form').at(1).prop('onSubmit')({
            preventDefault(){}
        })

        // Expect
        expect( startRegister ).toHaveBeenCalledWith(user.email, 'Test', 'Test1');
    })
    
    
})
