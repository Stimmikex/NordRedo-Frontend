const Event = ({ event }) => {
    return (
        <div>
            <h1>{event.title}</h1>
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