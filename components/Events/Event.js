import Link from 'next/Link';
import eventStyles from '../../styles/EventList.module.scss';

const Event = ({ event }) => {
    return (
        <div className={eventStyles.eventContainer}>
            <Link href='/events/[eventId]' as={`/events/${event.id}`}>
            <a>
                <ul>
                    <div className={eventStyles.eventContainer_image}>
                        <img src={`./eventImages/${event.event_type}.jpg`} alt={event.event_type} />
                    </div>
                    <div className={eventStyles.eventContainer_info}>
                        <div className={eventStyles.eventContainer_info_text}>
                            <p>Title: {event.title}</p>
                            <p>Description: {event.text}</p>
                            <p>Seats: {event.seats}</p>
                        </div>
                        <div>
                            <p>Date: {event.date}</p>
                        </div>
                        <div className={eventStyles.eventContainer_info_location}>
                            <p>Location: {event.location}</p>
                        </div>
                        <div className={eventStyles.eventContainer_info_poster}>
                            <p>Poster: {event.user_id}</p>
                        </div>
                    </div>
                </ul>
            </a>
            </Link>
        </div>
    )
}

export default Event
