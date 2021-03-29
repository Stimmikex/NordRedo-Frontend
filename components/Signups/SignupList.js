import React from 'react'
import Signup from './Signup';
import signupList from '../../styles/SignupList.module.scss';

const SignupList = ({ signups }) => {
    return (
        <ul className={signupList.list}>
            {signups.map((signup) => {
                return (
                    <Signup signup={signup} key={signup.id}></Signup>
                )
            })}
        </ul>
    )
}

export default SignupList