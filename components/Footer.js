import React from 'react'
import footer from '../styles/Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={footer.footer} style={{background: `url('../../nordLogo/header.jpg')`}}>
            <div className={footer.footer_about}>
                <h1>About Us</h1>
                <p></p>
            </div>
            <div className={footer.footer_links}>
                <h1>Quick Links</h1>
                <Link href='/events'>Events</Link>
                <Link href='/store'>Store</Link>
                <Link href='/about'>About</Link>

            </div>
            <div className={footer.footer_contact}>
                <h1>Contact Us</h1>
                <ul>
                    <li>Phone: <a href="tel:525 4760">525 4760</a></li>
                    <li>Email: <a href="mailto: ft@hi.is">ft@hi.is</a></li>
                    <li>Bank info: | Kt. 551087-1589 | Reikningsnúmer 311-26-5587</li>
                    <li>Messenger: </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer