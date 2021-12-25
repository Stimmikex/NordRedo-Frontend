import React from 'react'
import Link from 'next/link';
import adminMenu from './AdminMenu.module.scss'
import { ifUserAdmin } from '../../components/NavFunctions';

const {
    NEXT_PUBLIC_API_URL: apiUrl,
  } = process.env;

const menu = ({ user }) => {
    return (
        <div className={adminMenu.admin_menu_container}>
            <h1>Admin Menu</h1>
            <p>Changes government roles.</p>
            <Link href='/admin/change'>
                <button>Change Goverment</button>
            </Link>
            <p>List of member with options to change roles (member, goverment, admin), also this has the option to change if users are active or not</p>
            <Link href='/admin/members'>
                <button>Members</button>
            </Link>
            <p>Management for ads (add, change and delete)</p>
            <Link href='/admin/ads'>
                <button>Ads</button>
            </Link>
            <p>Invite users</p>
            <Link href='/admin/invite'>
                <button>invite</button>
            </Link>
        </div>
    )
}

export async function getServerSideProps(ctx) {
    const cookie = ctx.req.headers.cookie;
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
        user,
      },
    }
  }


export default menu
