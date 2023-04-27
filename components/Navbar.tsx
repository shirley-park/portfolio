import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub, FaRegEnvelope } from 'react-icons/fa'

function Navbar() {
  return (
    <div className="fixed w-full h-20 z=[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/homeicon.png"
          alt="/"
          width="40"
          height="50"
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm hover:bg-[#e0e0e0]">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm hover:bg-[#e0e0e0]">Projects</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm hover:bg-[#e0e0e0]">Contact</li>
            </Link>
          </ul>
          <div className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className="fixed left-0 top-0 w-full h-screen bg-black/50">
        <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500">
          <div className="flex w-full items-center justify-between">
            <Image
              src="/../public/assets/homeicon.png"
              alt="/"
              width="40"
              height="50"
            />
            <div className="border-2 rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer">
              <AiOutlineClose />
            </div>
          </div>

          <div className="py-12 flex flex-col">
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
              <p className="tracking-widest text-[#7a9d22]">
                Let&apos;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="border-2 rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer">
                  <FaLinkedinIn />
                </div>
                <div className="border-2 rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer">
                  <FaGithub />
                </div>
                <div className="border-2 rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer">
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
