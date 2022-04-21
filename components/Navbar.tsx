import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Tab {
  id: number
  title: string
  url: string
}

export const Navbar: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<number | null>(null)
  const router = useRouter()

  const tabs: Tab[] = [
    { id: 1, title: 'About', url: '/' },
    { id: 2, title: 'Portfolio', url: '/portfolio' },
    { id: 3, title: 'Contact', url: '/contact' },
  ]

  useEffect(() => {
    let parsedTab: number | string | null = localStorage.getItem('currentTab')
    if (parsedTab) {
      parsedTab = parseInt(parsedTab)
      setCurrentTab(parsedTab)
    }
  }, [])

  const handleClick = (tab: Tab) => {
    setCurrentTab(tab.id)
    localStorage.setItem('currentTab', tab.id.toString())
  }
  return (
    <div className="fixed -left-[240px] z-50 h-screen w-[240px] min-w-[240px] justify-between border-r border-gray-200 bg-white md:flex lg:static ">
      <div className="flex h-full max-h-[831px] w-full flex-col justify-between">
        {/* Logo */}
        <div className="flex w-full items-center justify-center py-4">
          <button onClick={() => router.push('/')}>
            <Image src={'/logo.svg'} width={80} height={80} />
          </button>
        </div>
        {/* Menu */}
        <ul className="flex w-full flex-col">
          {tabs.map((tab) => {
            const selected = router.pathname === tab.url
            return (
              <li
                className="flex h-16 w-full cursor-pointer items-center pl-20"
                key={tab.id}
              >
                <Link href={{ pathname: tab.url }}>
                  <a
                    className={`text-[18px] ${
                      selected
                        ? 'font-medium text-basic-black'
                        : 'text-gray-300 hover:text-gray-400'
                    }`}
                    onClick={() => handleClick(tab)}
                  >
                    {tab.title}
                  </a>
                </Link>
                {selected && <Dot />}
              </li>
            )
          })}
        </ul>
        {/* Social Links */}
        <div className="flex w-full items-center justify-center gap-4 py-4">
          <button>
            <Image src="/brands/github.svg" width={40} height={40} />
          </button>
          <button>
            <Image src="/brands/linkedin.svg" width={40} height={40} />
          </button>
        </div>
      </div>
    </div>
  )
}

export const Dot: React.FC = () => {
  return <div className="ml-4 h-3 w-3 rounded-full bg-primary" />
}
export default Navbar