import { types } from "../types/types";

const initialState = {
    events: [],
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

        case types.eventsDelete:
            return {
                ...state,
                activeEvent: null,
                events: state.events.filter( event => event.id !== state.activeEvent.id )
            }

        case types.eventsLoaded: 
            return {
                ...state,
                events: action.payload
            }

        case types.eventsCleanLogout: 
            return {
                ...initialState
            }

        default:
            return state;
    }
}