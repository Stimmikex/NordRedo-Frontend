import React from 'react'
import addForm from '../../styles/AddForm.module.scss';

const {
    REACT_APP_API_URL: apiUrl,
  } = process.env;

const EventAddForm = ({ types }) => {
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
                <label>location: </label>
                <input type='text'
                    name='location'
                    required
                />
                <hr></hr>
                <label>Signup from: </label>
                <input type='checkbox'
                    name='signup'
                    id='signup'
                    onClick={showSignup}
                /> 
                <div id='timeDiv' className={addForm.add_container_time}>
                    <label>Seats: </label>
                    <input type='number'
                        name='seats'
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

export default EventAddForm