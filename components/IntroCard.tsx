import React from 'react'

export const IntroCard: React.FC = () => {
  return (
    <div className="card relative flex h-fit w-full min-w-[320px] max-w-[760px] flex-col overflow-visible px-4 sm:h-full sm:overflow-y-scroll sm:px-10">
      <h1 className="static top-0 w-full border-b border-gray-200 bg-white pl-2 pt-6 pb-2 sm:sticky">
        Introduction
      </h1>
      <p className="px-2 pt-4 text-sm text-basic-black/60">
        Hello, my name is Taesoo and I am a self-taught coder who is proficient
        in <b>React JS</b> and currently looking for a chance to start my career
        as a <b>front-end developer</b>.
        <br />
        <br />
        Even though I studied CIS when I was in college, I learned most of my
        web development concepts by myself, since my college's web development
        courses mainly covered HTML, CSS, and JS basics, rather than diving deep
        into modern frameworks.
        <br />
        <br />
        Also, my interest in UX/UI design led me to learn web design tools such
        as Sketch and Figma, which enhanced my development skills greatly.
        <br />
        <br />
        As I practiced and built my own projects, I became aware of the
        importance of efficiency in coding and how fascinating it is to simplify
        complicated problems. Therefore, my primary interests in these days are
        data structure/algorithm and clean coding.
      </p>
      <div className="sticky bottom-0 left-0 z-20 min-h-[48px] w-full bg-gradient-to-t from-white to-transparent" />
    </div>
  )
}

export default IntroCard
