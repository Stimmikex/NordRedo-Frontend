import React from 'react'
import Event from './Event';
import eventStyles from '../../styles/EventList.module.scss';

const EventList = ({ events, get }) => {
    function getEvents(event) {
        let curr = new Date();
        if(get === "Active") {
            const eventDate = Date.parse(event.date);
            curr = Date.parse(curr);
            if(eventDate - curr > 0) {
                return <Event event={event} key={event.id}></Event>
            }
        } else {
            return <Event event={event} key={event.id}></Event>
        }
    }
    return (
        <div className={eventStyles.eventList}>
            {events.map((event) => {
            return (
                getEvents(event)
            )
            })}
        </div>
    )
}

export default EventList
