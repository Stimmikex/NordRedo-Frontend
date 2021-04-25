import React from 'react'
import UpdateUser from './Popups/UpdateUser';
import DeleteUser from './Popups/DeleteUser';
import HttpRequest from '../Utils/HttpRequest.js';
import userStyle from './Users.module.scss';

const Users = ({ user, roles, type, gover }) => {
    const changeGov = () => {
        HttpRequest('PATCH', `https://nordredo-backend.herokuapp.com/admin/gov/change/${user.id}/${gover.id}`, null)
    }
    return (
        <div className={userStyle.userContainer}>
            <div className={userStyle.userContainer_info}>
                <div className={userStyle.userContainer_info_image}>
                    <img src={`../../roleBanners/${user.name}.jpg`} alt={user.name}></img>
                </div>
                <div className={userStyle.userContainer_info_user}>
                    <h1>{user.username}</h1>
                    <p><b>Joined:</b> {user.date_joined}</p>
                    <p><b>active:</b> {user.active.toString()}</p>
                    <p><b>Last login:</b> {user.last_login}</p>
                </div>
            </div>
            {
                type === 'select' ? (
                    <div>
                        <button onClick={changeGov}>Change Seets</button>
                    </div>
                ) : (
                    <div>
                        <DeleteUser user={user}></DeleteUser>
                        <UpdateUser user={user} roles={roles}></UpdateUser>
                        {/* <button>Shadow Ban</button> */}
                    </div>
                )
            }
        </div>
    )
}

export default Users
