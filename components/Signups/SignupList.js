import React from 'react'
import Signup from './Signup';

const SignupList = ({ signups }) => {
    return (
        <div>
            {signups.map((signup) => {
                return (
                    <Signup signup={signup} key={signup.id}></Signup>
                )
            })}
        </div>
    )
}

export default SignupList