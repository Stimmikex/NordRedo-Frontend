import navStyles from '../styles/Nav.module.scss';
import Link from 'next/link';

import React from 'react'

const Nav = () => {
    return (
        <nav className={navStyles.nav_container}>
            <ul className={navStyles.nav_container_main}>
                <li><Link href='/'>Home</Link></li>
                <li>
                    <ul>
                        <li><Link href='/events'>Events</Link></li>
                        <li><Link href='/events/add'>Add events</Link></li>
                    </ul>  
                </li>
                <li>
                    <ul>
                        <li><Link href='/users/login'>Login</Link></li>
                        <li><Link href='/users/register'>Register</Link></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><Link href='/store'>Store</Link></li>
                        <li><Link href='/store/add'>Add to Store</Link></li>
                    </ul>
                </li>
                <li><Link href='/study'>Study</Link></li>
                <li><Link href='/members'>Numbers</Link></li>
                <li><Link href='/about'>About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;
