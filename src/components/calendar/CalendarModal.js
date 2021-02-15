import React, { useEffect, useState } from 'react'
import moment from 'moment'

import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import Swal from 'sweetalert2'

import { CalendarModalStyles } from '../../helpers/CalendarModalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';
import { 
    eventsStartAddNew, 
    eventsClearActive, 
    eventsStartUpdate } from '../../actions/events';
 
const customStyles = CalendarModalStyles;

if ( process.env.NODE_ENV !== 'test' )
    Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1,'hours');
const tomorrow = now.clone().add(1, 'days');

const initialState = {
    title: '',
    notes: '',
    start: now.toDate(),
    end: tomorrow.toDate()
}

export const CalendarModal = () => {

    const dispatch = useDispatch();
    const { activeEvent } = useSelector(state => state.events)
    const { modalOpen } = useSelector(state => state.ui);
    
    const [isTitleValid, setIsTitleValid] = useState(true);
    const [formValues, setFormValues] = useState(initialState);

    const { notes, title, start, end } = formValues;

    useEffect(() => {
        
        const formState = ( activeEvent )? activeEvent : initialState;

        setFormValues(formState);

    }, [activeEvent, setFormValues])

    const handleInputChange = ( e ) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    } 

    const closeModal = () => {
        dispatch( uiCloseModal() );
        dispatch( eventsClearActive() );
        setFormValues(initialState);
    }

    const handleStartDateChange = ( e ) => {
        setFormValues({
            ...formValues,
            start: e
        })
    }

    const handleEndDateChange = ( e ) => {
        setFormValues({
            ...formValues,
            end: e
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( validateForm() ){

            if ( activeEvent ){
                dispatch( eventsStartUpdate( formValues ) )
            }
            else {
                dispatch( eventsStartAddNew( formValues ) )
        }

            setIsTitleValid(true);
            closeModal();
        }
    }

    const validateForm = () => {
        
        const momentStart = moment(start)
        const momentEnd = moment(end)

        if ( momentStart.isSameOrAfter( momentEnd ) ){
            Swal.fire('Error', 'Start date should be before end date', 'error');
            return false;
        }

        if ( title.trim().length === 0){
            setIsTitleValid(false)
            return false;
        }

        return true;
    }

    return (
        <Modal
          isOpen={ modalOpen }
          onRequestClose={ closeModal }
          style={ customStyles }
          closeTimeoutMS={ 200 }
          className="modal"
          overlayClassName="modal-fondo"
          ariaHideApp={ !process.env.NODE_ENV === 'test'}
        >
            <h1> { (activeEvent)? 'Update Event' : 'New Event' } </h1>
            <hr />
            <form className="container" onSubmit={ handleSubmit }>

                <div className="form-group">
                    <label>Start: Date and time</label>
                    <DateTimePicker
                        className="form-control"
                        onChange={ handleStartDateChange }
                        minDate={ now.toDate() }
                        value={ start }
                    />
                </div>

                <div className="form-group">
                    <label>End: Date and time</label>
                    <DateTimePicker
                        className="form-control"
                        onChange={ handleEndDateChange }
                        minDate={ start }
                        value={ end }
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Title and notes</label>
                    <input 
                        type="text" 
                        className={ `form-control ${ !isTitleValid && 'is-invalid' }` }
                        placeholder="Title of the event"
                        name="title"
                        autoComplete="off"
                        value={ title }
                        onChange={ handleInputChange }
                    />
                    <small id="emailHelp" className="form-text text-muted mt-3">
                        Short Description
                    </small>
                </div>

                <div className="form-group">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notes"
                        rows="5"
                        name="notes"
                        value={ notes }
                        onChange={ handleInputChange }
                    ></textarea>
                    <small 
                        id="emailHelp" 
                        className="form-text text-muted"
                    >
                        Additional info
                    </small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Save </span>
                </button>

            </form>
        </Modal>
    )
}
