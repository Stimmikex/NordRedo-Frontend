import navStyles from '../styles/Nav.module.scss';
import Link from 'next/link';
import { faHome, faCalendarAlt, faCalendarCheck, faCalendarPlus, faStore, faPlusSquare, faUniversity, faUsers, faUser, faUserShield, faInfo, faUserPlus, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as navF from './NavFunctions.js'

import React from 'react'

const Nav = ({ user }) => {
    return (
        <nav className={navStyles.nav} id="nav">
            <div className={navStyles.nav_container_bar}>
                <div className={navStyles.nav_container_bar_split} style={{background: `url('../../nordLogo/header.jpg')`}}>
                    <img src="../../nordLogo/nord-lit.svg"></img>
                    <i><FontAwesomeIcon icon={faHome} onClick={navF.openNav} /></i>
                    {console.log("user "+ user)}
                </div>
            </div>
            <div className={navStyles.nav_container} id="mylinks">
                <div className={navStyles.nav_container_home}>
                    <p onClick={navF.openNav}><Link href='/'><div className={navStyles.linkContainer}><p>Home</p><i><FontAwesomeIcon icon={faHome} onClick={navF.openNav} /></i></div></Link></p>
                </div>
                <div className={navStyles.nav_container_item}>
                    <div className={navStyles.nav_container_item_hidden}>
                        <p onClick={e => navF.closeNav('eventSub')}>Events<i><FontAwesomeIcon icon={faArrowDown}/></i></p>
                    </div>
                    <div className={navStyles.nav_container_item_event} id='eventSub'>
                        <p onClick={e => navF.closeNav('eventSub')}><Link href='/events'><div className={navStyles.linkContainer}><p>Events</p><i><FontAwesomeIcon icon={faCalendarCheck} /></i></div></Link></p>
                        {
                            navF.ifUserAdmin(user) ? (
                                <p onClick={e => navF.closeNav('eventSub')}><Link href='/events/add'><div className={navStyles.linkContainer}><p>Add events</p><i><FontAwesomeIcon icon={faCalendarPlus} /></i></div></Link></p>
                            ) : (
                                console.log("test")
                            )
                        }
                        <p onClick={e => navF.closeNav('eventSub')}><Link href='/events/calendar'><div className={navStyles.linkContainer}><p>Event calendar</p><i><FontAwesomeIcon icon={faCalendarAlt} /></i></div></Link></p>
                    </div>
                    <div className={navStyles.nav_container_item_hidden}>
                        <p onClick={e => navF.closeNav('storeSub')}>Store<i><FontAwesomeIcon icon={faArrowDown}/></i></p>
                    </div>
                    <div className={navStyles.nav_container_item_store} id='storeSub'>
                        <p onClick={e => navF.closeNav('storeSub')}><Link href='/store'><div className={navStyles.linkContainer}><p>Store</p><i><FontAwesomeIcon icon={faStore}/></i></div></Link></p>
                        <p onClick={e => navF.closeNav('storeSub')}><Link href='/store/add'><div className={navStyles.linkContainer}><p>Add to Store</p><i><FontAwesomeIcon icon={faPlusSquare}/></i></div></Link></p>
                    </div>
                </div>
                <div className={navStyles.nav_container_about_hidden}>
                        <p onClick={e => navF.closeNav('infoSub')}>Info<i><FontAwesomeIcon icon={faArrowDown}/></i></p>
                </div>
                <div className={navStyles.nav_container_about} id='infoSub'>
                    <p onClick={navF.openNav}><Link href='/study'><div className={navStyles.linkContainer}><p>Study</p><i><FontAwesomeIcon icon={faUniversity}/></i></div></Link></p>
                    <p onClick={navF.openNav}><Link href='/members'><div className={navStyles.linkContainer}><p>Members</p><i><FontAwesomeIcon icon={faUsers}/></i></div></Link></p>
                    <p onClick={navF.openNav}><Link href='/about'><div className={navStyles.linkContainer}><p>About</p><i><FontAwesomeIcon icon={faInfo}/></i></div></Link></p>
                </div>
                {
                    navF.ifUserAdmin(user) ? (
                        <div className={navStyles.nav_container_admin}>
                            <p onClick={navF.openNav}><Link href='/admin/menu'><div className={navStyles.linkContainer}><p>Admin</p><i><FontAwesomeIcon icon={faUserShield}/></i></div></Link></p>
                        </div>
                    ) : (
                        <div className={navStyles.nav_container_admin}>
                            
                        </div>
                    )
                }
                {
                    navF.ifUserExists(user) ? (
                        <div className={navStyles.nav_container_login}>
                            <p onClick={navF.openNav}><Link href='/users/me'><div className={navStyles.linkContainer}><p>Account</p><i><FontAwesomeIcon icon={faUser}/></i></div></Link></p>
                            <p onClick={navF.openNav}><Link href='/users/logout'><div className={navStyles.linkContainer}><p>Logout</p><i><FontAwesomeIcon icon={faUser}/></i></div></Link></p>
                        </div>
                    ) : (
                        <div className={navStyles.nav_container_login}>
                            <p onClick={navF.openNav}><Link href='/users/login'><div className={navStyles.linkContainer}><p>Login</p><i><FontAwesomeIcon icon={faUser}/></i></div></Link></p>
                            <p onClick={navF.openNav}><Link href='/users/register'><div className={navStyles.linkContainer}><p>Register</p><i><FontAwesomeIcon icon={faUserPlus}/></i></div></Link></p>
                        </div>
                    )
                }
            </div>
        </nav>
    )
}

export default Nav;
