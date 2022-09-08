import React from 'react'
import { useRouter } from "next/router"
import userPop from '../../../../styles/UserPopup.module.scss'
import HttpRequest from '../../../Utils/HttpRequest'

const {
    NEXT_PUBLIC_API_URL: apiUrl,
  } = process.env;

const AddCarpool = ({ event, cookie, user }) => {
    const [isOpenChange, setIsOpenChange] = React.useState(false)
    const router = useRouter()

    const ClosePopup = () => {
        setIsOpenChange(false)
      }

    let OpenPopup = () => {
        setIsOpenChange(true)
        router.push(router.asPath)
      }

    const carpoolAddFunction = async (user, event) => {
        const data = {
            user_id: user,
            event_id: event
        }
        const res = await HttpRequest('POST', `${apiUrl}/event/add/carpool/${event}`, data, cookie)
        router.reload()
    }
    
    const carpoolAdd = (user, event) => {
        carpoolAddFunction(user, event);
        router.push(router.asPath)
        ClosePopup();
    }
    
    return (
        <div>
            <button onClick={OpenPopup}>Register a Carpool</button>
            {isOpenChange && (
            <div className={userPop.containerpop}>
                <div className={userPop.searchpop}>
                    <div className={userPop.searchpop_header}>
                        <p>Register a carpool</p>
                        <button onClick={ClosePopup}> X </button>
                    </div>
                    <div> 
                        <label>Seats: </label>
                        <input type="number" max="16" min="1" required></input>
                        <button onClick={e => carpoolAdd(user.id, event.id)}>Add Carpool</button>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default AddCarpool