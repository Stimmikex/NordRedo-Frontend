import Link from 'next/Link';

const Event = ({ event }) => {
    return (
        <Link href='/events/[eventId]' as={`/events/${event.id}`}>
            <a>
                <ul key={event.id}>
                <p>Title: {event.title}</p>
                <p>Description: {event.text}</p>
                <p>Seats: {event.seats}</p>
                <p>{event.date}</p>
                <p>{event.startDate}</p>
                <p>{event.endDate}</p>
                <p>Location: {event.location}</p>
                <p>Poster: {event.user_id}</p>
                <p>Event_Type: {event.event_type}</p>
                </ul>
            </a>
        </Link>
    )
}

export default Event
