import { types } from "../../types/types"

describe('Testing types', () => {
    test('should not change the types', () => {
        expect ( types ).toEqual({

            uiOpenModal: '[ui] Open Modal', 
            uiCloseModal: '[ui] Close Modal',
            
            eventsStartAddNew: '[events] Start add new',
            eventsAddNew: '[events] Add new',
            eventsSetActive: '[events] Set active,',
            eventsClearActive: '[events] Clear active',
            eventsUpdate: '[events] Event update',
            eventsDelete: '[events] Event delete',
            eventsLoaded: '[events] Events loaded',
            eventsCleanLogout: '[events] Events clear logout',
        
            authCheckingFinish: '[auth] Finish Checking login state',
            authStartLogin: '[auth] Start login',
            authStartRegister: '[auth] Start register',
            authStartTokenRenew: '[auth] Start token renew',
            authLogin: '[auth] Login',
            authLogout: '[auth] Logout'
        });
    })
    
})
