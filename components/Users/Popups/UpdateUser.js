import React from 'react'
import Router, { useRouter } from "next/router"
import userPop from '../../../styles/UserPopup.module.scss'
import userStyle from '../Users.module.scss'
import HttpRequest from '../../Utils/HttpRequest'

const {
    NEXT_PUBLIC_API_URL: apiUrl,
  } = process.env;

const UpdateUser = ({ user, roles, cookie }) => {
    const router = useRouter();
    const [isOpenChange, setIsOpenChange] = React.useState()
    let OpenPopup = () => {
        setIsOpenChange(true)
        Router.push({ shallow: true })
      }
    const ClosePopup = () => {
        setIsOpenChange(false)
      }
    const updateUserRole = async (userId, roleId) => {
       const res = await HttpRequest('PATCH', `${apiUrl}/users/${userId}/${roleId}`, null, cookie)
       Router.reload()
    }
    const submitUpdate = (userId, roleId) => {
        updateUserRole(userId, roleId);
        Router.push(router.asPath)
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
