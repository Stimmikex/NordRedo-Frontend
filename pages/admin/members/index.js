import React from 'react'
import SearchUsers from '../../../components/Users/SearchUsers';

const memberList = ({ users, roles }) => {
    return (
        <div>
            <h1>Members</h1>
            <SearchUsers users={users} roles={roles}></SearchUsers>
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
