import React from 'react'
import { useDispatch } from 'react-redux'
import { eventsClearActive } from '../../actions/events';
import { uiOpenModal } from '../../actions/ui';

export const AddNewFab = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch( eventsClearActive() );
        dispatch( uiOpenModal() );
    }

    return (
        <button
            className="btn btn-primary fab right"
            onClick={ handleClick }
        >
            <i className="fas fa-plus"></i>
        </button>
    )
}
