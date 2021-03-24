import React from 'react'

const {
    REACT_APP_API_URL: apiUrl,
  } = process.env;

const EventAddForm = () => {
    const EventAdd = async event => {
        event.preventDefault();

        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
        };

        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }

        const res = await fetch(`${apiUrl}event/add`, options)

        console.log(res);
        const result = await res.json()
        console.log(result);
    }
    return (
        <form onSubmit={EventAdd}>
            <div>
                <label>Title: </label>
                <input type='text'
                    name='title'
                    required
                />
                <hr></hr>
                <label>Info: </label>
                <textarea name='text'></textarea>
                <hr></hr>
                <label>Seats: </label>
                <input type='number'
                    name='seats'
                    required
                />
                <hr></hr>
                <label>location: </label>
                <input type='text'
                    name='location'
                    required
                />
                <hr></hr>
                <label>startDate: </label>
                <input type='datetime-local'
                    name='startDate'
                    required
                />
                <hr></hr>
                <label>endDate: </label>
                <input type='datetime-local'
                    name='endDate'
                    required
                />
                <hr></hr>
                <label>Event Type</label>
                <select>
                    <options>Test</options>
                </select>
                <hr></hr>
            </div>
            <button type='submit'>Add Event</button>
        </form>
    )
}

export default EventAddForm