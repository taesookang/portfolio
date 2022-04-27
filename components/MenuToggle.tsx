import React from 'react'

interface Props {
  menuOpen: boolean
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuToggle: React.FC<Props> = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="fixed top-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm shadow-zinc-300 lg:hidden">
      <div
        className={`menu-btn ${menuOpen && 'active'}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="line1" />
        <span className="line2" />
        <span className="line3" />
      </div>
    </div>
  )
}

export default MenuToggle
