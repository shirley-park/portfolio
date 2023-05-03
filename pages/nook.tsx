import React from 'react'
import Image from 'next/image'

import nookProjectImage from '../public/assets/projects/nookProjectImage2.png'
import { FaGithub } from 'react-icons/fa'

function nook() {
  return (
    <>
      <div id="projects" className="w-full h-screen pt-20">
        <div className="max-w-[1240px] mx-auto w-[90%] md:w-[80%] h-full px-2 py-16 ">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="col-span-1 w-full">
              <Image
                src={nookProjectImage}
                alt="homepage of nook project"
                className="rounded-md shadow-md shadow-gray-400"
              />

              <div className="w-44 border border-gray-300 mt-8 rounded-full shadow-gray-400 p-3 hover:opacity-70 ease-in duration-100">
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

            <div className="col-span-1">
              <div className="flex justify-between items-center">
                <h2>Nook</h2>
                <p className="text-sm">React, Redux, Auth0, Sass</p>
              </div>

              <p className="pt-6 md:text-md">
                Nook is the result of my growing appreciation for architectural
                design and interiors, general musings about the spaces we live
                in, and the ongoing quest to create a calm and considered living
                space.
              </p>
              <br />
              <p>
                Renovating and refurnishing your home can be stressful process.
                Nook is there to remind you of you of your end goal, as well as
                keep notes on the elements required to meet that goal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default nook
