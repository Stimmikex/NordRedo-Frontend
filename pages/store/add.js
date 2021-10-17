import React from 'react'
import StoreAddForm from '../../components/Store/StoreAddForm.js'

const {
    NEXT_PUBLIC_API_URL: apiUrl,
  } = process.env;

const add = ({ user }) => {
    return (
        <StoreAddForm />
    )
}

export async function getServerSideProps(ctx) {
    const res = await fetch(`${apiUrl}/admin/ads`);
    const ads = await res.json();
    const cookie = ctx.req.headers.cookie;
    const resUser = await fetch(`${apiUrl}/users/me`, {
    headers: { 
        cookie: cookie,
    }
    })
    const user = await resUser.json()
    return {
        props: {
            ads,
            user,
        },
    }
}

export default add
