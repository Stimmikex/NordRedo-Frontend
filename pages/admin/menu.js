import React from 'react'
import Link from 'next/Link';
import adminMenu from './AdminMenu.module.scss'

const menu = () => {
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
        </div>
    )
}

export default menu
