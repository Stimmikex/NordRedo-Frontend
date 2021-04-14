import React from 'react'
import Router from "next/router"
import userPop from '../../styles/UserPopup.module.scss'
import SearchUsers from '../../components/Users/SearchUsers.js';

const change = ({ gov, users }) => {
    const [isOpenChange, setIsOpenChange] = React.useState(false)

    const ClosePopup = () => {
        setIsOpenChange(false)
      }

    let OpenPopup = () => {
        setIsOpenChange(true)
        Router.push({ shallow: true })
      }
    
    return (
        <div>
            <h1>Change Government</h1>
            {gov.map((gover) => {
            return (
                <div>
                    <h2>{gover.title}</h2>
                    <p>{gover.username}</p>
                    <p>Year: {gover.year}</p>
                    <button  onClick={e => OpenPopup()}>Change</button>
                    {isOpenChange && (
                    <div className={userPop.containerpop}>
                        <div className={userPop.searchpop}>
                            <div className={userPop.searchpop_header}>
                                <p>Update user for {gover.title}</p>
                                <button onClick={ClosePopup}> X </button>
                            </div>
                            <div className={userPop.searchpop_container}>
                                <SearchUsers users={users} type={'select'}></SearchUsers>
                            </div>
                        </div>
                    </div>
                )}
                </div>
            )
            })}
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch(`https://nordredo-backend.herokuapp.com/admin/gov`);
    const gov = await res.json();
    const resUsers = await fetch(`https://nordredo-backend.herokuapp.com/admin/members`);
    const users = await resUsers.json();
    return {
        props: {
            gov,
            users,
        },
    }
}

export default change
