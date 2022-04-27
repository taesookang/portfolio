import React from 'react'
import Link from 'next/link'
import { IProject } from '../data/types'

interface Props {
  currentProject: IProject | undefined
}

export const ProjectInfoCard: React.FC<Props> = ({ currentProject }) => {
  return (
    <div className="card h-fit w-full px-6 py-4 sm:h-1/3">
      <div className="flex h-full w-full flex-col items-center gap-4 sm:flex-row">
        <div className="h-full w-full overflow-y-scroll">
          <div className="sticky top-0 ">
            <h2 className="bg-white pb-1 capitalize tracking-wide">
              {currentProject?.title}
            </h2>
            <ul className="flex flex-wrap bg-white pb-1 ">
              {currentProject?.stacks.map((stack) => (
                <li
                  className="mr-2 mb-1 rounded-full bg-secondary px-2 py-1 text-[8px] text-white bg-blend-darken"
                  key={stack}
                >
                  {stack}
                </li>
              ))}
            </ul>
            <div className="h-3 w-full bg-gradient-to-b from-white to-transparent" />
          </div>

          {currentProject?.desc.map((context) => (
            <p className="mb-2 text-sm text-basic-black/60">{context}</p>
          ))}
          <div className="sticky bottom-0 h-4 w-full bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="flex h-full w-[300px] flex-col justify-center gap-4">
          <Link href={currentProject?.website!}>
            <a target="_blank" rel="noreferrer">
              <button className="btn w-full">Live Website</button>
            </a>
          </Link>
          <Link href={currentProject?.github!}>
            <a target="_blank" rel="noreferrer">
              <button className="btn w-full">Source Code</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectInfoCard
