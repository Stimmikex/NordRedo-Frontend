import React from 'react'
import signupList from '../../styles/SignupList.module.scss';
import { ifUserExists } from '../NavFunctions'

const SignupList = ({ signup, style, user }) => {
    console.log(signup)
    return (
        style == "inn" ? 
            ifUserExists(user.user) && signup.id === user.user.id ? 
                <li className={signupList.inn}>{signup.username} <button>Signout</button></li>
            :
                <li className={signupList.inn}>{signup.username}</li>  
        : 
            <li className={signupList.waiting}>{signup.username}</li>
    )
}

export default SignupList