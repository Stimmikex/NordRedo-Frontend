import React from 'react'
import User from './Users';

const UsersList = ({ users, roles }) => {
    return (
        <div>
            {users.map((user) => {
            return (
                <User user={user} key={user.id} roles={roles}></User>
            )
            })}
        </div>
    )
}

export default UsersList
