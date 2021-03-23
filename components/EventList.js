import React from 'react'
import Event from './Event';

const EventList = ({ events }) => {
    return (
        <div>
            {events.map((event) => {
            return (
                <Event event={event}></Event>
            )
            })}
        </div>
    )
}

export default EventList
