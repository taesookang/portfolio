import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Tab {
  id: number
  title: string
  url: string
}

interface Props {
  menuOpen: boolean
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Navbar: React.FC<Props> = ({ menuOpen, setMenuOpen }) => {
  const router = useRouter()

  const tabs: Tab[] = [
    { id: 1, title: 'About', url: '/' },
    { id: 2, title: 'Portfolio', url: '/portfolio' },
    { id: 3, title: 'Contact', url: '/contact' },
  ]

  return (
    <div
      className={`fixed ${
        menuOpen ? 'left-0' : '-left-[240px]'
      } z-50 flex h-full w-[240px] min-w-[240px] justify-between border-r border-gray-200 bg-white transition-all duration-300 ease-in sm:h-screen lg:static`}
    >
      <div className="flex h-full w-full flex-col justify-between py-8 sm:max-h-[831px]">
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
                        ? 'font-medium text-primary'
                        : 'hover-hover:text-secondary text-gray-300'
                    }
                     transition-all duration-300 ease-in-out
                    `}
                    onClick={() => setMenuOpen(false)}
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
          <Link href="https://github.com/taesookang/">
            <a target="_blank" rel="noreferrer">
              <button>
                <Image src="/socials/github.svg" width={40} height={40} />
              </button>
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/taesoo-kang/">
            <a target="_blank" rel="noreferrer">
              <button>
                <Image src="/socials/linkedin.svg" width={40} height={40} />
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export const Dot: React.FC = () => {
  return <div className="ml-4 h-2 w-2 rounded-full bg-primary" />
}
export default Navbar
