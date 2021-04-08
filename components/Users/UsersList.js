import React from 'react'
import User from './Users';

const UsersList = ({ users }) => {
    return (
        <div>
            {console.log(users)}
            {/* {users.map((user) => {
            return (
                <User user={user} key={user.id}></User>
            )
            })} */}
        </div>
    )
}

export default UsersList
