import React from 'react'
import SearchUsers from '../../../components/Users/SearchUsers';
import { ifUserAdmin } from '../../../components/NavFunctions';

const memberList = ({ users, roles, cookie }) => {
    return (
        <div>
            <h1>Members</h1>
            <SearchUsers users={users} roles={roles} cookie={cookie} ></SearchUsers>
        </div>
    )
}

export async function getServerSideProps(ctx) {
    const cookie = ctx.req.headers.cookie;
    const res = await fetch(`https://nordredo-backend.herokuapp.com/admin/members`, {
        headers: { 
            cookie: cookie,
        }
    });
    const users = await res.json();
    const res1 = await fetch(`https://nordredo-backend.herokuapp.com/admin/roles`, {
        headers: { 
            cookie: cookie,
        }
    });
    const roles = await res1.json();
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
            cookie,
        },
    }
}

export default memberList
