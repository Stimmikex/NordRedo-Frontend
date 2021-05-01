import React from 'react'
import SearchUsers from '../../../components/Users/SearchUsers';
import { ifUserAdmin } from '../../../components/NavFunctions';

const memberList = ({ users, roles }) => {
    return (
        <div>
            <h1>Members</h1>
            <SearchUsers users={users} roles={roles}></SearchUsers>
        </div>
    )
}

export async function getServerSideProps(ctx) {
    const res = await fetch(`https://nordredo-backend.herokuapp.com/admin/members`);
    const users = await res.json();
    const res1 = await fetch(`https://nordredo-backend.herokuapp.com/admin/roles`);
    const roles = await res1.json();
    const cookie = ctx.req.headers.cookie;
    const resUser = await fetch('https://nordredo-backend.herokuapp.com/users/me', {
    headers: { 
        cookie: cookie,
    }
    })
    const user = await resUser.json()
    if (!ifUserAdmin(user)) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        }
      }
    return {
        props: {
            users,
            roles,
            user,
        },
    }
}

export default memberList
