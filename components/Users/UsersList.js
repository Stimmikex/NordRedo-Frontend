import React from 'react'
import User from './Users';
import SearchUsers from './SearchUsers.js';

const UsersList = ({ users, roles }) => {
    return (
        <div>
            <SearchUsers roles={roles}></SearchUsers>
        </div>
    )
}

export default UsersList
