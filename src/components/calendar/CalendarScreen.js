import React from 'react'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import { Navbar } from '../ui/Navbar'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../../styles.css'
//**************************************************************************

const localizer = momentLocalizer(moment);

const events = [{
    title: 'Hacer ejercicio',
    start: moment().toDate(),
    end: moment().add( 2, 'days' ).toDate(),
    bgcolor: '#fafafa'
}]

export const CalendarScreen = () => {
    return (
        <div className="calendar-screen">
            <Navbar className="navbar"/>

            <div className="calendar-container">
                <Calendar
                    className="calendar"
                    localizer={ localizer }
                    events={ events }
                    startAccessor="start"
                    endAccessor="end"
                />
            </div>
        </div>
    )
}
