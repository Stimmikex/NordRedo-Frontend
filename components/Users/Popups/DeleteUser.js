import React from 'react'

const DeleteUser = () => {
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

export default DeleteUser
