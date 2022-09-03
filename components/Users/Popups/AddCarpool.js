import React from 'react'
import { useRouter } from "next/router"
import userPop from '../../../styles/UserPopup.module.scss'
import SearchUsers from '../SearchUsers.js';
import Carpool from '../../Events/Carpool';

const AddCarpool = ({ carpool, poolers }) => {
    const [isOpenChange, setIsOpenChange] = React.useState(false)
    const router = useRouter()

    const ClosePopup = () => {
        setIsOpenChange(false)
      }

    let OpenPopup = () => {
        setIsOpenChange(true)
        router.push(router.asPath)
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
                <div className={userPop.containerpop}>
                <div className={userPop.searchpop}>
                    <div className={userPop.searchpop_header}>
                        <p>Wanna join this Carpool?</p>
                        <button onClick={ClosePopup}> X </button>
                    </div>
                    <div>
                        <button>Yes</button>
                        <button>No</button>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default AddCarpool