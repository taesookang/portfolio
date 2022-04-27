import type { NextPage } from 'next'
import Head from 'next/head'
import { Profile, IntroCard, StackItem } from '../components'
import { stacklist } from '../data'

const Home: NextPage = () => {
  return (
    <div className="flex h-auto w-full flex-col justify-between overflow-y-scroll py-16 sm:h-screen sm:max-h-[900px] sm:flex-row">
      {/* Profile pic & name & excerpt */}
      <div className="flex h-full w-full flex-col items-center sm:px-10 ">
        <Profile />
        <IntroCard />
      </div>

      {/* Stacks */}
      <div className="mt-2 h-full max-h-[874px] min-w-[320px] sm:mt-0 sm:pr-10">
        <div className="card relative h-full w-full overflow-y-scroll px-4">
          <h1 className="sticky top-0 z-30 bg-white px-4 pt-6 pb-2">Stacks</h1>
          {stacklist.map((list) => (
            <div key={list.name}>
              <div className="sticky top-[68px] z-20 bg-white">
                <div className="relative mb-2 flex h-8 w-full items-center justify-center">
                  <div className="absolute -bottom-2 h-2 w-full bg-gradient-to-b from-white to-transparent" />
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
