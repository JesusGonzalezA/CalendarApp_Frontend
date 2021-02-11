import Swal from 'sweetalert2';

import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';
import { eventsCleanLogout } from './events';

export const startLogin = ( email, password ) => {
    return async ( dispatch ) => {
        
        const resp = await fetchWithoutToken( 'auth', { email, password }, 'POST' );
        const body = await resp.json();
        
        if ( body.ok ) {
            const { token, uid, name } = body.data;

            localStorage.setItem('token', token );
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch( login( { uid, name } ) );
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
        
    }
}


export const login = ( user ) => ({
    type: types.authLogin,
    payload: user
})

//--------------------------------------------------------------------------

export const startRegister = ( email, name, password ) => {
    return async ( dispatch ) => {
        
        const resp = await fetchWithoutToken('auth/new', { email, name, password }, 'POST' );
        const body = await resp.json();
        
        if ( body.ok ) {
            const { token, uid, name } = body.data;

            localStorage.setItem('token', token );
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch( login( { uid, name } ) );
        } else {
            Swal.fire('Error', '' , 'error');
        }

    }
}

//--------------------------------------------------------------------------

export const startChecking = () => {

    return async ( dispatch ) => {
  
        const resp = await fetchWithToken('auth/renew' );
        const body = await resp.json();
        
        if ( body.ok ) {
            const { token, uid, name } = body.data;

            localStorage.setItem('token', token );
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch( login( { uid, name } ) );
        } else {
            dispatch( checkingFinish() );
        }

    }
}

export const checkingFinish = () => ({
    type: types.authCheckingFinish
})

//--------------------------------------------------------------------------

export const startLogout = () => {
    return ( dispatch ) => {
        localStorage.clear();
        dispatch( logout() );
        dispatch( eventsCleanLogout() );
    }
}

export const logout = () => ({
    type: types.authLogout
})