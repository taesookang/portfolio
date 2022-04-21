import React from 'react'

interface Props {
  level: 1 | 2 | 3
}

export const Banner: React.FC<Props> = ({ level }) => {
  return (
    level && (
      <span
        className={`rounded-full border px-2 py-1 text-[8px] tracking-wide ${
          level === 1
            ? 'border-rose-700 bg-rose-100 text-rose-700'
            : level === 2
            ? 'border-yellow-700 bg-yellow-100 text-yellow-700'
            : 'border-green-700 bg-green-100 text-green-700'
        }`}
      >
        {level === 1 ? 'Beginner' : level === 2 ? 'Intermediate' : 'Proficient'}
      </span>
    )
  )
}

export default Banner
