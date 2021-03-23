const Event = ({ event }) => {
    return (
        <div>
            <ul key={event.id}>
                <p>Title: {event.title}</p>
                <p>Description: {event.text}</p>
                <p>Seats: {event.seats}</p>
                <p>Date: {event.date}</p>
                <p>Start: {event.startDate}</p>
                <p>End: {event.endDate}</p>
                <p>Location: {event.location}</p>
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