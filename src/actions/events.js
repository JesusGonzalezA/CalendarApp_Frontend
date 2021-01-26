import { types } from "../types/types";

export const eventsAddNew = ( event ) => ({
    type: types.eventsAddNew,
    payload: event
})

export const eventsSetActive = ( event ) => ({
    type: types.eventsSetActive,
    payload: event
})

export const eventsClearActive = ( ) => ({
    type: types.eventsClearActive
})

export const eventsUpdate = ( event ) => ({
    type: types.eventsUpdate,
    payload: event
})