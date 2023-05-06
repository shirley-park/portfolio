import React from 'react'
import Link from 'next/link'
import { FaLinkedinIn, FaGithub, FaRegEnvelope } from 'react-icons/fa'

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center p-12">
      <div className="max-w-[1240px] w-[80%] md:w-[60%] h-full mx-auto flex justify-center items-center ">
        <div>
          <h1 className="py-2 leading-10">
            Hi, I&apos;m Shirley 👋 A web developer with a strong interest in
            building functional and engaging digital experiences.
          </h1>
          <div className="flex items-center justify-center my-4 w-full">
            <a
              href="https://www.linkedin.com/in/shirley-p-935b221bb/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="border-2 rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-100">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/shirley-park"
              target="_blank"
              rel="noreferrer"
            >
              <div className="border-2 mx-10 my-4 rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-100">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="border-2 rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-100">
                <FaRegEnvelope />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
