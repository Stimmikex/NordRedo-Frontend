import React from 'react'
import User from './Users';

const UsersList = ({ users, roles }) => {
    return (
        <div>
            {console.log(users)}
            {users.map((user) => {
            return (
                <User user={user} key={user.id} roles={roles}></User>
            )
            })}
        </div>
    )
}

export default UsersList
