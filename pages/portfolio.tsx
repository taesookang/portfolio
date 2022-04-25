import type { NextPage } from 'next'
import React, { useState, Suspense } from 'react'
import ReactPlayer from 'react-player'
import Head from 'next/head'
import { Profile, IntroCard, StackItem } from '../components'

const PortfolioPage: NextPage = () => {
  const projects = [
    {
      id: 1,
      title: 'instagrid',
      stacks: ['Next JS', 'Typescript', 'Tailwind CSS'],
      desc: 'Instagram is one of the most frequently used apps for me, and I often thought about cloning it when I used the app. Although there were already a plenty of Instagram cloned app built by other developers, I wanted to build my own version of the app with detailed UI cloning, utilizing my own logic and abilities to solve problems. Here is the outcome.',
      url: 'https://firebasestorage.googleapis.com/v0/b/nextapp-1ea99.appspot.com/o/instagrid.mp4?alt=media&token=451f8d60-183e-4ce0-8df0-88e34791d978',
    },
    {
      id: 2,
      title: 'noogle',
      stacks: ['Next JS', 'Tailwind CSS'],
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, ea illo? Recusandae, a perspiciatis vero qui natus ea, repellendus temporibus delectus tempore veniam cum veritatis voluptatibus voluptates saepe facere? Adipisci reprehenderit facere dolorum nam odio magni placeat, minima voluptatum rem error aperiam, voluptatibus ullam corporis! Possimus asperiores facilis repudiandae illum!',
      url: 'https://firebasestorage.googleapis.com/v0/b/nextapp-1ea99.appspot.com/o/noogle.mp4?alt=media&token=943ab762-952a-4a10-9721-2fa4b3520e9f',
    },
    {
      id: 3,
      title: 'soju haus',
      stacks: ['Next JS', 'Tailwind CSS', 'GraphCMS'],
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, ea illo? Recusandae, a perspiciatis vero qui natus ea, repellendus temporibus delectus tempore veniam cum veritatis voluptatibus voluptates saepe facere? Adipisci reprehenderit facere dolorum nam odio magni placeat, minima voluptatum rem error aperiam, voluptatibus ullam corporis! Possimus asperiores facilis repudiandae illum!',
      url: 'https://firebasestorage.googleapis.com/v0/b/nextapp-1ea99.appspot.com/o/soha.mp4?alt=media&token=78b0a0c7-9545-42c1-89b0-271d3a105d83',
    },
    {
      id: 4,
      title: 'moovle',
      stacks: ['React JS', 'SCSS'],
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, ea illo? Recusandae, a perspiciatis vero qui natus ea, repellendus temporibus delectus tempore veniam cum veritatis voluptatibus voluptates saepe facere? Adipisci reprehenderit facere dolorum nam odio magni placeat, minima voluptatum rem error aperiam, voluptatibus ullam corporis! Possimus asperiores facilis repudiandae illum!',
      url: 'https://firebasestorage.googleapis.com/v0/b/nextapp-1ea99.appspot.com/o/moovle.mp4?alt=media&token=710c4fa9-1e45-4f37-b8f1-e8cd1fba89da',
    },
  ]

  const [currentProjectId, setCurrentProjectId] = useState<number | null>(1)
  const currentProject = projects.find(
    (project) => project.id === currentProjectId
  )

  return (
    <div className="flex h-auto sm:h-screen sm:max-h-[821px] w-full py-16">
      <div className="flex flex-col sm:flex-row h-full w-full px-0 sm:px-8">
        <div className="flex h-full w-full sm:w-1/3 max-w-full sm:max-w-[340px] items-center justify-center">
          <ul className="grid grid-cols-2 sm:flex flex-col w-full sm:w-[160px] border-y border-primary/30 sm:border-none ">
            {projects.map((project) => (
              <li
                key={project.id}
                className={`py-4 sm:py-6 cursor-pointer text-center sm:text-left text-sm sm:text-[24px] font-medium capitalize tracking-wide ${
                  currentProjectId === project.id
                    ? ' text-primary sm:scale-125 origin-bottom-left bg-primary/10 sm:bg-transparent'
                    : 'text-gray-300 hover:text-primary sm:hover:text-secondary/40 '
                }
                  transition-all ease-in-out duration-400
                `}
                onClick={() => setCurrentProjectId(project.id)}
              >
                {project.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex h-full min-w-full sm:min-w-0 sm:w-4/5 max-w-[720px] flex-col justify-center">
          <div className="mb-4 mt-4 sm:mt-0 flex sm:aspect-[1180/720] w-full items-center justify-center overflow-hidden sm:rounded-lg sm:border-4 border-primary bg-zinc-900 ">
            <ReactPlayer
              url={currentProject?.url}
              width="100%"
              height="auto"
              controls
            />
          </div>
          <div className="card h-fit sm:h-1/3 w-full px-6 py-4">
            <div className="flex h-full w-full flex-col gap-4 sm:flex-row">
              <div className="h-full w-full overflow-y-scroll">
                <div className="sticky top-0 ">
                  <h2 className="pb-1 capitalize tracking-wide bg-white">
                    {currentProject?.title}
                  </h2>
                  <ul className="pb-1 flex flex-wrap bg-white ">
                    {currentProject?.stacks.map((stack) => (
                      <li
                        className="mr-2 rounded-full bg-secondary px-2 py-1 text-[8px] text-white bg-blend-darken"
                        key={stack}
                      >
                        {stack}
                      </li>
                    ))}
                  </ul>
                  <div className='w-full h-3 bg-gradient-to-b from-white to-transparent' />
                </div>

                <p className="text-sm text-basic-black/70">
                  {currentProject?.desc}
                </p>
                <div className='sticky w-full bottom-0 h-4 bg-gradient-to-t from-white to-transparent' />

              </div>

              <div className="flex h-full w-[300px] flex-col justify-center gap-4">
                <button className="btn w-full">
                  Live Website
                </button>
                <button className="btn w-full">
                  Source Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioPage
