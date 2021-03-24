import eventStyles from '../../../styles/EventList.module.scss';

const Event = ({ event }) => {
    return (
        <div>
            <ul key={event.id}>
                <div>
                    <h1>Title: {event.title}</h1>
                    <p>Description: {event.text}</p>
                </div>
                <div>
                    <p>Seats: {event.seats}</p>
                </div>
                <div>
                    <p>Date: {event.date}</p>
                    <p>Start: {event.startDate}</p>
                    <p>End: {event.endDate}</p>
                </div>
                <div>
                    <p>Location: {event.location}</p>
                </div>
            </ul>
        </div>
    )
}

export async function getStaticProps({ params }) {
    console.log(params);
    const res = await fetch(`https://nordredo-backend.herokuapp.com/event/${params.eventId}`);
    const event = await res.json();
    return {
        props: {
            event,
        },
    }
}

export async function getStaticPaths() {
    const res = await fetch('https://nordredo-backend.herokuapp.com/');
    const events = await res.json();
    const ids = events.map((event) => event.id);
    const paths = ids.map((id) => ({ 
        params: { eventId: id.toString() },
     }));
    console.log(paths);
    return {
        paths,
        fallback: true,
    }
}

export default Event