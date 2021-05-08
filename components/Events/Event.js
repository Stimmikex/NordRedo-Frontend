import Link from 'next/link';
import eventStyles from '../../styles/EventList.module.scss';
import dateFormat from 'dateformat';

const Event = ({ event }) => {
    const formatDate = (eventDate) => {
        return dateFormat(eventDate, "mmmm dS, yyyy");
    }
    function truncate(str, n){
        return (str.length > n) ? str.substr(0, n-1) : str;
    };
    return (
        <Link href='/events/[eventId]' as={`/events/${event.id}`}>
            <a>
                <ul>
                    <div className={eventStyles.eventContainer_image}>
                        <img src={`./eventImages/${event.event_type}.jpg`} alt={event.event_type} />
                    </div>
                    <div className={eventStyles.eventContainer_info}>
                        <div className={eventStyles.eventContainer_info_date}>
                            <p>{formatDate(event.date)}</p>
                        </div>
                        <div className={eventStyles.eventContainer_info_text}>
                            <h2>{event.title}</h2>
                            <p>{truncate(event.text, 20)}...</p>
                            {event.signup ?
                                <p>Seats: {event.seats}</p>
                                :
                                <p>All are invited</p>
                            } 
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
    )
}

export default Event
