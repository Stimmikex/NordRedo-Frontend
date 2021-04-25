import React from 'react'
import Users from '../../components/Users/Users.js'

const me = ({ user }) => {
    return (
      <div>{console.log(user)}</div>
        //<Users users={user}></Users>
    )
}

export async function getServerSideProps(ctx) {
    const cookie = ctx.req.headers.cookie;
    const res = await fetch('https://nordredo-backend.herokuapp.com/users/me', {
      headers: {
        cookie: cookie,
      }
    })
    const user = await res.json()
    return {
      props: {
        user,
        cookie,
      },
    }
  }

export default me
