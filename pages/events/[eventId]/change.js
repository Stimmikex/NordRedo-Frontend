import addForm from '../../../styles/AddForm.module.scss';

const {
    REACT_APP_API_URL: apiUrl,
  } = process.env;

const Event = ({ event, types }) => {
    const showSignup = () => {
        const signupCheck = document.getElementById('signup');
        const timeDiv = document.getElementById('timeDiv')
        if(signupCheck.checked) {
            timeDiv.style.display = 'flex';
            timeDiv.style.flexDirection = 'column'
        } else {
            timeDiv.style.display = 'none';
        }
    }
    console.log(event);
    return (
        <div className={addForm.add_container}>
            <h1>Change Event</h1>
            <form>
                <div>
                    <label>Title: </label>
                    <input type='text'
                        name='title'
                        required
                        value={event.title}
                    />
                    <hr></hr>
                    <label>Info: </label>
                        <textarea name='text' value={event.text}>
                            
                        </textarea>
                    <hr></hr>
                    <label>location: </label>
                    <input type='text'
                        name='location'
                        required
                        value={event.location}
                    />
                    <hr></hr>
                    <label>Signup from: </label>
                    {
                        event.signup ? (
                            <input type='checkbox'
                                name='signup'
                                id='signup'
                                onClick={showSignup}
                                checked
                            /> 
                        ) : (
                            <input type='checkbox'
                                name='signup'
                                id='signup'
                                onClick={showSignup}
                            /> 
                        )
                    }
                    <div id='timeDiv' className={addForm.add_container_time}>
                        <label>Seats: </label>
                        <input type='number'
                            name='seats'
                            required
                            value={event.seats}
                        />
                        <hr></hr>
                        <label>startDate: </label>
                        <input type='datetime-local'
                            name='startDate'
                            required
                            value={new Date(event.startdate)}
                        />
                        <hr></hr>
                        <label>endDate: </label>
                        <input type='datetime-local'
                            name='endDate'
                            required
                            value={event.enddate}
                        />
                        <hr></hr>
                    </div>
                    <label>Event Type</label>
                    <select>
                        {types.map((type) => {
                        return (
                            <option value={type.id}>{type.name}</option>
                        )
                        })}
                    </select>
                    <hr></hr>
                </div>
                <button type='submit'>Add Event</button>
            </form>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://nordredo-backend.herokuapp.com/event/${params.eventId}`);
    const event = await res.json();
    const resType = await fetch(`https://nordredo-backend.herokuapp.com/event/types`);
    const types = await resType.json();
    return {
        props: {
            event,
            types,
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
