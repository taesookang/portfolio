import React from 'react'
import { Navbar } from '.'
import Head from 'next/head'

interface Props {
    children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className='flex w-full'>
            <Head>
        <title>Taesoo's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <Navbar />
            { children }
        </div>
    );
}

export default Layout;