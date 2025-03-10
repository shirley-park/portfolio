import React from 'react'
import Image from 'next/image'

import htmlicon from '../public/assets/imgassets/html.png'
import cssicon from '../public/assets/imgassets/css.png'
import jsicon from '../public/assets/imgassets/js.png'
import tsicon from '../public/assets/imgassets/typescript.png'
import reacticon from '../public/assets/imgassets/react.png'
import reduxicon from '../public/assets/imgassets/redux.png'
import nodeicon from '../public/assets/imgassets/nodejs.png'
import expressicon from '../public/assets/imgassets/expressjs.png'
import sqlite3icon from '../public/assets/imgassets/sqlite3.png'
import sassicon from '../public/assets/imgassets/sass2.png'

function About() {
  return (
    <div id="about" className="w-full flex items-center pt-10">
      <div className="max-w-[1240px] m-auto w-[80%] md:w-[60%] h-full flex justify-center items-center ">
        <div>
          <h2 className="mt-20 py-2 pb-4 mb-4 border-b-2">About me</h2>
          <p>
            I am a <span className="underline">full-stack developer</span> and
            recent graduate of Dev Academy Aotearoa with a{' '}
            <span className="underline">passion for learning</span> and building
            meaningful products with a{' '}
            <span className="underline">people-first approach</span>. I enjoy
            the ongoing challenge of solving problems and creating seamless user
            experiences.
          </p>
          <p className="py-2">
            I am an adaptable team member, committed to making a positive impact on those around me.
          </p>
          <p className="py-2">
            I am currently learning <span className="underline">Go</span>{' '}
            to supplement my JavaScript and React skillset and I&apos;m looking
            forward to learning new languages and skills in an agile development
            team.
          </p>
          <div>
            <h2 className="py-2 mt-12 mb-4 border-b-2">Skills</h2>

            <div className="grid grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="flex flex-col justify-center items-center">
                <Image src={htmlicon} alt="/" width="50" height="50" />
                <p className="text-xs pt-3">HTML</p>
              </div>

              <div className="flex flex-col justify-center items-center">
                <Image src={cssicon} alt="/" width="50" height="50" />
                <p className="text-xs pt-3">CSS</p>
              </div>

              <div className="flex flex-col justify-center items-center">
                <Image src={jsicon} alt="/" width="50" height="50" />
                <p className="text-xs pt-3">Javascript</p>
              </div>

              <div className="flex flex-col justify-center items-center">
                <Image src={tsicon} alt="/" width="50" height="50" />
                <p className="text-xs pt-3">Typescript</p>
              </div>

              <div className="flex flex-col justify-center items-center">
                <Image src={reacticon} alt="/" width="50" height="50" />
                <p className="text-xs pt-3">React.js</p>
              </div>

              <div className="flex flex-col justify-center items-center">
                <Image src={reduxicon} alt="/" width="50" height="50" />
                <p className="text-xs pt-3">Redux</p>
              </div>

              <div className="flex flex-col justify-center items-center">
                <Image src={nodeicon} alt="/" width="50" height="50" />
                <p className="text-xs pt-3">Node.js</p>
              </div>

              <div className="flex flex-col justify-between items-center">
                <Image
                  src={expressicon}
                  alt="express js logo"
                  width="90"
                  height="100"
                  className="pt-4"
                />
                <p className="text-xs pt-4">Express</p>
              </div>

              <div className="flex flex-col justify-center items-center">
                <Image src={sqlite3icon} alt="/" width="50" height="50" />
                <p className="text-xs pt-3">SQLite3</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image src={sassicon} alt="/" width="50" height="50" />
                <p className="text-xs pt-3">Sass</p>
              </div>
            </div>
            <div>
              <h2 className="py-2 mt-12 mb-4 border-b-2">In my spare time</h2>
              <p className="py-2">You&apos;ll find me:</p>
              <ul>
                <li className="pl-2 leading-10">&#9749; drinking coffee</li>
                <li className="pl-2 leading-10">&#127934; playing tennis</li>
                <li className="pl-2 leading-10">
                  &#127880; making balloon animals
                </li>
                <li className="pl-2 leading-10">&#128247; taking photos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
