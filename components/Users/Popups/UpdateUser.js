import React from 'react'
import Router from "next/router"
import userPop from '../../../styles/UserPopup.module.scss'
import userStyle from '../Users.module.scss'
import HttpRequest from '../../Utils/HttpRequest'

const UpdateUser = ({ user, roles, cookie }) => {
    const [isOpenChange, setIsOpenChange] = React.useState()
    let OpenPopup = (type) => {
        setIsOpenChange(true)
        Router.push({ shallow: true })
      }
    const ClosePopup = () => {
        setIsOpenChange(false)
      }
    const updateUserRole = async (userId, roleId) => {
        HttpRequest('PATCH', `${apiUrl}/users/${userId}/${roleId}`, null, 'members', cookie)
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
        <div className={userStyle.updateTrigger}>
            <button className={userStyle.updateTrigger_button} onClick={e => OpenPopup()}>Update Role</button>
            {isOpenChange && (
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
            )}
        </div>
    )
}

export default UpdateUser
