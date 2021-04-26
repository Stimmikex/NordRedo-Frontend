import React from 'react'
import Users from '../../components/Users/Users.js'

const me = ({ user }) => {
    return (
        <Users users={user}></Users>
    )
}

export async function getServerSideProps(ctx) {
    const cookie = ctx.req.headers.cookie;
    console.log(cookie);
    const res = await fetch('https://nordredo-backend.herokuapp.com/users/me', {
      headers: {
        cookie: cookie,
      }
    })
    const user = await res.json()
    console.log(user);
    return {
      props: {
        user,
      },
    }
  }

export default me
