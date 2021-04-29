import SignupList from '../../../components/Signups/SignupList.js';
import Countdown from '../../../components/Countdown.js';
import eventStyles from '../../../styles/Event.module.scss';
import dateFormat from 'dateFormat';

const {
    NEXT_PUBLIC_API_URL: apiUrl,
  } = process.env;

const Event = ({ event, signups, signCount, cookie }) => {
    const SigninUser = async signin => {
        signin.preventDefault();


        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                cookie: cookie,
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
                cookie: cookie,
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
            { event.signup ? 
                <div className={eventStyles.event_container_sign}>
                    <form onSubmit={SigninUser}>
                        <button type='submit'>Signup</button>
                    </form>
                    <form onSubmit={SignoutUser}>
                        <button type='submit'>SignOut</button>
                    </form>
                </div>
                : 
                <p></p>
            }
            { event.signup ? 
                <div>
                    <h1>Signup List: </h1>
                    <SignupList signups={signups} signed={event.seats}></SignupList>
                </div>
                :
                <p></p>
            }
        </div>
    )
}

export async function getServerSideProps({ params, req }) {
    const res = await fetch(`https://nordredo-backend.herokuapp.com/event/${params.eventId}`);
    const event = await res.json();
    const resSign = await fetch(`https://nordredo-backend.herokuapp.com/event/registered/${params.eventId}`);
    const signups = await resSign.json();
    const resCount = await fetch(`https://nordredo-backend.herokuapp.com/event/count/${params.eventId}`);
    const signCount= await resCount.json();
    const cookie = req.headers.cookie;
    console.log(cookie);
    const resUser = await fetch('https://nordredo-backend.herokuapp.com/users/me', {
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