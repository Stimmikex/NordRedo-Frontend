import React from 'react'
import Router from "next/router"
import userPop from '../../styles/UserPopup.module.scss'

const Users = ({ user }) => {
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
    return (
        <div>
            <div>
                <h1>{user.username}</h1>
                <p><b>Role:</b> {user.name}</p>
                <p><b>Joined:</b> {user.date_joined}</p>
                <p><b>Last login:</b> {user.last_login}</p>
            </div>
            <div>
                <button onClick={e => OpenPopup('Delete')}>Delete User</button>
                <button onClick={e => OpenPopup('Change')}>Update Role</button>
                <button>Shadow Ban</button>
            </div>
            {isOpenChange && (
                <div className={userPop.changepop}>
                    <div className={userPop.changepop_header}>
                        <p>Update user role for {user.username}</p>
                        <button onClick={ClosePopup}> X </button>
                    </div>
                    <div>
                        <p>Roles</p>
                        <select>
                            <option>Test</option>
                        </select>
                    </div>
                </div>
            )}
            {isOpenDelete && (
                <div className={userPop.changepop}>
                    <div className={userPop.changepop_header}>
                        <p>Delete User [{user.username}]</p>
                        <button onClick={ClosePopup}> X </button>
                    </div>
                    <div>
                        <p> Are you sure?</p>
                        <button>Yes</button>
                        <button>No</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Users
