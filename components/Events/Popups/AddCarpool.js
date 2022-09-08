import React from 'react'
import { useRouter } from "next/router"
import carpoolPop from './CarpoolStyle.module.scss'
import HttpRequest from '../../Utils/HttpRequest'

const {
    NEXT_PUBLIC_API_URL: apiUrl,
  } = process.env;

const AddCarpool = ({ event, cookie, user }) => {
    const [isOpenChange, setIsOpenChange] = React.useState(false)
    const [isSeats, setSeats] = React.useState('')
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
            seats: isSeats,
            user_id: user.id,
            event_id: event.id
        }
        const res = await HttpRequest('POST', `${apiUrl}/event/add/carpool/${event.id}`, data, cookie)
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
            <div className={carpoolPop.containerpop}>
                <div className={carpoolPop.searchpop}>
                    <div className={carpoolPop.searchpop_header}>
                        <p>Register a carpool</p>
                        <button onClick={ClosePopup}> X </button>
                    </div>
                    <div> 
                        <label>Seats: </label>
                        <input type="number" max="16" min="1" name='seats' required onChange={e => setSeats(e.target.value)}></input>
                        <button onClick={e => carpoolAdd(user, event)}>Add Carpool</button>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default AddCarpool