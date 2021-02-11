import { uiCloseModal, uiOpenModal } from "../../actions/ui";
import { uiReducer } from "../../reducers/uiReducer";

//**************************************************************************

const initialState = {
    modalOpen: false,
}

const openedState = {
    ...initialState,
    modalOpen: true
}

const closedState = {
    ...initialState,
    modalOpen: false
}

//**************************************************************************


describe('Testing uiReducer', () => {
    
    test('should return the default state', () => {
        const state = uiReducer( initialState , {} );
        expect( state ).toEqual( initialState );
    })

    test('should open the modal', () => {
        const state = uiReducer( closedState, uiOpenModal());
        expect( state ).toEqual( openedState );
    })
    
    test('should close the modal', () => {
        const state = uiReducer( openedState, uiCloseModal());
        expect( state ).toEqual( closedState );
    })
})
