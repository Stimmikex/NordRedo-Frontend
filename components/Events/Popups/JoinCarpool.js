import React from 'react'
import { useRouter } from "next/router"
import carpoolPop from './CarpoolStyle.module.scss'
import HttpRequest from '../../Utils/HttpRequest'

const {
    NEXT_PUBLIC_API_URL: apiUrl,
  } = process.env;

const JoinCarpool = ({ carpool, user, poolers, cookie }) => {
    const [isOpenChange, setIsOpenChange] = React.useState(false)
    const router = useRouter()

    const ClosePopup = () => {
        setIsOpenChange(false)
      }

    let OpenPopup = () => {
        setIsOpenChange(true)
        router.push(router.asPath)
      }

    const addPoolerFunction = async (user, carpool) => {
        const data = {
            user_id: user,
            carpool_id: carpool
        }
        const res = await HttpRequest('POST', `${apiUrl}/event/join/carpool/${carpool}`, data, cookie)
        router.reload()
    }

    // const checkIfUserIsPooler = async (user, poolers) => {
    //     poolers.forEach(pooler => {
    //         console.log(pooler)
    //         if (user.id === pooler.user_id) {
    //             return true
    //         }
    //     });
    //     return false;
    // }
    
    const addPooler = (userId, carpool) => {
        addPoolerFunction(userId, carpool);
        router.push(router.asPath)
        ClosePopup();
    }
    
    return (
        <div>
            {
                [...Array(carpool.seats - poolers.length)].map((e, i) => 
                    <button  onClick={e => OpenPopup()}>
                        <img src={`../carpooling/carpool.png`} alt="image of a carpooling" /> 
                    </button>)
            }
            {isOpenChange && (
                <div className={carpoolPop.containerpop}>
                <div className={carpoolPop.searchpop}>
                    <div className={carpoolPop.searchpop_header}>
                        <p>Wanna join this Carpool?</p>
                        <button onClick={ClosePopup}> X </button>
                    </div>
                    <div>
                        <button onClick={e => addPooler(user.id, carpool.id)}>Yes</button>
                        <button onClick={ClosePopup}>No</button>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default JoinCarpool