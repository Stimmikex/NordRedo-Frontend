import React from 'react'
import UpdateUser from './Popups/UpdateUser';
import DeleteUser from './Popups/DeleteUser';

const Users = ({ user, roles, type}) => {
    return (
        <div>
            <div>
                <h1>{user.username}</h1>
                <p><b>Role:</b> {user.name}</p>
                <p><b>Joined:</b> {user.date_joined}</p>
                <p><b>active:</b> {user.active.toString()}</p>
                <p><b>Last login:</b> {user.last_login}</p>
            </div>
            {
                type === 'select' ? (
                    <div>
                        <button>Change Seets</button>
                    </div>
                ) : (
                    <div>
                        <DeleteUser user={user}></DeleteUser>
                        <UpdateUser user={user} roles={roles}></UpdateUser>
                        <button>Shadow Ban</button>
                    </div>
                )
            }
        </div>
    )
}

export default Users
