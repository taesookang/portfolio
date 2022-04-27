import React, { useState, useEffect } from 'react'
import { Navbar, MenuToggle } from '.'
import Head from 'next/head'

interface Props {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <div className="relative flex h-full max-h-screen w-full max-w-full">
      <Head>
        <title>Taesoo's Portfolio</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`fixed h-full w-full ${
          menuOpen ? 'z-40 bg-[#0f2735]/50' : '-z-10'
        } transition-colors duration-300 ease-in`}
      />
      <MenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div
        className={`absolute h-fit max-h-screen w-full lg:static ${
          menuOpen ? 'left-[240px]' : 'left-0'
        } transition-all duration-300 ease-in`}
      >
        {children}
      </div>
    </div>
  )
}

export default Layout
