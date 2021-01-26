import { types } from "../types/types";

const initialState = {
    events: [],
    activeEvent: null
};

// event:
// {
//     id: new Date().getTime(),
//     title: 'Hacer ejercicio',
//     user: {
//         _id: '123',
//         name: 'Jesus'
//     },
//     start: moment().toDate(),
//     end: moment().add( 2, 'days' ).toDate(),
//     bgcolor: '#fafafa'
// }

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

        case types.eventsClearActive:
            return {
                ...state,
                activeEvent: null
            }

        case types.eventsUpdate:
            return {
                ...state,
                events: state.events.map( 
                    (e) => (e.id === action.payload.id)
                            ? action.payload
                            : e 
                )
            }
        default:
            return state;
    }
}