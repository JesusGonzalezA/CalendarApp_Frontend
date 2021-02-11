import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import Swal from 'sweetalert2';

import { startLogin } from '../../actions/auth';
import { user } from '../fixtures/user';
import { types } from '../../types/types';

//**************************************************************************

// Configure store

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState = {};
let store = mockStore( initState );

//**************************************************************************

// Mocks

jest.mock('sweetalert2', () => ({
    fire: jest.fn()
}))

Storage.prototype.setItem = jest.fn();

//**************************************************************************

describe('Testing auth actions', () => {

    beforeEach( () => { 
        store = mockStore( initState );
        jest.clearAllMocks();
    });

    test('startlogin should dispatch an auth action and set the token in the lstorage', async () => {
        
        await store.dispatch( startLogin( user.email, user.password ) );

        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.authLogin,
            payload: {
                uid: expect.any(String),
                name: 'Test'
            }
        })

        expect( localStorage.setItem ).toHaveBeenCalledWith('token', expect.any(String));
        expect( localStorage.setItem ).toHaveBeenCalledWith('token-init-date', expect.any(Number));
    })
    
    test('startlogin should show an error when the login is not correct', async () => {
        await store.dispatch( startLogin( user.email, user.password + 'p' ) );

        const actions = store.getActions();

        expect( actions ).toEqual([])
        expect( Swal.fire ).toHaveBeenCalledWith('Error', 'Incorrect password', 'error');
    })
    
})
