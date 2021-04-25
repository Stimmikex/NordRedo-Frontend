import navStyles from '../styles/Nav.module.scss';
import Link from 'next/link';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'

const Nav = ({ user }) => {
    function openNav() {
        const x = document.getElementById("mylinks");
        console.log('testing click');
        if (x.style.display === "flex") {
            if(document.body.clientWidth > 600) {
                x.style.display = "flex";
            } else {
                x.style.display = "none";
            }
        } else {
          x.style.display = "flex";
        }
        if (typeof window !== "undefined") {
            window.addEventListener("resize", function(event) {
                if(document.body.clientWidth > 600) {
                    x.style.display = "flex";
                } else {
                    x.style.display = "none";
                }
            })
        }
    }
    return (
        <nav>
            <div className={navStyles.nav_container_bar}>
                <div className={navStyles.nav_container_bar_split} style={{background: `url('../../nordLogo/header.jpg')`}}>
                    <img src="../../nordLogo/nord-lit.svg"></img>
                    <i><FontAwesomeIcon icon={faHome} onClick={openNav} /></i>
                </div>
            </div>
            <div className={navStyles.nav_container} id="mylinks">
                <div className={navStyles.nav_container_home}>
                    <p onClick={openNav}><Link href='/'>Home</Link></p>
                </div>
                <div className={navStyles.nav_container_item}>
                    <div className={navStyles.nav_container_item_event}>
                        <p onClick={openNav}><Link href='/events'>Events</Link></p>
                        <p onClick={openNav}><Link href='/events/add' onClick={openNav}>Add events</Link></p>
                        <p onClick={openNav}><Link href='/events/calendar'>Event calendar</Link></p>
                    </div>
                    <div className={navStyles.nav_container_item_store}>
                        <p onClick={openNav}><Link href='/store'>Store</Link></p>
                        <p onClick={openNav}><Link href='/store/add'>Add to Store</Link></p>
                    </div>
                </div>
                <div className={navStyles.nav_container_about}>
                    <p onClick={openNav}><Link href='/study'>Study</Link></p>
                    <p onClick={openNav}><Link href='/members'>Members</Link></p>
                    <p onClick={openNav}><Link href='/about'>About</Link></p>
                </div>
                <div className={navStyles.nav_container_admin}>
                    <p onClick={openNav}><Link href='/admin/menu'>Admin</Link></p>
                </div>
                <div className={navStyles.nav_container_login}>
                    <p onClick={openNav}><Link href='/users/login'>Login</Link></p>
                    <p onClick={openNav}><Link href='/users/register'>Register</Link></p>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
