import React, { useRef, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { IProject } from '../data/types'

interface Props {
  currentProject: IProject | undefined
  currentProjectId: number
}

export const ProjectPlayer: React.FC<Props> = ({
  currentProject,
  currentProjectId,
}) => {
  useEffect(() => {
    if (playerRef) {
      playerRef.current?.showPreview()
    }
  }, [currentProjectId])

  const playerRef = useRef<ReactPlayer | null>(null)
  return (
    <div className="mb-4 mt-4 flex aspect-[1180/720] w-full items-center justify-center overflow-hidden border-primary bg-zinc-900 sm:mt-0 sm:rounded-lg sm:border-4 ">
      <ReactPlayer
        ref={playerRef}
        url={currentProject?.url}
        width="100%"
        height="100%"
        controls
        playing
        light={currentProject?.thumbnail}
      />
    </div>
  )
}

export default ProjectPlayer
