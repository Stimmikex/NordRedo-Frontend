import React from 'react'

const deleteman = ({ user }) => {
    return (
        <div>
            <h1>delete event?</h1>
        </div>
    )
}

export async function getServerSideProps(ctx) {
    const cookie = ctx.req.headers.cookie;
    const resUser = await fetch('https://nordredo-backend.herokuapp.com/users/me', {
    headers: { 
        cookie: cookie,
    }
    })
    const user = await resUser.json()
    return {
      props: {
        user,
      },
    }
  }

export default deleteman
