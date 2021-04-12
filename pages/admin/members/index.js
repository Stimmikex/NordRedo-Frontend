import React from 'react'
import UsersList from '../../../components/Users/UsersList.js';

const memberList = ({ users, roles }) => {
    return (
        <div>
            <h1>Members</h1>
            <UsersList users={users} roles={roles}></UsersList>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch(`https://nordredo-backend.herokuapp.com/admin/members`);
    const users = await res.json();
    const res1 = await fetch(`https://nordredo-backend.herokuapp.com/admin/roles`);
    const roles = await res1.json();
    return {
        props: {
            users,
            roles,
        },
    }
}

export default memberList
