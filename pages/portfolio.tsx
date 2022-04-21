import type { NextPage } from 'next'
import React, { useState, Suspense } from 'react'
import ReactPlayer from "react-player"
import Head from 'next/head'
import { Profile, IntroCard, StackItem } from '../components'

const PortfolioPage: NextPage = () => {
  const projects = [
    {
      id: 1,
      title: 'instagrid',
      stacks: ['Next JS', 'Typescript', 'Tailwind CSS'],
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, ea illo? Recusandae, a perspiciatis vero qui natus ea, repellendus temporibus delectus tempore veniam cum veritatis voluptatibus voluptates saepe facere? Adipisci reprehenderit facere dolorum nam odio magni placeat, minima voluptatum rem error aperiam, voluptatibus ullam corporis! Possimus asperiores facilis repudiandae illum!',
      url: "https://firebasestorage.googleapis.com/v0/b/nextapp-1ea99.appspot.com/o/instagrid.mp4?alt=media&token=451f8d60-183e-4ce0-8df0-88e34791d978"
    },
    {
      id: 2,
      title: 'noogle',
      stacks: ['Next JS', 'Tailwind CSS'],
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, ea illo? Recusandae, a perspiciatis vero qui natus ea, repellendus temporibus delectus tempore veniam cum veritatis voluptatibus voluptates saepe facere? Adipisci reprehenderit facere dolorum nam odio magni placeat, minima voluptatum rem error aperiam, voluptatibus ullam corporis! Possimus asperiores facilis repudiandae illum!',
      url: "https://firebasestorage.googleapis.com/v0/b/nextapp-1ea99.appspot.com/o/noogle.mp4?alt=media&token=943ab762-952a-4a10-9721-2fa4b3520e9f"
    },
    {
      id: 3,
      title: 'soju haus',
      stacks: ['Next JS', 'Tailwind CSS', 'GraphCMS'],
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, ea illo? Recusandae, a perspiciatis vero qui natus ea, repellendus temporibus delectus tempore veniam cum veritatis voluptatibus voluptates saepe facere? Adipisci reprehenderit facere dolorum nam odio magni placeat, minima voluptatum rem error aperiam, voluptatibus ullam corporis! Possimus asperiores facilis repudiandae illum!',
      url: "https://firebasestorage.googleapis.com/v0/b/nextapp-1ea99.appspot.com/o/soha.mp4?alt=media&token=78b0a0c7-9545-42c1-89b0-271d3a105d83"
    },
    {
      id: 4,
      title: 'moovle',
      stacks: ['React JS', 'SCSS'],
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, ea illo? Recusandae, a perspiciatis vero qui natus ea, repellendus temporibus delectus tempore veniam cum veritatis voluptatibus voluptates saepe facere? Adipisci reprehenderit facere dolorum nam odio magni placeat, minima voluptatum rem error aperiam, voluptatibus ullam corporis! Possimus asperiores facilis repudiandae illum!',
      url: "https://firebasestorage.googleapis.com/v0/b/nextapp-1ea99.appspot.com/o/moovle.mp4?alt=media&token=710c4fa9-1e45-4f37-b8f1-e8cd1fba89da"
    },
  ]

  const [currentProjectId, setCurrentProjectId] = useState<number | null>(1)
  const currentProject = projects.find((project) => project.id === currentProjectId)

  return (
    <div className="flex h-screen max-h-[821px] w-full py-8">
      <div className="flex h-full w-full px-8">
        <div className="flex h-full w-1/3 max-w-[340px] items-center justify-center">
          <ul className="flex flex-col">
            {projects.map((project) => (
              <li
              key={project.id}
                className={`my-4 cursor-pointer text-[24px] font-medium capitalize tracking-wide ${
                  currentProjectId === project.id
                    ? ' text-primary'
                    : 'text-gray-300 hover:text-primary/40'
                }`}
                onClick={() => setCurrentProjectId(project.id)}
              >
                {project.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex h-full w-full max-w-[800px] flex-col justify-center">
          {/* <video
          autoPlay
          muted
          className="mb-4 aspect-[1144/720] w-full min-w-full rounded-lg border-4 border-primary bg-zinc-800 "
        >
            <source src={currentProject?.url} type="video/mp4"/>
          </video> */}
          <div className="mb-4 flex items-center justify-center aspect-[1260/720] w-full rounded-lg border-4 border-primary bg-zinc-800 overflow-hidden ">
          <ReactPlayer url={currentProject?.url} width="100%" height="auto" controls/>
          </div>
          <div className="card h-1/3 w-full px-6 py-4">
              <div className='flex w-full h-full gap-4 flex-col sm:flex-row'>
                  <div className='w-full h-full'>
                      <h2 className='capitalize tracking-wide mb-2'>{currentProject?.title}</h2>
                      <ul className='flex flex-wrap mb-4'>
                      {currentProject?.stacks.map((stack) => (
                          <li className='text-[8px] px-2 py-1 text-white bg-[#2b7faf] bg-blend-darken rounded-full mr-2' key={stack}>{stack}</li>
                      ))}
                      </ul>
                      <p className='text-sm text-basic-black/70'>{currentProject?.desc}</p>
                  </div>

                  <div className='w-[300px] h-full flex gap-4 flex-col justify-center'>
                      <button className='w-full flex justify-center items-center bg-primary py-2 text-white rounded-md text-sm'>Live Website</button>
                      <button className='w-full flex justify-center items-center bg-primary py-2 text-white rounded-md text-sm'>Source Code</button>
                      
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioPage
