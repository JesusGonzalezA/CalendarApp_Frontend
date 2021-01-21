import React, { useState } from 'react'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import { Navbar } from '../ui/Navbar'
import { CalendarEvent } from './CalendarEvent'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../../styles.css'
import { CalendarModal } from './CalendarModal'
//**************************************************************************

const localizer = momentLocalizer(moment);

const events = [{
    title: 'Hacer ejercicio',
    user: {
        _id: '123',
        name: 'Jesus'
    },
    start: moment().toDate(),
    end: moment().add( 2, 'days' ).toDate(),
    bgcolor: '#fafafa'
}]

export const CalendarScreen = () => {

    const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'month' );

    const onDoubleClick = (e) => {
        console.log(e);    
    }

    const onSelectEvent = (e) => {
        console.log(e);
    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    const eventStyleGetter = ( event, start, end, isSelected ) => {
        
        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }

        return {style};
    }
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
                    view={ lastView }
                    eventPropGetter= { eventStyleGetter }
                    onDoubleClickEvent={ onDoubleClick }
                    onSelectEvent={ onSelectEvent }
                    onView={ onViewChange }
                    components={{
                        event: CalendarEvent
                    }}
                />

                <CalendarModal />
            </div>
        </div>
    )
}
