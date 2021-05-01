import addForm from '../../../styles/AddForm.module.scss';
import React, { useState } from "react";
import { showSignup, toDateTime } from '../../../components/Events/EventAddFormFunctions'
import Router from 'next/router'

const {
    NEXT_PUBLIC_API_URL: apiUrl,
  } = process.env;

const Event = ({ event, types, user }) => {
    const [query, setQuery] = useState({
        title: event.title,
        text: event.text,
        seats: event.seats,
        location: event.location, 
        startdate: new Date(event.startdate).toISOString().replace('Z', ''),
        enddate: new Date(event.enddate).toISOString().replace('Z', ''),
        event_type_id: event.event_type_id
      });
    const handleParam = setValue => e => setValue(e.target.value)
    const UpdateAdd = async update => {
        update.preventDefault();

        console.log(update.target.event_type_id.value)

        const data = {
            title: update.target.title.value,
            text: update.target.text.value,
            seats: update.target.seats.value === "" ? "0" : update.target.seats.value,
            location: update.target.location.value,
            startDate: update.target.startDate.value === "" ? null : toDateTime(new Date(update.target.startDate.value)),
            endDate: update.target.endDate.value === "" ? null : toDateTime(new Date(update.target.endDate.value)),
            event_type_id: update.target.event_type_id.value,
            signup: Boolean(update.target.signup.checked),
            user: user.user.id,
        };

        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
        const res = await fetch(`${apiUrl}/event/update/${event.id}`, options)
        console.log(res)
        const result = await res.json()
        console.log(result);
        Router.push('/events')
        alert(result.msg)
    }
    return (
        <div className={addForm.add_container}>
            <h1>Change Event</h1>
            <form onSubmit={UpdateAdd}>
                <div>
                    <input type='text'
                        name='title'
                        required
                        placeholder={'Title'}
                        value={query.title}
                        onChange={handleParam(setQuery)}
                    />
                    <textarea name='text' 
                        value={query.text}
                        onChange={handleParam(setQuery)}
                    >
                        
                    </textarea>
                    <input type='text'
                        name='location'
                        placeholder={'Location'}
                        required
                        value={query.location}
                        onChange={handleParam(setQuery)}
                    />
                    <label>Signup from: </label>
                    {
                        event.signup ? (
                            <input type='checkbox'
                                name='signup'
                                id='signup'
                                onClick={showSignup}
                                onChange={handleParam(setQuery)}
                                checked
                            />
                        ) : (
                            <input type='checkbox'
                                name='signup'
                                id='signup'
                                onClick={showSignup}
                                onChange={handleParam(setQuery)}
                            /> 
                        )
                    }
                    <div id='timeDiv'>
                        <label>Seats: </label>
                        <input type='number'
                            name='seats'
                            value={query.seats}
                            onChange={handleParam(setQuery)}
                        />
                        <label>startDate: </label>
                        <input type='datetime-local'
                            name='startDate'
                            value={query.startdate}
                            onChange={handleParam(setQuery)}
                        />
                        <label>endDate: </label>
                        <input type='datetime-local'
                            name='endDate'
                            value={query.enddate}
                            onChange={handleParam(setQuery)}
                        />
                    </div>
                    <label>Event Type</label>
                    <select name="event_type_id">
                        {types.map((type) => {
                        return (
                            <option value={type.id}>{type.name}</option>
                        )
                        })}
                    </select>
                </div>
                <button type='submit'>Add Event</button>
            </form>
        </div>
    )
}

export async function getServerSideProps({ req, params }) {
    console.log(req.params)
    const res = await fetch(`${apiUrl}/event/${params.eventId}`);
    console.log(res);
    const event = await res.json();
    const resType = await fetch(`${apiUrl}/event/types`);
    const types = await resType.json();
    const cookie = req.headers.cookie;
    const resUser = await fetch(`${apiUrl}/users/me`, {
    headers: { 
        cookie: cookie,
    }
    })
    const user = await resUser.json()
    return {
        props: {
            event,
            types,
            user,
        },
    }
}

export default Event
