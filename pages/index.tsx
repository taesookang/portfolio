import type { NextPage } from 'next'
import Head from 'next/head'
import { Profile, IntroCard, StackItem } from '../components'
import { stacklist } from '../data'

const Home: NextPage = () => {
  return (
    <div className="flex h-screen max-h-[900px] w-full justify-between py-10">
      {/* Profile pic & name & excerpt */}
      <div className="mx-10 flex h-full w-full flex-col items-center ">
        <Profile />
        <IntroCard />
      </div>

      {/* Stacks */}
      <div className="mr-10 h-full max-h-[874px] min-w-[320px]">
        <div className="card relative h-full w-full overflow-y-scroll px-4">
          <h1 className="sticky bg-white z-30 top-0 px-4 pt-6 pb-2">Stacks</h1>
          {stacklist.map((list) => (
            <div key={list.name}>
              <div className='sticky top-[68px] bg-white z-20'>
                <div className="relative mb-2 flex h-8 w-full items-center justify-center">
                  <div className='absolute -bottom-2 w-full h-2 bg-gradient-to-b from-white to-transparent' />
                  <div className="h-[1px] w-full bg-gray-200 " />
                  <div className="absolute top-0 flex h-8 w-full items-center justify-center">
                    <span className="bg-white px-4 text-xs font-medium capitalize tracking-wide text-gray-400">
                      {list.name}
                    </span>
                  </div>
                </div>
              </div>
              <ul className="px-4">
                {list.stacks.map((stack) => (
                  <StackItem stack={stack} key={stack.title} />
                ))}
              </ul>
            </div>
          ))}
      <div className="sticky bottom-0 left-0 z-20 min-h-[32px] w-full bg-gradient-to-t from-white to-transparent" />

        </div>
      </div>
    </div>
  )
}

export default Home
