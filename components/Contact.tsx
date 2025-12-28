import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <div id="contact" className="w-full pt-20">
      <div className="max-w-[1240px] mx-auto w-[80%] md:w-[60%] h-full px-2 py-8">
        <h2 className="pb-4 border-b-2">Get in touch</h2>
      </div>

      <div className="max-w-[1240px] mx-auto w-[80%] md:w-[60%] lg:w-[50%] h-full px-2">
        <p className="text-md pb-2">
          Feel free to reach out to me on LinkedIn!
        </p>

        <div className="flex justify-center my-4 w-full pb-6">
          <a
            href="https://www.linkedin.com/in/shirley-p-935b221bb/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="border-2 rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-gray-400 ease-in duration-100">
              <FaLinkedinIn />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
