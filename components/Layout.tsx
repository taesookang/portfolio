import React, { useState } from 'react'
import { Navbar, MenuToggle } from '.'
import Head from 'next/head'

interface Props {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="flex w-full relative">
      <Head>
        <title>Taesoo's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`fixed w-screen h-screen ${menuOpen && "z-40 bg-black/40"} transition-all ease-in duration-300`} />
      <MenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className={`absolute lg:static w-full h-full ${menuOpen ?"left-[240px]":"left-0"} transition-all ease-in duration-300`}>
      {children}
      </div>
    </div>
  )
}

export default Layout
