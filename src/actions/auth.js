import Swal from 'sweetalert2';

import { fetchWithoutToken } from '../helpers/fetch';
import { types } from '../types/types';

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


const login = ( user ) => ({
    type: types.authLogin,
    payload: user
})

//--------------------------------------------------------------------------

export const startRegister = ( email, name, password ) => {
    return async ( dispatch ) => {
        
        const resp = await fetchWithoutToken('auth/new', { email, name, password }, 'POST' );
        const body = await resp.json();

        console.log(body);
        
        
        if ( body.ok ) {
            const { token, uid, name } = body.data;

            localStorage.setItem('token', token );
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch( login( { uid, name } ) );
        } else {
            Swal.fire('Error', [ body.errors.target.msg ], 'error');
        }

    }
}