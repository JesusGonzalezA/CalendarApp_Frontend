import React, { useState } from 'react'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import { Navbar } from '../ui/Navbar'
import { CalendarEvent } from './CalendarEvent'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../../styles.css'
import { CalendarModal } from './CalendarModal'
import { useDispatch, useSelector } from 'react-redux'
import { uiOpenModal } from '../../actions/ui'
import { eventsClearActive, eventsSetActive } from '../../actions/events'
import { AddNewFab } from '../ui/AddNewFab'
import { DeleteEventFab } from '../ui/DeleteEventFab'
//**************************************************************************

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.events);
    const { modalOpen } = useSelector(state => state.ui);

    const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'month' );

    const onDoubleClick = (e) => {
        dispatch( uiOpenModal() );
    }

    const onSelectEvent = (e) => {
        dispatch( eventsSetActive(e) );
    }

    const onSelectSlot = () => {
        dispatch( eventsClearActive() )
    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    const eventStyleGetter = () => {
        
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
                    onSelectSlot={ onSelectSlot }
                    selectable={ true }
                    onView={ onViewChange }
                    components={{
                        event: CalendarEvent
                    }}
                />

                <CalendarModal />
                
                { activeEvent && !modalOpen && <DeleteEventFab /> }
                <AddNewFab />
            </div>
        </div>
    )
}
