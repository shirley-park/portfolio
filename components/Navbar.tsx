import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
          {/* <div></div> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
