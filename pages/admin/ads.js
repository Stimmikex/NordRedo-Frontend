import React from 'react'
import Link from 'next/Link';
import AdsList from '../../components/Ads/AdsList.js'
import AddAds from '../../components/Ads/AddAds.js'


const ads = ({ getAds }) => {
    return (
        <div>
            <h1>Ads Managment</h1>
            <AdsList getAds={getAds}></AdsList>
            <AddAds></AddAds>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch(`https://nordredo-backend.herokuapp.com/admin/ads`);
    const getAds = await res.json();
    return {
        props: {
            getAds,
        },
    }
}

export default ads
