import React from 'react'
import Image from 'next/image'
import nookProjectImage from '../public/assets/projects/nookProjectImage2.png'
import nookProjectImage4 from '../public/assets/projects/nookProjectImage4.png'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import tsicon from '../public/assets/imgassets/typescript.png'
import reacticon from '../public/assets/imgassets/react.png'
import reduxicon from '../public/assets/imgassets/redux.png'
import nodeicon from '../public/assets/imgassets/nodejs.png'
import sqlite3dbicon from '../public/assets/imgassets/sqlite3db.png'
import sassicon from '../public/assets/imgassets/sass2.png'

function nook() {
  return (
    <>
      <div id="projects" className="w-full h-screen pt-20">
        <div className="max-w-[1240px] mx-auto w-[85%] md:w-[80%] h-full px-2 py-16 ">
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="col-span-1 w-full">
              <Image
                src={nookProjectImage}
                alt="homepage of nook project"
                className="mb-4 rounded-md shadow-md shadow-gray-400"
              />
            </div>

            <div className="col-span-1 h-full">
              {' '}
              <Image
                src={nookProjectImage4}
                alt="homepage of nook project"
                className="rounded-md shadow-md shadow-gray-400"
              />
            </div>
          </div>
          <div className="pt-6">
            <div className="flex justify-between items-start">
              <h2>Nook</h2>
              <div className="md:flex ">
                {/* <div className="w-44 border border-gray-300 rounded-full shadow-gray-400 p-3 hover:opacity-70 ease-in duration-100 mb-2 md:mr-4">
                  <a
                    href="https://this-is-nook.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex justify-center items-center">
                      <FaExternalLinkAlt />
                      <p className="text-sm pl-2">View demo</p>
                    </div>
                  </a>
                </div> */}
                <div className="w-44 border border-gray-300 rounded-full shadow-gray-400 p-3 hover:opacity-70 ease-in duration-100 mb-2">
                  <a
                    href="https://github.com/shirley-park/nook"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex justify-center items-center">
                      <FaGithub />
                      <p className="text-sm pl-2">View on Github</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <p className="pt-6 md:text-md">
              Nook is the result of my growing appreciation for architectural
              design and interiors, general musings about the spaces we live in,
              and the ongoing quest to create a calm and considered living
              space.
            </p>
            <br />
            <p>
              Renovating and refurnishing your home can be stressful process.
              Nook is here to remind you of your end goal, as well as keep notes
              on the elements required to meet that goal. It is a tool which
              allows signed in users to add their home renovation projects and
              inspiration/moodboard, and store details of fittings that will be
              required to realize their goal.
            </p>
            <br />
            <p>
              This was my final project for the Dev Academy bootcamp, where I
              was responsible for the whole project timeline from planning,
              design and development.
            </p>
            <br />
            <div className="flex justify-center">
              <iframe
                src="https://player.vimeo.com/video/837232600?h=8272103f6e"
                width="640"
                height="360"
                allowFullScreen
                allow="autoplay; encrypted-media"
              ></iframe>
            </div>
            <br />
            <h3 className="mb-4">Tech used:</h3>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-8 border-b-2 pb-6">
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={tsicon}
                  alt="Typescript logo"
                  width="50"
                  height="50"
                />
                <p className="text-sm pt-3">Typescript</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={reacticon}
                  alt="React logo"
                  width="50"
                  height="50"
                />
                <p className="text-sm pt-3">React</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={nodeicon}
                  alt="Node.js logo"
                  width="50"
                  height="50"
                />
                <p className="text-sm pt-3">Node.js</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={reduxicon}
                  alt="Redux logo"
                  width="50"
                  height="50"
                />
                <p className="text-sm pt-3">Redux</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={sqlite3dbicon}
                  alt="SQLite 3 logo"
                  width="50"
                  height="50"
                />
                <p className="text-sm pt-3">SQLite3</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image src={sassicon} alt="Sass logo" width="50" height="50" />
                <p className="text-xs pt-3">Sass</p>
              </div>
            </div>
            <br />
            <h3 className="mb-4">Next steps</h3>
            <ul className="list-disc border-b-2 pb-24">
              {' '}
              <li className="text-md ml-8 py-2 cursor-default">
                The next step for this project is to add the ability to filter
                elements/fittings by tags{' '}
              </li>
              <li className="ml-8 py-2 cursor-default">Add auth using Auth0</li>
              <li className="ml-8 py-2 cursor-default">
                Add a project timeline feature which allows users to set dates
                for project milestones
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default nook
