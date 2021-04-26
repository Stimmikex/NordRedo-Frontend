import React from 'react'
import Users from '../../components/Users/Users.js'

const me = ({ user }) => {
    return (
        <div>
          <p>{user.username}</p>
          <p>{user.roke_id}</p>
        </div>
    )
}

export default me
