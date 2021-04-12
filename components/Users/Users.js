import React from 'react'
import Router from "next/router"
import userPop from '../../styles/UserPopup.module.scss'

const Users = ({ user, roles }) => {
    const [isOpenChange, setIsOpenChange] = React.useState(false)
    const [isOpenDelete, setIsOpenDelete] = React.useState(false)
    

    const ClosePopup = () => {
        setIsOpenChange(false)
        setIsOpenDelete(false)
      }

    let OpenPopup = (type) => {
        if (type === 'Change') {
            setIsOpenChange(true)
            setIsOpenDelete(false)
            Router.push({ shallow: true })
        } else {
            setIsOpenDelete(true)
            setIsOpenChange(false)
            Router.push({ shallow: true })
        }
      }
    const deleteUser = async (id) => {

        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const res = await fetch(`https://nordredo-backend.herokuapp.com/users/${id}`, options)

        await res.json()
        ClosePopup();
    }
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
        ClosePopup();
    }
    const getOption = () => {
        const option = document.getElementById('role_change');
        const selected = option.options[option.selectedIndex].value;
        return selected;
    }
    return (
        <div>
            <div>
                <h1>{user.username}</h1>
                <p><b>Role:</b> {user.name}</p>
                <p><b>Joined:</b> {user.date_joined}</p>
                <p><b>active:</b> {user.active.toString()}</p>
                <p><b>Last login:</b> {user.last_login}</p>
            </div>
            <div>
                <button onClick={e => OpenPopup('Delete')}>Delete User</button>
                <button onClick={e => OpenPopup('Change')}>Update Role</button>
                <button>Shadow Ban</button>
            </div>
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
                            <button onClick={e => updateUserRole(user.id, getOption())}>Update</button>
                        </div>
                    </div>
                </div>
            )}
            {isOpenDelete && (
                <div>
                    <div className={userPop.containerpop}>
                        <div className={userPop.changepop}>
                            <div className={userPop.changepop_header}>
                                <p>Delete User [{user.username}]</p>
                                <button onClick={ClosePopup}> X </button>
                            </div>
                            <div>
                                <p> Are you sure?</p>
                                <button onClick={e => deleteUser(user.id)}>Yes</button>
                                <button onClick={ClosePopup}>No</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Users
