import React from 'react'

function About() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto w-[50%] h-full flex justify-center items-center">
        <div className="">
          <h2 className="py-2 text-gray-500 text-opacity-80 text-xl font-light mb-4">
            About me
          </h2>
          <p className="py-2 text-gray-500 text-opacity-80 text-lg">
            I am a full-stack developer and recent graduate of Dev Academy with
            a passion for learning and building meaningful products with a
            people-first approach. I enjoy the ongoing challenge of solving
            problems and creating seamless user experiences.
          </p>
          <p className="py-2 text-gray-500 text-opacity-80 text-lg">
            I am an adaptable team member, known for my empathy and commitment
            to making a positive impact on those around me.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
