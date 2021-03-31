import React from 'react'
import Signup from './Signup';
import signupList from '../../styles/SignupList.module.scss';

const SignupList = ({ signups, signed }) => {
    return (
        <ul className={signupList.list}>
            {signups.map((signup, i) => {
                return (
                    i < signed ? <Signup signup={signup} style="inn" key={signup.id}></Signup> : <Signup signup={signup} style="waiting" key={signup.id}></Signup>
                )
            })}
        </ul>
    )
}

export default SignupList