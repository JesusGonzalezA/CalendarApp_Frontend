import { authReducer } from "../../reducers/authReducer";
import {
    checkingFinish,
    logout,
    login
} from '../../actions/auth';

//**************************************************************************


const initialState = {
    checking: true
};

const user = {
    uid: 'Testuid',
    name: 'Test'
};

//**************************************************************************

describe('Testing authReducer', () => {

    test('should return the initialState', () => {
        const state = authReducer( initialState, {} );
        expect( state ).toEqual( initialState );
    })
    
    test('should login', () => {
        const state = authReducer( initialState, login( user ) );
        expect( state ).toEqual({
            ...initialState,
            ...user,
            checking: false
        });
    })

    test('should logout', () => {
        const loginState = authReducer( initialState, login( user ) );
        const logoutState = authReducer( loginState, logout() );

        expect( logoutState ).toEqual({
            ...initialState,
            checking: false
        });
    })

    test('should finish checking', () => {
        const loginState = authReducer( initialState, login( user ) );
        const finishState = authReducer( loginState, checkingFinish() );

        expect( finishState ).toEqual( {
            ...loginState,
            checking: false
        } );
    })

})
