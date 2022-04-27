import type { NextPage } from 'next'
import React, { useState } from 'react'
import { projects } from '../data'
import { ProjectList, ProjectPlayer, ProjectInfoCard } from '../components'

const PortfolioPage: NextPage = () => {
  const [currentProjectId, setCurrentProjectId] = useState<number>(1)
  const currentProject = projects.find(
    (project) => project.id === currentProjectId
  )

  return (
    <div className="flex h-auto w-full py-16 sm:h-screen sm:max-h-[821px]">
      <div className="flex h-full w-full flex-col justify-center px-0 sm:flex-row sm:px-8">
        {
          <h1 className="flex w-full justify-center py-4 font-semibold tracking-wide text-primary sm:hidden">
            Portfolio
          </h1>
        }
        <div className="flex w-full max-w-full items-center justify-center sm:w-1/3 sm:max-w-[340px]">
          <ProjectList
            projects={projects}
            currentProjectId={currentProjectId}
            setCurrentProjectId={setCurrentProjectId}
          />
        </div>
        <div className="flex h-full min-w-full max-w-[720px] flex-col justify-center sm:w-4/5 sm:min-w-0">
          <ProjectPlayer
            currentProjectId={currentProjectId}
            currentProject={currentProject}
          />
          <ProjectInfoCard currentProject={currentProject} />
        </div>
      </div>
    </div>
  )
}

export default PortfolioPage
