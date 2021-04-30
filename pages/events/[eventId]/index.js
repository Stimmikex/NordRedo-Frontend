import SignupList from '../../../components/Signups/SignupList.js';
import Countdown from '../../../components/Countdown.js';
import eventStyles from '../../../styles/Event.module.scss';
import dateFormat from 'dateFormat';
import { useRouter } from 'next/router';
import { SigninUser } from './SignFunctions.js'

const {
    NEXT_PUBLIC_API_URL: apiUrl,
  } = process.env;

const Event = ({ event, signups, signCount, user }) => {
    const router = useRouter();

    const formatDate = (eventDate) => {
        return dateFormat(eventDate, "dddd, mmmm dS, yyyy");
    }
    return (
        <div className={eventStyles.event_container}>
            <div>
                {console.log(user)}
                <p>{formatDate(event.date)}</p>
            </div>
            <div>
                <h1>{event.title}</h1>
                <p>Description: {event.text}</p>
            </div>
            { event.signup ?
                <div>
                    <p>Seats: {signCount.count +"/"+event.seats}</p>
                </div>
                :
                <p></p>
            }
            <div>
                <Countdown start={event.startdate}></Countdown>
                <p>End: {event.enddate}</p>
            </div>
            <div>
                <div className={eventStyles.event_container_iframe}>
                    <iframe src={`https://maps.google.com/maps?q=${event.location}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
            { event.signup && user ? 
                <div className={eventStyles.event_container_sign}>
                    <form onSubmit={e => SigninUser(router, event, user)}>
                        <button type='submit'>Signup</button>
                    </form>
                </div>
                : 
                <p>Login to signup</p>
            }
            { event.signup ? 
                <div>
                    <h1>Signup List: </h1>
                    <SignupList signups={signups} signed={event.seats} user={user} event={event}></SignupList>
                </div>
                :
                <p></p>
            }
        </div>
    )
}

export async function getServerSideProps({ params, req }) {
    const res = await fetch(`${apiUrl}/event/${params.eventId}`);
    const event = await res.json();
    const resSign = await fetch(`${apiUrl}/event/registered/${params.eventId}`);
    const signups = await resSign.json();
    const resCount = await fetch(`${apiUrl}/event/count/${params.eventId}`);
    const signCount= await resCount.json();
    const cookie = req.headers.cookie;
    console.log(cookie);
    const resUser = await fetch(`${apiUrl}/users/me`, {
      headers: {
        cookie: cookie,
      }
    })
    const user = await resUser.json()
    console.log(user);
    return {
        props: {
            event,
            signups,
            signCount,
            user,
        },
    }
}

export default Event