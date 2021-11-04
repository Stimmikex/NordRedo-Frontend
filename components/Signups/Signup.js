import React from 'react'
import signupList from '../../styles/SignupList.module.scss';
import { ifUserExists } from '../NavFunctions'
import { useRouter } from 'next/router';
import { SignoutUser, validRegisterByTime } from '../../lib/Signup/SignFunctions'

const {
    NEXT_PUBLIC_API_URL: apiUrl,
  } = process.env;

const SignupList = ({ signup, style, user, event, cookie }) => {
    const router = useRouter();
    return (
        style == "inn" ? 
            ifUserExists(user) && signup.id === user.id && validRegisterByTime(event) ? 
                <li className={signupList.inn}>{signup.username} <button onClick={e => SignoutUser(router, event, user, cookie)}>Signout</button></li>
            :
                <li className={signupList.inn}>{signup.username}</li>  
        :  ifUserExists(user) && signup.id === user.id && validRegisterByTime(event) ? 
                <li className={signupList.waiting}>{signup.username} <button onClick={e => SignoutUser(router, event, user, cookie)}>Signout</button></li>
            :
                <li className={signupList.waiting}>{signup.username}</li>
    )
}

export default SignupList