import React from 'react'
import Image from 'next/image'

export const Profile: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-10">
      <div className="relative aspect-square w-1/4 min-w-[128px] max-w-[280px] overflow-hidden rounded-full border-4 border-primary bg-white">
        <Image
          src="/images/portrait.png"
          layout="responsive"
          width={200}
          height={200}
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <p className="mt-4 text-lg font-medium">Taesoo Kang</p>
      <p className="text-sm text-gray-400">Javascript / React Developer</p>
    </div>
  )
}

export default Profile
