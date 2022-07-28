import Image from 'next/image'
import React, { useState } from 'react'
import myPhoto from '../public/assets/my.png'
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import emailjs from 'emailjs-com'

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_jrq923n',
        'template_d9x2p6e',
        e.target,
        'q5GMVPBS6ETJt3L2r',
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )
    e.target.reset()
  }

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[80%] m-auto px-2 py-20 w-full ">
        <p className="tracking-widest pb-6 uppercase text-xl text-[#5651e5]">
          Contact
        </p>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  src={myPhoto}
                  alt="/"
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                />
              </div>
              <div>
                <h2 className="text-3xl py-2 tracking-wider">Prakhar Goyal</h2>
                <p>Front-end Web Developer</p>
                <p className="py-4">
                  I am available for freelance or part-time positions. Contact
                  me and lets talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between mx-auto max-w-[330px] py-4">
                  <a href="https://www.linkedin.com/in/prakhar-goyal-41b1451bb/" target="_blank" rel="noreferrer">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 flex text-[#5651e5] cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaLinkedinIn size={20} />
                    </div>
                  </a>
                  <a href="https://github.com/Prakhar-Goyal-3014" target="_blank" rel="noreferrer">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 flex text-[#5651e5] cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaGithub size={20} />
                    </div>
                  </a>
                  <a href="https://twitter.com/Prakharg3014" target="_blank" rel="noreferrer">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 flex text-[#5651e5] cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaTwitter size={20} />
                    </div>
                  </a>
                  <a href="mailto:prakhargoyal.104@gmail.com" target="_blank" rel="noreferrer">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 flex text-[#5651e5] cursor-pointer hover:scale-105 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-full shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="uppercase text-sm py-2">
                      Name
                    </label>
                    <input
                      name="name"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="number" className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      name="number"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="number"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="email" className="uppercase text-sm py-2">
                    Email
                  </label>
                  <input
                    name="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="subject" className="uppercase text-sm py-2">
                    Subject
                  </label>
                  <input
                    name="subject"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="message" className="uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full p-4 bg-gradient-to-r from-[#5651e5] to-[#709dff] text-gray-100 mt-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 flex text-[#5651e5] cursor-pointer hover:scale-105 ease-in duration-300">
              <HiOutlineChevronDoubleUp size={25} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
