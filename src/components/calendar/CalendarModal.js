import React, { useState } from 'react'
import moment from 'moment'

import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';

import { CalendarModalStyles } from '../../helpers/CalendarModalStyles';
 
const customStyles = CalendarModalStyles;
Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1,'hours');
const tomorrow = now.clone().add(1, 'days');

export const CalendarModal = () => {

    const [startDate, setStartDate] = useState( now.toDate() );
    const [endDate, setEndDate] = useState( tomorrow.toDate() );

    const [formValues, setFormValues] = useState({
        title: 'Event',
        notes: '',
        start: now.toDate(),
        end: tomorrow.toDate()
    });

    const { notes, title } = formValues;

    const handleInputChange = ( e ) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    } 

    const closeModal = () => {
        
    }

    const handleStartDateChange = ( e ) => {
        setStartDate(e)
        setFormValues({
            ...formValues,
            start: e
        })
    }

    const handleEndDateChange = ( e ) => {
        setEndDate(e)
        setFormValues({
            ...formValues,
            end: e
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Modal
          isOpen={ true }
          onRequestClose={ closeModal }
          style={ customStyles }
          closeTimeoutMS={ 200 }
          className="modal"
          overlayClassName="modal-fondo"
        >
            <h1> New Event </h1>
            <hr />
            <form className="container" onSubmit={ handleSubmit }>

                <div className="form-group">
                    <label>Start: Date and time</label>
                    <DateTimePicker
                        className="form-control"
                        onChange={ handleStartDateChange }
                        value={ startDate }
                    />
                </div>

                <div className="form-group">
                    <label>End: Date and time</label>
                    <DateTimePicker
                        className="form-control"
                        onChange={ handleEndDateChange }
                        minDate={ startDate }
                        value={ endDate }
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Title and notes</label>
                    <input 
                        type="text" 
                        className="form-control"
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
