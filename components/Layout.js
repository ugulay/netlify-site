import React from 'react'
import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'

export default function Layout({children, pageTitle, description, ...props}) {
    return (
        <React.Fragment>

            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta charSet="utf-8"/>
                <meta name="Description" content={description}></meta>
                <title>{pageTitle}</title>
            </Head>

            <Header/>

            <main role="main" className="container">
                {children}
            </main>

            <Footer/>


        </React.Fragment>
    )
}
