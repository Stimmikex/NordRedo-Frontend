import React from 'react'
import govStyles from './Gov.module.scss'
import UpdateGovernment from '../../components/Users/Popups/UpdateGovernment';
import { ifUserAdmin } from '../../components/NavFunctions';

const {
    NEXT_PUBLIC_API_URL: apiUrl,
  } = process.env;

const change = ({ gov, users, user }) => {
    return (
        <div>
            <h1>Change Government</h1>
            {gov.map((gover) => {
            return (
                <div className={govStyles.govContainer}>
                    <h2>{gover.title}</h2>
                    <img src={`../../govProfilImages/${gover.title}.jpg`} alt={gover.username}></img>
                    <p>{gover.username}</p>
                    <p>Year: {gover.year}</p>
                    <UpdateGovernment gover={gover} users={users}></UpdateGovernment>
                </div>
            )
            })}
        </div>
    )
}

export async function getServerSideProps(ctx) {
    const cookie = ctx.req.headers.cookie;
    const res = await fetch(`${apiUrl}/admin/gov`, {
        headers: { 
            cookie: cookie,
        }
    });
    const gov = await res.json();
    const resUsers = await fetch(`${apiUrl}/admin/members`, {
        headers: { 
            cookie: cookie,
        }
    });
    const users = await resUsers.json();
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
            gov,
            users,
            user,
        },
    }
}

export default change
