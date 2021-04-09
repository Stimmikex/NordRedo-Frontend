import React from 'react'

const Users = ({ user }) => {
    return (
        <div>
            <div>
                <h1>{user.username}</h1>
                <p><b>Role:</b> {user.name}</p>
                <p><b>Joined:</b> {user.date_joined}</p>
                <p><b>Last login:</b> {user.last_login}</p>
            </div>
            <div>
                <button>Delete User</button>
                <button>Update Role</button>
                <button>Shadow Ban</button>
            </div>
        </div>
    )
}

export default Users
