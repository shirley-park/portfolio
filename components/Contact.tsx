import React from 'react'
import Link from 'next/link'
import { FaLinkedinIn, FaGithub, FaRegEnvelope } from 'react-icons/fa'

function Contact() {
  return (
    <div id="contact" className="w-full pt-20">
      <div className="max-w-[1240px] mx-auto w-[80%] md:w-[60%] h-full px-2 py-8">
        <h2 className="pb-4 border-b-2">Get in touch</h2>
      </div>

      <div className="max-w-[1240px] mx-auto w-[80%] md:w-[60%] lg:w-[50%] h-full px-2">
        <p className="text-md pb-2">
          Feel free to reach out to me on LinkedIn, or drop me a line using the
          form below. I will get back to you as soon as I can 😊{' '}
        </p>

        <div className="flex justify-center my-4 w-full pb-6">
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
            <div className="border-2 rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-100 ml-12">
              <FaGithub />
            </div>
          </a>
          <Link href="/#contact">
            <div className="border-2 rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-100 ml-12">
              <FaRegEnvelope />
            </div>
          </Link>
        </div>
        <div className="w-full h-full shadow-2xl shadow-gray-400 rounded-xl p-4">
          <div className="flex flex-col lg:p-4 h-full ">
            <section className="p-4">
              <form
                action="https://getform.io/f/c9f7453f-a2c3-4f4b-945a-485e84b8f114"
                method="POST"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm hidden">Name</label>
                    <input
                      className="border border-gray-300 rounded-lg p-3 flex font-light text-sm"
                      type="text"
                      name="name"
                      placeholder="Full name"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm hidden">Email</label>
                    <input
                      className="border border-gray-300 rounded-lg p-3 flex font-light text-sm"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm hidden">Subject</label>
                    <input
                      className="border border-gray-300 rounded-lg p-3 flex font-light text-sm"
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm hidden">Message</label>
                  <textarea
                    className="w-full border border-gray-300 rounded-lg p-3 font-light text-sm"
                    rows={10}
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <div className="flex justify-center">
                  <button
                    className="w-[40%] p-4 mt-4 font-light text-sm bg-slate-400 text-white hover:scale-105 ease-in duration-100 shadow-md shadow-gray-400"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
