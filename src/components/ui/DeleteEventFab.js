import React from 'react'
import { useDispatch } from 'react-redux'
import { eventsStartDelete } from '../../actions/events';

export const DeleteEventFab = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch( eventsStartDelete() );
    }

    return (
        <button
            className="btn btn-danger fab left"
            onClick={ handleClick }
        >
            <i className="fas fa-trash"></i>
        </button>
    )
}
