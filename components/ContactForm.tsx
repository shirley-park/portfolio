import React, { ChangeEvent, FormEvent, useState } from 'react'
import { CircularProgress } from '@mui/material'

function ContactForm() {
  const [query, setQuery] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [sending, isSending] = useState(false)
  const [messageSent, setMessageSent] = useState(false)

  // Update inputs value
  const handleParam = () => (e: any) => {
    const name = e.target.name
    const value = e.target.value
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  // Form Submit function
  const formSubmit = (e: FormEvent) => {
    e.preventDefault()
    isSending(true)
    const formData = new FormData()
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value)
    })
    fetch('https://getform.io/f/c9f7453f-a2c3-4f4b-945a-485e84b8f114', {
      method: 'POST',
      body: formData,
    })
      .then(() => setQuery({ name: '', email: '', subject: '', message: '' }))
      .then(() => setMessageSent(true))
      .then(() => isSending(false))
  }

  return (
    <div className="w-full h-full shadow-2xl shadow-gray-400 rounded-xl p-4">
      <div className="flex flex-col lg:p-4 h-full ">
        <section className="p-4">
          <form onSubmit={formSubmit} method="POST">
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
              <div className="flex flex-col">
                <label htmlFor="name" className="uppercase text-sm hidden">
                  Name
                </label>
                <input
                  className="border border-gray-300 rounded-lg p-3 flex font-light text-sm"
                  type="text"
                  name="name"
                  placeholder="Full name"
                  required
                  value={query.name}
                  onChange={handleParam()}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="uppercase text-sm hidden">
                  Email
                </label>
                <input
                  className="border border-gray-300 rounded-lg p-3 flex font-light text-sm"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={query.email}
                  onChange={handleParam()}
                />
              </div>
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="subject" className="uppercase text-sm hidden">
                Subject
              </label>
              <input
                className="border border-gray-300 rounded-lg p-3 flex font-light text-sm"
                type="text"
                name="subject"
                placeholder="Subject"
                required
                value={query.subject}
                onChange={handleParam()}
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="message" className="uppercase text-sm hidden">
                Message
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-3 font-light text-sm"
                rows={10}
                name="message"
                placeholder="Message"
                required
                value={query.message}
                onChange={handleParam()}
              ></textarea>
            </div>
            <p className="text-sm pb-2 text-center pt-1">
              {messageSent ? '✅ Message sent! ' : null}
            </p>
            <div className="flex justify-center">
              <button
                role="submit"
                className="w-[40%] p-4 mt-4 font-light text-sm bg-slate-400 text-white hover:scale-105 ease-in duration-100 shadow-md shadow-gray-400"
                type="submit"
              >
                {sending ? <CircularProgress size="1rem" /> : 'Send'}
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

export default ContactForm
