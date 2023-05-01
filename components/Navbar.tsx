import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub, FaRegEnvelope } from 'react-icons/fa'

function Navbar() {
  const [nav, setNav] = useState(false)

  function handleNav() {
    setNav(!nav)
  }

  return (
    <div className="fixed w-full h-20 z=[100]">
      <div className="flex justify-between items-center w-full h-full px-12 2xl:px-16 opacity-80">
        <Image
          src="/../public/assets/homeicon.png"
          alt="/"
          width="40"
          height="50"
          className="opacity-80"
        />
        <div className="text-gray-500 text-opacity-80">
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-md hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-md hover:border-b">Projects</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-md hover:border-b">Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile left-side nav */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/50' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 w-[75%] p-10 ease-in duration-500'
          }
        >
          <div className="flex w-full items-center justify-between opacity-80">
            <Image
              src="/../public/assets/homeicon.png"
              alt="/"
              width="40"
              height="50"
              className="opacity-80"
            />
            <div
              onClick={handleNav}
              className="border-2 rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>

          <div className="py-12 flex flex-col text-gray-500 text-opacity-80">
            <ul>
              <Link href="/">
                <li className="py-4 text-md">About</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-md">Projects</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-md">Contact</li>
              </Link>
            </ul>

            <div className="pt-40">
              <p className=" text-[#7a9d22]">Let&apos;s Connect</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="border-2 rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="border-2 rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="border-2 rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaRegEnvelope />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
