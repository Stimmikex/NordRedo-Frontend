import React from 'react'
import signupList from '../../styles/SignupList.module.scss';

const SignupList = ({ signup, style}) => {
    return (
        style == "inn" ? <li className={signupList.inn}>{signup.username}</li> : <li className={signupList.waiting}>{signup.username}</li>
    )
}

export default SignupList