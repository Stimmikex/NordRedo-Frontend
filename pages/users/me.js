import React from 'react'
import { getUserWithCookie } from '../../components/fetchUserToken.js'
import Profile from '../../components/Users/Profile.js'
import EventStats from '../../components/Events/EventStats.js'
import UserItems from '../../components/Store/UserItems.js'

const me = ({ user }) => {
    return (
      <div>
        <Profile user={user}></Profile>
        <EventStats></EventStats>
        <UserItems></UserItems>
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
