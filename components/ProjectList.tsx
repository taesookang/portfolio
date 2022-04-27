import React from 'react'
import { IProject } from '../data/types'

interface Props {
  projects: IProject[]
  currentProjectId: number
  setCurrentProjectId: React.Dispatch<React.SetStateAction<number>>
}

export const ProjectList: React.FC<Props> = ({
  projects,
  currentProjectId,
  setCurrentProjectId,
}) => {
  return (
    <ul className="grid w-full grid-cols-2 flex-col border-y border-primary/30 sm:flex sm:w-[160px] sm:border-y-0 sm:border-gray-200 ">
      {projects.map((project) => (
        <li
          key={project.id}
          className={`cursor-pointer py-4 text-center text-sm font-medium capitalize tracking-wide sm:py-6 sm:text-left sm:text-[24px] ${
            currentProjectId === project.id
              ? ' origin-left bg-primary/10 text-primary sm:scale-125 sm:bg-transparent'
              : 'text-gray-300 hover:text-secondary/50'
          }
                  duration-400 transition-all ease-in-out
                `}
          onClick={() => setCurrentProjectId(project.id)}
        >
          {project.title}
        </li>
      ))}
    </ul>
  )
}

export default ProjectList
