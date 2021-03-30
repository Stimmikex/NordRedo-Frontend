import Link from 'next/Link';
import eventStyles from '../../styles/EventList.module.scss';
import dateFormat from 'dateFormat';

const Event = ({ event }) => {
    const formatDate = (eventDate) => {
        return dateFormat(eventDate, "mmmm dS, yyyy");
    }
    return (
        <div className={eventStyles.eventContainer}>
            <Link href='/events/[eventId]' as={`/events/${event.id}`}>
            <a>
                <ul>
                    <div className={eventStyles.eventContainer_image}>
                        {/* <img src={`./eventImages/${event.event_type}.jpg`} alt={event.event_type} /> */}
                    </div>
                    <div className={eventStyles.eventContainer_info}>
                        <div className={eventStyles.eventContainer_info_date}>
                            <p>{formatDate(event.date)}</p>
                        </div>
                        <div className={eventStyles.eventContainer_info_text}>
                            <p>Title: {event.title}</p>
                            <p>Description: {event.text}</p>
                            <p>Seats: {event.seats}</p>
                        </div>
                        <div className={eventStyles.eventContainer_info_location}>
                            <div className={eventStyles.eventContainer_info_location_mapouter}>
                            <div class="gmap_canvas">
                                <iframe src={`https://maps.google.com/maps?q=${event.location}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            </div>
                        </div>
                        </div>
                        <div className={eventStyles.eventContainer_info_poster}>
                            <img src={`./eventImages/${event.event_type}.jpg`} alt={event.event_type} />
                            <p>Posted by: {event.user_id}</p>
                        </div>
                    </div>
                </ul>
            </a>
            </Link>
        </div>
    )
}

export default Event
