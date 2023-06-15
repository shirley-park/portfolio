import React from 'react'
import Image from 'next/image'
import oasis1 from '../public/assets/projects/oasis1.png'
import oasis2 from '../public/assets/projects/oasis2.png'
import { FaGithub } from 'react-icons/fa'
import nextjs from '../public/assets/imgassets/nextjs.png'
import zustand from '../public/assets/imgassets/zustand.png'
import tailwindcss from '../public/assets/imgassets/tailwindcss.png'
import tsicon from '../public/assets/imgassets/typescript.png'

function nook() {
  return (
    <>
      <div id="projects" className="w-full h-screen pt-20">
        <div className="max-w-[1240px] mx-auto w-[85%] md:w-[80%] h-full px-2 py-16 ">
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="col-span-1 w-full">
              <Image
                src={oasis1}
                alt="homepage of crumb project"
                className="mb-4 rounded-md shadow-md shadow-gray-400"
              />
            </div>

            <div className="col-span-1 h-full">
              {' '}
              <Image
                src={oasis2}
                alt="homepage of crumb project"
                className="rounded-md shadow-md shadow-gray-400"
              />
            </div>
          </div>
          <div className="pt-6">
            <div className="flex justify-between items-center">
              <h2>Oasis</h2>
              <div className="w-44 border border-gray-300 rounded-full shadow-gray-400 p-3 hover:opacity-70 ease-in duration-100">
                <a
                  href="https://github.com/shirley-park/oasis"
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

            <p className="pt-6 md:text-md">
              Oasis is a productivity app A productivity app where each
              successful focus session plants a tree in your oasis.
            </p>
            <br />
            <p>
              Set the your focus duration to grow your tree. Leave the session
              early, and your tree is killed.
            </p>
            <br />
            <p>
              This application was built using Next.js, styled using Tailwind
              CSS and Zustand for state management.
            </p>

            <br />
            <p className="border-b-2 pb-4"></p>
            <br />
            <h3 className="mb-4">Tech used:</h3>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-8 border-b-2 pb-6">
              <div className="flex flex-col justify-center items-center">
                <Image src={nextjs} alt="Next.js logo" width="60" height="60" />
                <p className="text-sm pt-3">Next.js</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={tsicon}
                  alt="Typescript logo"
                  width="40"
                  height="40"
                />
                <p className="text-sm pt-3">Typescript</p>
              </div>
              <div className="flex flex-col justify-start items-center">
                <Image
                  src={tailwindcss}
                  alt="tailwind logo"
                  width="40"
                  height="40"
                />
                <p className="text-sm pt-3">Tailwind CSS</p>
              </div>

              <div className="flex flex-col justify-center items-center">
                <Image
                  src={zustand}
                  alt="Zustand logo"
                  width="70"
                  height="70"
                />
                <p className="text-sm pt-3">Zustand</p>
              </div>
            </div>
            <br />
            <h3 className="mb-4">Next steps</h3>
            <ul className="list-disc border-b-2 pb-24">
              {' '}
              <li className="text-md ml-8 py-2 cursor-default">deployment</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default nook
