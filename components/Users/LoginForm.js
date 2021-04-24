import React from 'react'
import form from '../../styles/Form.module.scss';
import cookies from 'js-cookie';

const {
    REACT_APP_API_URL: apiUrl,
  } = process.env;

const LoginForm = () => {
    const LoginUser = async event => {
        event.preventDefault();

        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
        };

        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const res = await fetch(`https://nordredo-backend.herokuapp.com/users/login`, options)

        console.log(res);
        const result = await res.json()

        // cookies.set('auth', result.user);
        console.log(result.user);
    }
    return (
        <div className={form.form_container}>
            <h1>Login</h1>
            <form onSubmit={LoginUser}>
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
        </div>
    )
}

export default LoginForm
