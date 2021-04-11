import React from 'react'
import UsersList from '../../../components/Users/UsersList.js';

const memberList = ({ users }) => {
    return (
        <div>
            <h1>Members</h1>
            <UsersList users={users}></UsersList>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch(`https://nordredo-backend.herokuapp.com/admin/members`);
    const users = await res.json();
    return {
        props: {
            users,
        },
    }
}

export default memberList
