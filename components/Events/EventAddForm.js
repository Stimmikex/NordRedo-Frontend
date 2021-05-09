import React from 'react'
import addForm from '../../styles/AddForm.module.scss';
import { showSignup, toDateTime } from './EventAddFormFunctions.js'
import Router from 'next/router'

const {
    NEXT_PUBLIC_API_URL: apiUrl,
  } = process.env;

const EventAddForm = ({ types, user, cookie }) => {
    const EventAdd = async event => {
        event.preventDefault();

        const data = {
            title: event.target.title.value,
            text: event.target.text.value,
            seats: event.target.seats.value === "" ? "0" : event.target.seats.value,
            location: event.target.location.value,
            date: event.target.date.value === "" ? null : toDateTime(new Date(event.target.date.value)),
            startDate: event.target.startDate.value === "" ? null : toDateTime(new Date(event.target.startDate.value)),
            endDate: event.target.endDate.value === "" ? null : toDateTime(new Date(event.target.endDate.value)),
            event_type_id: event.target.event_type_id.value,
            signup: Boolean(event.target.signup.checked),
            user: user.user.id,
        };

        const options = {
            method: 'POST',
            headers: {
                cookie,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include',
        }
        const res = await fetch(`${apiUrl}/event/add`, options)
        console.log(res)
        const result = await res.json()
        console.log(result);
        Router.push('/events')
        alert(result.msg)
    }
    return (
        <div className={addForm.add_container}>
            <h1>Add Event</h1>
            {console.log("cookie: "+cookie)}
            <form onSubmit={EventAdd} enctype="application/x-www-form-urlencoded">
            <div>
                <input type='text'
                    name='title'
                    placeholder={'Title'}
                    required
                />
                <textarea name='text' placeholder={'Description'}></textarea>
                <input type='text'
                    name='location'
                    placeholder={'Location'}
                    required
                />
                <input type='date'
                    name='date'
                />
                <label>Signup from: </label>
                <input type='checkbox'
                    name='signup'
                    id='signup'
                    onClick={showSignup}
                /> 
                <div id='timeDiv' className={addForm.add_container_time}>
                    <input type='number'
                        name='seats'
                        placeholder={'Seats'}
                    />
                    <label>startDate: </label>
                    <input type='datetime-local'
                        name='startDate'
                    />
                    <label>endDate: </label>
                    <input type='datetime-local'
                        name='endDate'
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

export default EventAddForm