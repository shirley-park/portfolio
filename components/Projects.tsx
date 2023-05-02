import React from 'react'
import Image from 'next/image'
import nook from '../public/assets/projects/nook.png'

function Projects() {
  return (
    <section className="w-full h-screen">
      <div className="max-w-[1240px] mx-auto w-[80%] md:w-[60%] h-full px-2 py-16">
        <h2 className="py-2 mb-8 border-b-2">Projects</h2>

        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:scale-105 ease-in duration-200 cursor-pointer">
          <Image
            src={nook}
            alt="screenshot of nook project"
            className="rounded-md"
          />
        </div>

        <div>
          <h3 className="pt-8">Nook</h3>
        </div>
      </div>
    </section>
  )
}

export default Projects
