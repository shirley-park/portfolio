import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub, FaRegEnvelope } from 'react-icons/fa'

function Navbar() {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)

  function handleNav() {
    setNav(!nav)
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])

  return (
    <div
      className={
        shadow
          ? 'fixed w-full h-20 shadow-md z=[100] bg-white'
          : 'fixed w-full h-20 z=[100] bg-white'
      }
    >
      <div className="flex justify-between items-center w-full h-full px-12 2xl:px-16 opacity-80">
        <Link href="/#home">
          <Image
            src="/../public/assets/homeicon.png"
            alt="/"
            width="40"
            height="50"
            className="opacity-80"
          />
        </Link>
        <div className="text-gray-600">
          <ul className="hidden md:flex">
            <Link href="/#about">
              <li className="ml-10 hover:border-b">About</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 hover:border-b">Projects</li>
            </Link>
            <a href="/shirleyparkcv.pdf" download="shirleyparkcv.pdf">
              <li className="ml-10 hover:border-b">CV</li>
            </a>
            <Link href="/#contact">
              <li className="ml-10 hover:border-b">Contact</li>
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
            <Link href="/#home">
              <Image
                src="/../public/assets/homeicon.png"
                alt="/"
                width="40"
                height="50"
                className="opacity-80"
              />
            </Link>
            <div
              onClick={handleNav}
              className="border-2 rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>

          <div className="py-12 flex flex-col text-gray-600">
            <ul>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4">
                  About
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4">
                  Contact
                </li>
              </Link>
            </ul>

            <div className="pt-40">
              <p className=" text-[#7a9d22]">Let&apos;s Connect</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
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
                  <div className="border-2 rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-100">
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
      </div>
    </div>
  )
}

export default Navbar
