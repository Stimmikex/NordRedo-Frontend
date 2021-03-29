import navStyles from '../styles/Nav.module.scss';
import Link from 'next/link';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'

const Nav = () => {
    function openNav() {
        const x = document.getElementById("mylinks");
        if (x.style.display === "flex") {
          x.style.display = "none";
        } else {
          x.style.display = "flex";
        }
        if (typeof window !== "undefined") {
            window.addEventListener("resize", function(event) {
                const x = document.getElementById("mylinks");
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
                <div className={navStyles.nav_container_bar_split}>
                    <img src="../../nordLogo/nord-lit.svg"></img>
                    <i><FontAwesomeIcon icon={faHome} onClick={openNav} /></i>
                </div>
            </div>
            <div className={navStyles.nav_container} id="mylinks">
                <div className={navStyles.nav_container_home}>
                    <p><Link href='/'>Home</Link></p>
                </div>
                <div className={navStyles.nav_container_item}>
                    <div className={navStyles.nav_container_item_event}>
                        <p><Link href='/events'>Events</Link></p>
                        <p><Link href='/events/add'>Add events</Link></p>
                    </div>
                    <div className={navStyles.nav_container_item_store}>
                        <p><Link href='/store'>Store</Link></p>
                        <p><Link href='/store/add'>Add to Store</Link></p>
                    </div>
                </div>
                <div className={navStyles.nav_container_about}>
                    <p><Link href='/study'>Study</Link></p>
                    <p><Link href='/members'>Members</Link></p>
                    <p><Link href='/about'>About</Link></p>
                </div>
                <div className={navStyles.nav_container_login}>
                    <p><Link href='/users/login'>Login</Link></p>
                    <p><Link href='/users/register'>Register</Link></p>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
