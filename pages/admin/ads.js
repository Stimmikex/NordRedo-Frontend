import React from 'react'
import Link from 'next/Link';
import AdsList from '../../components/Ads/AdsList.js'
import AddAds from '../../components/Ads/AddAds.js'


const ads = ({ getAds, user }) => {
    return (
        <div>
            <h1>Ads Managment</h1>
            <AdsList getAds={getAds}></AdsList>
            <AddAds></AddAds>
        </div>
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

export default ads
