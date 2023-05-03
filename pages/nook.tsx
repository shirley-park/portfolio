import React from 'react'
import Image from 'next/image'

import nookProjectImage from '../public/assets/projects/nookProjectImage2.png'

function nook() {
  return (
    <>
      <div id="projects" className="w-full h-screen pt-20">
        <div className="max-w-[1240px] mx-auto w-[90%] md:w-[80%] h-full px-2 py-16 auto-cols-auto">
          <div className="flex items-center justify-center h-auto w-full shadow-lg shadow-gray-400 rounded-xl group">
            <Image
              src={nookProjectImage}
              alt="homepage of nook project"
              className="rounded-md"
            />
          </div>

          <div>
            <div className="pt-14 flex justify-between items-center">
              <h3>Nook</h3>
              <p className="text-sm">React, Redux, Auth0, Sass</p>
            </div>

            <p className="pt-6 md:text-md">
              Nook is the result of my growing appreciation for architectural
              design and interiors, general musings about the spaces we live in,
              and the ongoing quest to create a calm and considered living
              space.
            </p>
            <p>
              Renovating and refurnishing your home can be stressful process.
              Nook is there to remind you of you of your end goal, as well as
              keep notes on the elements required to meet that goal.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default nook
