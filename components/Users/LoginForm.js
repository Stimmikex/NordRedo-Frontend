import React from 'react'
import form from '../../styles/Form.module.scss';
import cookies from 'js-cookie';
import Router from 'next/router'

const {
    NEXT_PUBLIC_API_URL: apiUrl,
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
            credentials: 'include',
        }

        const res = await fetch(`${apiUrl}/users/login`, options)
        const result = await res.json()
        cookies.set('auth', result.token);
        if (result.token) {
            Router.push('/events')
        }
        Router.push(Router.asPath)
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
                <input type='password'
                    name='password'
                    placeholder='password'
                    required
                />
                <button type='submit'>Login</button>
            </div>
        </form>
        </div>
    )
}

export default LoginForm
