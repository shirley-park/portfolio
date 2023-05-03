import React, { useState } from 'react'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub, FaRegEnvelope } from 'react-icons/fa'

function Contact() {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] mx-auto w-[80%] md:w-[60%] h-full px-2 py-16">
        <h2 className="pb-8">Get in touch</h2>

        <div className="w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="flex flex-col lg:p-4 h-full ">
            <div className="flex justify-start my-4 w-full">
              <div className="border-2 rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-100">
                <FaLinkedinIn />
              </div>

              <div className="border-2 rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-100 ml-6">
                <FaGithub />
              </div>

              <div className="border-2 rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-100 ml-6">
                <FaRegEnvelope />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
