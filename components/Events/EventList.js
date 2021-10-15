import React from 'react'
import Event from './Event';
import Link from 'next/link';
import eventStyles from '../../styles/EventList.module.scss';
import { ifUserAdmin } from '../NavFunctions.js';
import DeleteEvent from './Popups/DeleteEvent';

const EventList = ({ events, get, user }) => {
    function filterEvents(event) {
        let curr = new Date();
        if(get === "Active") {
            const eventDate = Date.parse(event.date);
            curr = Date.parse(curr);
            if(eventDate - curr > 0) {
                return (
                    makeEvent(event)
                )
            }
        } else {
            return (              
                makeEvent(event)
            )
        }
    }
    const makeEvent = (event) => {
        return (              
            <div className={eventStyles.eventContainer}>
                <Event event={event} key={event.id}></Event>
                 {
                    ifUserAdmin(user) ? (
                        <div className={eventStyles.modmenu}>
                            <DeleteEvent event={event} user={user}></DeleteEvent>
                            <Link href='/events/[eventId]/change' as={`/events/${event.id}/change`}>
                                <button>Change</button>
                            </Link>
                        </div>
                    ) : (
                        console.log("test")
                    )
                 }
            </div>
            )
    }
    /**
     * Checks if there are no active events in the 
     */
    if (typeof filterEvents(events[0]) === 'undefined') {
        return (
            <div><p>No active events</p></div>
        )
    }
    return (
        <div className={eventStyles.eventList}>
            {events.map((event) => {
                return (
                    filterEvents(event)
                )
            })}
        </div>
    )
}

export default EventList
