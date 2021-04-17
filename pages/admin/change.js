import React from 'react'
import Router from "next/router"
import userPop from '../../styles/UserPopup.module.scss'
import SearchUsers from '../../components/Users/SearchUsers.js';
import UpdateGovernment from '../../components/Users/Popups/UpdateGovernment';

const change = ({ gov, users }) => {
    return (
        <div>
            <h1>Change Government</h1>
            {gov.map((gover) => {
            return (
                <div>
                    <h2>{gover.title}</h2>
                    <img src alt={gover.username}></img>
                    <p>{gover.username}</p>
                    <p>Year: {gover.year}</p>
                    <UpdateGovernment gover={gover} users={users}></UpdateGovernment>
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
