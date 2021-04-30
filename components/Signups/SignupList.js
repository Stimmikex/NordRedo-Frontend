import React from 'react'
import Signup from './Signup';
import signupList from '../../styles/SignupList.module.scss';

const SignupList = ({ signups, signed, user }) => {
    return (
        <ul className={signupList.list}>
            {signups.map((signup, i) => {
                return (
                    i < signed ? <Signup signup={signup} style="inn" key={signup.id} user={user}></Signup> : <Signup signup={signup} style="waiting" key={signup.id} user={user}></Signup>
                )
            })}
        </ul>
    )
}

export default SignupList