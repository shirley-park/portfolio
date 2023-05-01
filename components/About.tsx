import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto w-[50%] h-full flex justify-center items-center">
        <div>
          <h2 className="py-2 text-gray-500 text-opacity-80 text-xl font-normal mb-4">
            About me
          </h2>
          <p className="py-2 text-gray-500 text-opacity-80 text-lg leading-8">
            I am a <span className="underline">full-stack developer</span> and
            recent graduate of Dev Academy Aotearoa with a{' '}
            <span className="underline">passion for learning</span> and building
            meaningful products with a{' '}
            <span className="underline">people-first approach</span>. I enjoy
            the ongoing challenge of solving problems and creating seamless user
            experiences.
          </p>
          <p className="py-2 text-gray-500 text-opacity-80 text-lg leading-8">
            I am an adaptable team member, known for my empathy and commitment
            to making a positive impact on those around me.
          </p>
          <p className="py-2 text-gray-500 text-opacity-80 text-lg leading-8">
            I am currently learning <span className="underline">Next.js</span>{' '}
            and <span className="underline">Typescript</span> to supplement my
            JavaScript and React skillset and I&apos;m looking forward to
            learning new languages and skills in an agile development team.
          </p>
          <div>
            <h2 className="py-2 text-gray-500 text-opacity-80 text-xl font-normal mt-12 mb-4">
              Skills
            </h2>

            <div className="flex justify-between items-center">
              <Image
                src="/../public/assets/html.png"
                alt="/"
                width="50"
                height="50"
                className="opacity-80"
              />
              <Image
                src="/../public/assets/css.png"
                alt="/"
                width="50"
                height="50"
                className="opacity-80"
              />
              <Image
                src="/../public/assets/js.png"
                alt="/"
                width="50"
                height="50"
                className="opacity-80"
              />
              <Image
                src="/../public/assets/nodejs.png"
                alt="/"
                width="50"
                height="50"
                className="opacity-80"
              />
              <Image
                src="/../public/assets/react.png"
                alt="/"
                width="50"
                height="50"
                className="opacity-80"
              />
              <Image
                src="/../public/assets/redux.png"
                alt="/"
                width="50"
                height="50"
                className="opacity-80"
              />
            </div>
            <div>
              <h2 className="py-2 text-gray-500 text-opacity-80 text-xl font-normal mt-12 mb-4">
                In my spare time
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
