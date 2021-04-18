import React from 'react'
import Users from '../../components/Users/Users.js'

const me = ({ user }) => {
    return (
        <Users users={user}></Users>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://nordredo-backend.herokuapp.com/users/me')
    const user = await res.json()
    console.log(user);
    return {
      props: {
        user,
      },
    }
  }

export default me
