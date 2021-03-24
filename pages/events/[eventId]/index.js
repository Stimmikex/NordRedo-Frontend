import SignupList from '../../../components/Signups/SignupList.js';
import eventStyles from '../../../styles/EventList.module.scss';

const Event = ({ event, signups }) => {
    const SigninUser = async signin => {
        signin.preventDefault();

        const data = {
            username: signin.target.username.value,
            password: signin.target.password.value,
        };

        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }

        const res = await fetch(`${apiUrl}event/sign-in/${event.id}`, options)

        console.log(res);
        const result = await res.json()
        console.log(result);
    }
    const SignoutUser = async signout => {
        signin.preventDefault();

        const data = {
            username: signout.target.username.value,
            password: signout.target.password.value,
        };

        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }

        const res = await fetch(`${apiUrl}event/sign-out/${event.id}`, options)

        console.log(res);
        const result = await res.json()
        console.log(result);
    }
    return (
        <div>
            <ul>
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
            <div>
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