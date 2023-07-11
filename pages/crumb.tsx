import React from 'react'
import Image from 'next/image'
import crumbMain from '../public/assets/projects/crumbMain1.png'
import crumbItems from '../public/assets/projects/crumbItems.png'
import crumbMob1 from '../public/assets/projects/crumbMob1.png'
import crumbMob2 from '../public/assets/projects/crumbMob2.png'
import { FaGithub } from 'react-icons/fa'
import reacticon from '../public/assets/imgassets/react.png'
import reduxicon from '../public/assets/imgassets/redux.png'
import nodeicon from '../public/assets/imgassets/nodejs.png'
import materialUIIcon from '../public/assets/imgassets/materialUI.png'
import reactQueryIcon from '../public/assets/imgassets/reactQuery.png'
import strapiIcon from '../public/assets/imgassets/strapi.png'

function nook() {
  return (
    <>
      <div id="projects" className="w-full h-screen pt-20">
        <div className="max-w-[1240px] mx-auto w-[85%] md:w-[80%] h-full px-2 py-16 ">
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="col-span-1 w-full">
              <Image
                src={crumbMain}
                alt="homepage of crumb project"
                className="mb-4 rounded-md shadow-md shadow-gray-400"
              />
            </div>

            <div className="col-span-1 h-full">
              {' '}
              <Image
                src={crumbItems}
                alt="homepage of crumb project"
                className="rounded-md shadow-md shadow-gray-400"
              />
            </div>
            <div className="col-span-1 h-full">
              {' '}
              <Image
                src={crumbMob1}
                alt="homepage of crumb project"
                className="rounded-md shadow-md shadow-gray-400"
              />
            </div>
            <div className="col-span-1 h-full">
              {' '}
              <Image
                src={crumbMob2}
                alt="homepage of crumb project"
                className="rounded-md shadow-md shadow-gray-400"
              />
            </div>
          </div>
          <div className="pt-6">
            <div className="flex justify-between items-center">
              <h2>Crumb</h2>
              <div className="w-44 border border-gray-300 rounded-full shadow-gray-400 p-3 hover:opacity-70 ease-in duration-100">
                <a
                  href="https://github.com/shirley-park/crumb"
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
              Crumb is a fully responsive ecommerce website for an artisan
              bakery to showcase and sell their delicious creations.
            </p>
            <br />
            <p>
              This is built with React and uses Strapi as its headless CMS. This
              project is a work in progress and I am using it as a way to learn
              about building back-end and front-end features in ecommerce
              applications.
            </p>

            <br />
            <p className="border-b-2 pb-4"></p>
            <br />
            <h3 className="mb-4">Tech used:</h3>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-8 border-b-2 pb-6">
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
                  src={reactQueryIcon}
                  alt="React query logo"
                  width="50"
                  height="50"
                />
                <p className="text-sm pt-3">React Query</p>
              </div>

              <div className="flex flex-col justify-center items-center">
                <Image
                  src={reduxicon}
                  alt="Redux toolkit logo"
                  width="50"
                  height="50"
                />
                <p className="text-sm pt-3">Redux toolkit</p>
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
                  src={strapiIcon}
                  alt="Strapi logo"
                  width="50"
                  height="50"
                />
                <p className="text-sm pt-3">Strapi</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={materialUIIcon}
                  alt="Material UI logo"
                  width="50"
                  height="50"
                />
                <p className="text-sm pt-3">Material UI</p>
              </div>
            </div>
            <br />
            <h3 className="mb-4">Next steps</h3>
            <ul className="list-disc border-b-2 pb-24">
              {' '}
              <li className="ml-8 py-2 cursor-default">
                integrate Stripe for payment processing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default nook
