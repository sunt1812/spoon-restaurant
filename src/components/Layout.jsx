import React from 'react'
import { Footer, Header } from '.'
import Router from '../router/Router'

const Layout = () => {
    return (
        <div className="wrapper">
            <Header />
            <main>
                <Router />
            </main>
            <Footer />
        </div>
    )
}

export default Layout