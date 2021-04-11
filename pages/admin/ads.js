import React from 'react'
import Link from 'next/Link';

const ads = ({ getAds }) => {
    return (
        <div>
            <h1>Ads Managment</h1>
            {getAds.map((ad) => {
            return (
                <div>
                    <img src={ad.link}></img>
                    <p>{ad.name}</p>
                    <Link></Link><button>Change</button>
                    <button>Delete</button>
                </div>
            )
            })}
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
