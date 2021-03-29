import React from 'react'
import addForm from '../../styles/AddForm.module.scss';

const {
    REACT_APP_API_URL: apiUrl,
  } = process.env;

const EventAddForm = () => {
    const EventAdd = async event => {
        event.preventDefault();

        const data = {
            title: event.target.title.value,
            seats: event.target.seats.value,
            location: event.target.location.value,
            startDate: event.target.startDate.value,
            endDate: event.target.endDate.value,
        };

        const options = {
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST'
        }

        console.log(data);

        const res = await fetch(`https://nordredo-backend.herokuapp.com/event/add`, options)

        console.log(res);
        const result = await res.json()
        console.log(result);
    }
    return (
        <div className={addForm.add_container}>
            <h1>Add Event</h1>
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
        </div>
    )
}

export default EventAddForm