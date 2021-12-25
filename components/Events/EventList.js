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
     * checkIfFilterEmpty(events)
     * @param {Events Object} events 
     * @returns true or false depending on if events are active.
     */
    const checkIfFilterEmpty = (events) => {
        let counter = 0;
        events.map((event) => {
            if (typeof filterEvents(event) !== 'undefined') {
                counter += 1;
            }
        })
        if (counter === 0) {
            return false;
        }
        return true;
    }
    if (checkIfFilterEmpty(events)) {
        return (
            <div className={eventStyles.eventList}>
                {events.map((event) => {
                    return (
                        filterEvents(event)
                    )
                })}
            </div>
        )
    } else {
        return (
            <div className={eventStyles.eventList}>
                <p>No Events active</p>
            </div>
        )
    }
}

export default EventList
