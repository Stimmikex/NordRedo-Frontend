import React from 'react'
import Router from "next/router"
import userPop from '../../../styles/UserPopup.module.scss'
import SearchUsers from '../SearchUsers.js';

const UpdateGovernment = ({ gover, users }) => {
    const [isOpenChange, setIsOpenChange] = React.useState(false)

    const ClosePopup = () => {
        setIsOpenChange(false)
      }

    let OpenPopup = () => {
        setIsOpenChange(true)
        Router.push({ shallow: true })
      }
    
      const submitUpdate = (userId, roleId) => {
        updateUserRole(userId, roleId);
        ClosePopup();
    }
    
    return (
        <div>
            <button  onClick={e => OpenPopup()}>Change</button>
            {isOpenChange && (
            <div className={userPop.containerpop}>
                <div className={userPop.searchpop}>
                    <div className={userPop.searchpop_header}>
                        <p>Update user for {gover.title}</p>
                        <button onClick={ClosePopup}> X </button>
                    </div>
                    <div className={userPop.searchpop_container}>
                        <SearchUsers users={users} type={'select'} gover={gover}></SearchUsers>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default UpdateGovernment
