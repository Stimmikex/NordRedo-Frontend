import SignupList from '../../../components/Signups/SignupList.js';
import eventStyles from '../../../styles/Event.module.scss';

const {
    REACT_APP_API_URL: apiUrl,
  } = process.env;

const Event = ({ event, signups }) => {
    const SigninUser = async signin => {
        signin.preventDefault();

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }
        try {
            const res = await fetch(`https://nordredo-backend.herokuapp.com/event/sign-in/${event.id}`, options)
            console.log(res);
            const result = await res.json()
            console.log(result);
        } catch (e) {
            console.error(e);
        }

    }
    const SignoutUser = async signout => {
        signout.preventDefault();

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }

        const res = await fetch(`https://nordredo-backend.herokuapp.com/event/sign-out/${event.id}`, options)

        console.log(res);
        const result = await res.json()
        console.log(result);
    }
    return (
        <div className={eventStyles.event_container}>
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
            <div className={eventStyles.event_container_sign}>
                <form onSubmit={SigninUser}>
                    <button type='submit'>Signup</button>
                </form>
                <form onSubmit={SignoutUser}>
                    <button type='submit'>SignOut</button>
                </form>
            </div>
            <h1>Signup List: </h1>
            <SignupList signups={signups}></SignupList>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://nordredo-backend.herokuapp.com/event/${params.eventId}`);
    const event = await res.json();
    const resSign = await fetch(`https://nordredo-backend.herokuapp.com/event/registered/${params.eventId}`);
    const signups = await resSign.json();
    return {
        props: {
            event,
            signups,
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
    return {
        paths,
        fallback: true,
    }
}

export default Event