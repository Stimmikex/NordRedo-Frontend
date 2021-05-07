import React from 'react'
import Router from "next/router"
import userPop from '../../../styles/UserPopup.module.scss'
import userStyle from '../Users.module.scss'

const {
    NEXT_PUBLIC_API_URL: apiUrl,
  } = process.env;

const DeleteUser = ({ user }) => {
    const [isOpenDelete, setIsOpenDelete] = React.useState()

    let OpenPopup = () => {
        setIsOpenDelete(true)
        Router.push({ shallow: true })
      }
    

    const ClosePopup = () => {
        setIsOpenDelete(false)
      }

    const deleteUser = async (id) => {

        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const res = await fetch(`${apiUrl}/users/${id}`, options)

        await res.json()
    }
    const submitDelete = (id) => {
        deleteUser(id);
        ClosePopup();
    }
    return (
        <div className={userStyle.deleteTrigger}>
            <button className={userStyle.deleteTrigger_button} onClick={e => OpenPopup()}>Delete User</button>
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
                            <button onClick={e => submitDelete(user.id)}>Yes</button>
                            <button onClick={ClosePopup}>No</button>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </div>
    )
}

export default DeleteUser
