import SignupList from '../../../components/Signups/SignupList.js';
import CarpoolList from '../../../components/Events/CarpoolList.js';
import Countdown from '../../../components/Countdown.js';
import { getUserWithCookie } from '../../../components/fetchUserToken.js'
import eventStyles from '../../../styles/Event.module.scss';
import dateFormat from 'dateformat';
import { useRouter } from 'next/router';
import { SigninUser, validRegisterByTime } from '../../../lib/Signup/SignFunctions'
import { ifUserExists } from '../../../components/NavFunctions'

const {
    NEXT_PUBLIC_API_URL: apiUrl,
  } = process.env;

const Event = ({ event, signups, signCount, carpool, pooler, user, cookie }) => {
    const router = useRouter();

    const formatDate = (eventDate) => {
        return dateFormat(eventDate, "dddd, mmmm dS, yyyy");
    }

    const checkIfRegistered = () => {
        for (let i = 0; i < signups.length; i+=1) {
            if(signups[i].id === user.id) {
                return false;
            }
        }
        return true;
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
            { event.signup ?
                <div>
                    <p>Seats: {signCount.count +"/"+event.seats}</p>
                </div>
                :
                <p></p>
            }
            {
                event.signup && ((new Date(event.startdate) - new Date() < 0) && (new Date(event.enddate) - new Date() > 0))? 
                <div>
                    <div>
                        {
                            (new Date(event.startdate) - new Date() < 0) ?
                                <p><b>Signup!</b></p>
                            :
                                <p><b>Signup Countdown:</b> <Countdown start={event.startdate}></Countdown> </p>
                        }
                    </div>
                    <div>
                        <p><b>End of Signup:</b> <Countdown start={event.enddate}></Countdown> </p>
                    </div>
                </div>
                :
                <p></p>
            }
            <div>
                <div className={eventStyles.event_container_iframe}>
                    <iframe src={`https://maps.google.com/maps?q=${event.location}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                </div>
            </div>
            { event.signup && ifUserExists(user) && checkIfRegistered() && validRegisterByTime(event) ? 
                <div className={eventStyles.event_container_sign}>
                    <form onSubmit={e => SigninUser(router, event, user, cookie)}>
                        <button type="submit">Signup</button>
                    </form>
                </div>
                : 
                <div>
                    {user ? 
                        <p></p>
                    :
                        <p>Login to signup</p>
                    }
                </div>
            }
            { event.signup ? 
                <div>
                    <h1>Signup List: </h1>
                    <SignupList signups={signups} signed={event.seats} user={user} event={event} cookie={cookie} key={signups.id}></SignupList>
                </div>
                :
                <p></p>
            }
            {!user.error ? 
                event.event_type === "viso" ?
                    <CarpoolList event={event} carpools={carpool} poolers={pooler} user={user} cookie={cookie} key={carpool.id}></CarpoolList>
                :
                    <p></p>
            :
                <p></p>
            }
        </div>
    )
}

export async function getServerSideProps(ctx) {
    const res = await fetch(`${apiUrl}/event/${ctx.query.eventId}`);
    const event = await res.json();
    const resSign = await fetch(`${apiUrl}/event/registered/${ctx.query.eventId}`);
    const signups = await resSign.json();
    const resCount = await fetch(`${apiUrl}/event/count/${ctx.query.eventId}`);
    const signCount= await resCount.json();
    const resCarpool = await fetch(`${apiUrl}/event/carpool/${ctx.query.eventId}`);
    const carpool= await resCarpool.json();
    const resPooler = await fetch(`${apiUrl}/event/pooler/${ctx.query.eventId}`);
    const pooler= await resPooler.json();
    const cookie = ctx.req.headers.cookie || null;
    const user = await getUserWithCookie(ctx);
    return {
        props: {
            event,
            signups,
            signCount,
            carpool,
            pooler,
            user,
            cookie,
        },
    }
}

export default Event