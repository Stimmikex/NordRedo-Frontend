import React from 'react'
import Router from "next/router"
import userPop from '../../../styles/UserPopup.module.scss'
import userStyle from '../../Users/Users.module.scss'

const {
    NEXT_PUBLIC_API_URL: apiUrl,
  } = process.env;

const DeleteEvent = ({ event, user }) => {
    const [isOpenDelete, setIsOpenDelete] = React.useState()

    let OpenPopup = () => {
        setIsOpenDelete(true)
        Router.push({ shallow: true })
      }
    

    const ClosePopup = () => {
        setIsOpenDelete(false)
      }

    const deleteEvent = async (id) => {
        const data = {
            user: user.user.id,
        }
        console.log(id)
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }

        const res = await fetch(`${apiUrl}/event/delete/${id}`, options)

        console.log(res)
        const result = await res.json()
        alert(result.msg)
    }
    const submitDelete = (id) => {
        ClosePopup()
        deleteEvent(id);
        Router.push('/events')
    }
    return (
        <div className={userStyle.deleteTrigger}>
            <button className={userStyle.deleteTrigger_button} onClick={e => OpenPopup()}>Delete Event</button>
            {isOpenDelete && (
                <div>
                <div className={userPop.containerpop}>
                    <div className={userPop.changepop}>
                        <div className={userPop.changepop_header}>
                            <p>Delete Event [{event.title}]</p>
                            <button onClick={ClosePopup}> X </button>
                        </div>
                        <div>
                            <p> Are you sure?</p>
                            <button onClick={e => submitDelete(event.id)}>Yes</button>
                            <button onClick={ClosePopup}>No</button>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </div>
    )
}

export default DeleteEvent
