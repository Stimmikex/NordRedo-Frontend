const Event = ({ event }) => {
    const router = useRouter()
    const params = router.query;
    return (
        <div>
            <h1>{console.log(event)}</h1>
        </div>
    )
}

export async function getStaticProps({ params }) {
    console.log(params);
    const res = await fetch(`https://nordredo-backend.herokuapp.com/event/${params.id}`);
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
        params: { id: id.toString() },
     }));
    console.log(paths);
    return {
        paths,
        fallback: false
    }
}

export default Event