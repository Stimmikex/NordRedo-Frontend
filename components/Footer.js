import React from 'react'
import footer from '../styles/Footer.module.scss'
import Link from 'next/link'
import { faFacebook, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer>
            <div className={footer.footer}>
                <div className={footer.footer_about}>
                    <h1>About Us</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo quam arcu, vitae vulputate leo viverra nec. Nullam ac ante non quam interdum lacinia et id elit. Proin suscipit, est nec facilisis lobortis, mauris quam imperdiet est, sodales euismod est felis vel odio. Sed eget rhoncus urna, non pulvinar lacus. Suspendisse augue lorem, sodales maximus venenatis ac, scelerisque a enim. Sed ac sollicitudin felis, nec rhoncus quam. Pellentesque ut ex id metus sollicitudin consequat ac vel sapien. Nullam non hendrerit nisi. In imperdiet neque felis, nec ullamcorper diam lacinia rutrum. Nullam convallis ligula mollis, ultricies leo malesuada, dictum eros.
                            Suspendisse a est elementum, eleifend erat a, commodo est. Curabitur vehicula massa sed odio malesuada finibus. Duis eget velit in risus feugiat auctor. Donec ac eros sit amet mi bibendum pulvinar at quis sem. Sed ultricies porta ligula in pulvinar. Nam interdum lacus id quam volutpat, vel molestie risus ultricies. Pellentesque finibus consectetur risus vel sollicitudin.
                        </p>
                </div>
                <div className={footer.footer_right}>
                    <div className={footer.footer_right_links}>
                        <h1>Quick Links</h1>
                        <Link href='/events'>Events</Link>
                        <Link href='/store'>Store</Link>
                        <Link href='/about'>About</Link>

                    </div>
                    <div className={footer.footer_right_contact}>
                        <h1>Contact Us</h1>
                        <ul>
                            <li>Phone: <a href="tel:525 4760">525 4760</a></li>
                            <li>Email: <a href="mailto: ft@hi.is">ft@hi.is</a></li>
                            <li>Bank info: | Kt. 551087-1589 | Reikningsnúmer 311-26-5587</li>
                            <li>Messenger: </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={footer.footer_socials}>
                <h1>Socials</h1>
                <div>
                    <Link href=""><FontAwesomeIcon icon={faFacebook} /></Link>
                    <Link href=""><FontAwesomeIcon icon={faInstagramSquare} /></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer