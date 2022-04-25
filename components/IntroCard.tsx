import React from 'react'

export const IntroCard: React.FC = () => {
  return (
    <div className="card relative flex h-fit sm:h-full w-full min-w-[320px] max-w-[760px] flex-col overflow-visible sm:overflow-y-scroll px-4 sm:px-10">
      <h1 className="static sm:sticky top-0 w-full border-b border-gray-200 bg-white pl-2 pt-6 pb-2">
        Introduction
      </h1>
      <p className="px-2 pt-4 text-sm text-gray-500">
        Hello, my name is Taesoo and I am a self-taught coder who is proficient
        in React JS and currently looking for a chance to start my career as a
        front-end developer.
        <br />
        <br />
        Despite majoring in CIS, I learned most of my web development concepts
        on my own since my college only offered a few web development courses
        that only covered basic levels of HTML, CSS, and JS.
        <br />
        <br />
        Also, my interest in UX/UI design led me to learn web design tools such
        as Sketch and Figma during the Coronavirus pandemic, which enhanced my
        development skills greatly.
        <br />
        <br />
        As I practiced and built my own projects, I became aware of the
        importance of efficiency in coding and how fascinating it is to simplify
        complicated problems. Therefore, my primary interests in these days are
        data structure and algorithm and clean coding.
      </p>
      <div className="sticky bottom-0 left-0 z-20 min-h-[48px] w-full bg-gradient-to-t from-white to-transparent" />
    </div>
  )
}

export default IntroCard
