import React from 'react'
import { useDispatch } from 'react-redux'
import { eventsDelete } from '../../actions/events';

export const DeleteEventFab = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch( eventsDelete() );
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
