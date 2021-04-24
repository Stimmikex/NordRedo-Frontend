import navStyles from '../styles/Nav.module.scss';
import Link from 'next/link';
import { faHome, faCalendarAlt, faCalendarCheck, faCalendarPlus, faStore, faPlusSquare, faUniversity, faUsers, faUser, faUserShield, faInfo, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'

const Nav = () => {
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
                    <p onClick={openNav}><Link href='/'><div className={navStyles.linkContainer}><p>Home</p><i><FontAwesomeIcon icon={faHome} onClick={openNav} /></i></div></Link></p>
                </div>
                <div className={navStyles.nav_container_item}>
                    <div className={navStyles.nav_container_item_event}>
                        <p onClick={openNav}><Link href='/events'><div className={navStyles.linkContainer}><p>Events</p><i><FontAwesomeIcon icon={faCalendarCheck} /></i></div></Link></p>
                        <p onClick={openNav}><Link href='/events/add'><div className={navStyles.linkContainer}><p>Add events</p><i><FontAwesomeIcon icon={faCalendarPlus} /></i></div></Link></p>
                        <p onClick={openNav}><Link href='/events/calendar'><div className={navStyles.linkContainer}><p>Event calendar</p><i><FontAwesomeIcon icon={faCalendarAlt} /></i></div></Link></p>
                    </div>
                    <div className={navStyles.nav_container_item_store}>
                        <p onClick={openNav}><Link href='/store'><div className={navStyles.linkContainer}><p>Store</p><i><FontAwesomeIcon icon={faStore}/></i></div></Link></p>
                        <p onClick={openNav}><Link href='/store/add'><div className={navStyles.linkContainer}><p>Add to Store</p><i><FontAwesomeIcon icon={faPlusSquare}/></i></div></Link></p>
                    </div>
                </div>
                <div className={navStyles.nav_container_about}>
                    <p onClick={openNav}><Link href='/study'><div className={navStyles.linkContainer}><p>Study</p><i><FontAwesomeIcon icon={faUniversity}/></i></div></Link></p>
                    <p onClick={openNav}><Link href='/members'><div className={navStyles.linkContainer}><p>Members</p><i><FontAwesomeIcon icon={faUsers}/></i></div></Link></p>
                    <p onClick={openNav}><Link href='/about'><div className={navStyles.linkContainer}><p>About</p><i><FontAwesomeIcon icon={faInfo}/></i></div></Link></p>
                </div>
                <div className={navStyles.nav_container_admin}>
                    <p onClick={openNav}><Link href='/admin/menu'><div className={navStyles.linkContainer}><p>Admin</p><i><FontAwesomeIcon icon={faUserShield}/></i></div></Link></p>
                </div>
                <div className={navStyles.nav_container_login}>
                    <p onClick={openNav}><Link href='/users/login'><div className={navStyles.linkContainer}><p>Login</p><i><FontAwesomeIcon icon={faUser}/></i></div></Link></p>
                    <p onClick={openNav}><Link href='/users/register'><div className={navStyles.linkContainer}><p>Register</p><i><FontAwesomeIcon icon={faUserPlus}/></i></div></Link></p>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
