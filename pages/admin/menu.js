import React from 'react'
import Link from 'next/Link';

const menu = () => {
    return (
        <div>
            <h1>Admin Menu</h1>
            <Link href='/admin/change'>
                <button>Change Goverment</button>
            </Link>
            <Link href='/admin/members'>
                <button>Members</button>
            </Link>
            <Link href='/admin/ads'>
                <button>Ads</button>
            </Link>
        </div>
    )
}

export default menu
