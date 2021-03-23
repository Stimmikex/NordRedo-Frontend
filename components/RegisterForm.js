import React from 'react'

const {
    REACT_APP_API_URL: apiUrl,
  } = process.env;

const RegisterForm = () => {
    const RegisterUser = async event => {
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

        const res = await fetch(`${apiUrl}users/register`, options)

        console.log(res);
        const result = await res.json()
        console.log(result);
    }
    return (
        <form onSubmit={RegisterUser}>
            <div>
                <input type='text'
                    name='username'
                    placeholder='Username'
                    required
                />
            </div>
            <div>
                <input type='password'
                    name='password'
                    placeholder='password'
                    required
                />
            </div>
            <button type='submit'>Login</button>
        </form>
    )
}

export default RegisterForm