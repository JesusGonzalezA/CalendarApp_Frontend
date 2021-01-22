import moment from 'moment'
import { types } from "../types/types";

const initialState = {
    events: [{
        title: 'Hacer ejercicio',
        user: {
            _id: '123',
            name: 'Jesus'
        },
        start: moment().toDate(),
        end: moment().add( 2, 'days' ).toDate(),
        bgcolor: '#fafafa'
    }],
    activeEvent: null
};

export const eventsReducer = ( state = initialState, action) => {

    switch ( action?.type ) {
        
        case types.eventsAddNew:
            return {
                ...state,
                events: [ ...state.events, action.payload ]
            }
        
        case types.eventsSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }

        default:
            return state;
    }
}