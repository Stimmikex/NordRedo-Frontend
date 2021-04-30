import React from 'react'
import Signup from './Signup';
import signupList from '../../styles/SignupList.module.scss';


const SignupList = ({ signups, signed, user, event}) => {
    return (
        <ul className={signupList.list}>
            {signups.map((signup, i) => {
                return (
                    i < signed ? 
                        <Signup signup={signup} style="inn" key={signup.id} user={user} event={event}></Signup> 
                    : 
                        <Signup signup={signup} style="waiting" key={signup.id} user={user} event={event}></Signup>
                )
            })}
        </ul>
    )
}

export default SignupList