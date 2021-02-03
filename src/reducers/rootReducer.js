import { combineReducers } from 'redux'
import { eventsReducer } from './eventsReducer'
import { authReducer } from './authReducer'

import { uiReducer } from './uiReducer'
//**************************************************************************

export const rootReducer = combineReducers({
    ui: uiReducer,
    events: eventsReducer,
    auth: authReducer
})


