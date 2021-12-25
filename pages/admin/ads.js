import React from 'react'
import AdsList from '../../components/Ads/AdsList.js'
import AddAds from '../../components/Ads/AddAds.js'
import { ifUserAdmin } from '../../components/NavFunctions';

const {
    NEXT_PUBLIC_API_URL: apiUrl,
  } = process.env;

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
    const cookie = ctx.req.headers.cookie;
    const res = await fetch(`${apiUrl}/admin/ads`, {
      headers: { 
        cookie: cookie,
    }
    });
    const getAds = await res.json();
    const resUser = await fetch(`${apiUrl}/users/me`, {
    headers: { 
        cookie: cookie,
    }
    })
    const user = await resUser.json()
    if (!ifUserAdmin(user)) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        }
      }
    return {
        props: {
            getAds,
            user,
        },
    }
}

export default ads
