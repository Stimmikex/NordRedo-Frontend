import React from 'react'
import Users from '../../components/Users/Users.js'
import { getUserWithCookie } from '../../components/fetchUserToken.js'

const me = ({ user }) => {
    return (
        <div>
          <p>{user.username}</p>
          <p>{user.roke_id}</p>
        </div>
    )
}

export async function getServerSideProps(ctx) {
  const res = await fetch('https://nordredo-backend.herokuapp.com/')
  const events = await res.json()
  const itemRes = await fetch('https://nordredo-backend.herokuapp.com/store')
  const items = await itemRes.json()
  const user = await getUserWithCookie(ctx);
  return {
    props: {
      events,
      items,
      user,
    },
  }
}

export default me
