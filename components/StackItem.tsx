import React from 'react'
import Image from 'next/image'
import { Banner } from '.'
import { IStack } from '../data/types'

interface Props {
  stack: IStack
}

export const StackItem: React.FC<Props> = ({ stack }) => {
  return (
    <li className="mb-3 flex items-center justify-between">
      <div className="flex items-center">
        <div className="relative h-10 w-10 overflow-hidden rounded-md border border-gray-300 p-2 ">
          <Image
            src={stack.image}
            layout="fill"
            objectFit="scale-down"
            objectPosition="center"
          />
        </div>
        <span className="mx-2 text-sm">{stack.title}</span>
      </div>
      <Banner level={stack.level} />
    </li>
  )
}

export default StackItem
