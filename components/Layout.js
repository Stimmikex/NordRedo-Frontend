import React from 'react'
import Nav from './Nav';

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <div>
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
