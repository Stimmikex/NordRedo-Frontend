import React from 'react'
import Nav from './Nav';
import Footer from './Footer';
import utils from '../styles/Utils.module.scss'

const Layout = ({ children, user }) => {
    return (
        <body className={utils.body_container}>
            <Nav user={user}/>
                <main className={utils.content}>
                    {children}
                </main>
            <Footer />
        </body>
    )
}

export default Layout
