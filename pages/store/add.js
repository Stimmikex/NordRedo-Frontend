import React from 'react'
import StoreAddForm from '../../components/Store/StoreAddForm.js'

const add = ({ user }) => {
    return (
        <StoreAddForm />
    )
}

export async function getServerSideProps(ctx) {
    const res = await fetch(`https://nordredo-backend.herokuapp.com/admin/ads`);
    const getAds = await res.json();
    const cookie = ctx.req.headers.cookie;
    const resUser = await fetch('https://nordredo-backend.herokuapp.com/users/me', {
    headers: { 
        cookie: cookie,
    }
    })
    const user = await resUser.json()
    return {
        props: {
            getAds,
            user,
        },
    }
}

export default add
