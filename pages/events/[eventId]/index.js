import SignupList from '../../../components/Signups/SignupList.js';
import eventStyles from '../../../styles/Event.module.scss';
import dateFormat from 'dateFormat';

const {
    REACT_APP_API_URL: apiUrl,
  } = process.env;

const Event = ({ event, signups, signCount }) => {
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
    console.log(signCount);

    const formatDate = (eventDate) => {
        return dateFormat(eventDate, "dddd, mmmm dS, yyyy");
    }
    return (
        <div className={eventStyles.event_container}>
            <div>
                <p>{formatDate(event.date)}</p>
            </div>
            <div>
                <h1>{event.title}</h1>
                <p>Description: {event.text}</p>
            </div>
            <div>
                <p>Seats: {signCount.count +"/"+event.seats}</p>
            </div>
            <div>
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
            <SignupList signups={signups} signed={event.seats}></SignupList>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://nordredo-backend.herokuapp.com/event/${params.eventId}`);
    const event = await res.json();
    const resSign = await fetch(`https://nordredo-backend.herokuapp.com/event/registered/${params.eventId}`);
    const signups = await resSign.json();
    const resCount = await fetch(`https://nordredo-backend.herokuapp.com/event/count/${params.eventId}`);
    const signCount= await resCount.json();
    return {
        props: {
            event,
            signups,
            signCount,
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