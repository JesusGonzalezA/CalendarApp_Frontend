import Swal from "sweetalert2";
import { fetchWithToken } from "../helpers/fetch";
import { formatEvents } from "../helpers/formatEvents";
import { types } from "../types/types";
//**************************************************************************

export const eventsStartAddNew = ( event ) => {
    return async ( dispatch, getState ) => {

        const { uid: _id , name } = getState().auth;

        try {

            const resp = await fetchWithToken( 'events', event , 'POST' );
            const body = await resp.json();

            if ( body.ok ) {
                                
                dispatch( eventsAddNew({
                    ...event,
                    id: body.data.id,
                    user: {
                        _id,
                        name
                    }
                }) );

                Swal.fire('Completed', 'The event was added succesfully', 'success');
            } else {
                Swal.fire('Error', 'Could not add the event', 'error');
            }

        } catch (error) {
            Swal.fire('Error', 'Something went bad', 'error');
        }
    }
} 

const eventsAddNew = ( event ) => ({
    type: types.eventsAddNew,
    payload: event
})

//--------------------------------------------------------------------------

export const eventsStartLoading = () => {
    return async ( dispatch ) => {

        try {

            const resp = await fetchWithToken('events');
            const body = await resp.json();

            const events = formatEvents(body.data);
            dispatch( eventsLoaded( events ) );

        } catch (error) {
            Swal.fire('Error', error, 'error');
        }
        
    }
}

const eventsLoaded = ( events ) => ({
    type: types.eventsLoaded,
    payload: events
})

//--------------------------------------------------------------------------

export const eventsStartUpdate = ( event ) => {
    return async ( dispatch ) => {

        try {

            const resp = await fetchWithToken( `events/${event.id}`, event , 'PUT' );
            const body = await resp.json();

            if ( body.ok ) {
                                
                dispatch( eventsUpdate(event) );

                Swal.fire('Completed', 'The event was updated succesfully', 'success');
            } else {
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            Swal.fire('Error', 'Something went bad', 'error');
        }
    }
}

const eventsUpdate = ( event ) => ({
    type: types.eventsUpdate,
    payload: event
})

//--------------------------------------------------------------------------

export const eventsStartDelete = ( ) => {
    return async (dispatch, getState) => {

        const { id } = getState().events.activeEvent;

        try {

            const resp = await fetchWithToken( `events/${id}`, {} , 'DELETE' );
            const body = await resp.json();

            if ( body.ok ) {
                                
                dispatch( eventsDelete() );

                Swal.fire('Completed', 'The event was deleted succesfully', 'success');
            } else {
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            Swal.fire('Error', 'Something went bad', 'error');
        }
    }
}

const eventsDelete = () => ({
    type: types.eventsDelete
})

//--------------------------------------------------------------------------

export const eventsSetActive = ( event ) => ({
    type: types.eventsSetActive,
    payload: event
})

export const eventsClearActive = ( ) => ({
    type: types.eventsClearActive
})

export const eventsCleanLogout = () => ({
    type: types.eventsCleanLogout
})

