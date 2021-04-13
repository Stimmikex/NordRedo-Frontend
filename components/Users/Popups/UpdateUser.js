import React from 'react'
import userPop from '../../../styles/UserPopup.module.scss'
import * as users from '../Users';

const UpdateUser = () => {
    const updateUserRole = async (userId, roleId) => {

        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const res = await fetch(`https://nordredo-backend.herokuapp.com/users/${userId}/${roleId}`, options)

        console.log(res)

        await res.json()
        ;
    }
    const submitUpdate = (userId, roleId) => {
        updateUserRole(userId, roleId);
        ClosePopup();
    }
    const getOption = () => {
        const option = document.getElementById('role_change');
        const selected = option.options[option.selectedIndex].value;
        return selected;
    }
    return (
        <div className={userPop.containerpop}>
            <div className={userPop.changepop}>
                <div className={userPop.changepop_header}>
                    <p>Update user role for {user.username}</p>
                    <button onClick={ClosePopup}> X </button>
                </div>
                <div>
                    <label>Roles</label>
                    <select id="role_change">
                        {console.log(roles)}
                        {roles.map((role) => {
                            return (
                                <option value={role.id}>{role.name}</option>
                            )
                        })
                        }
                    </select>
                    <button onClick={e => submitUpdate(user.id, getOption())}>Update</button>
                </div>
            </div>
        </div>
    )
}

export default UpdateUser
