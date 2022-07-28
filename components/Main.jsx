import React from 'react'
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's build something legendary together
          </p>
          <h1 className="md:text-4xl py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Prakhar 👋</span>
          </h1>
          <h1 className="md:text-4xl text-gray-700">A Frontend developer</h1>
          <p className="py-5 text-gray-600 mx-auto max-w-[80%] md:max-w-[60%]">
            I'm a front-end web developer specializing in building exceptional
            digital experiences. currently I'm focused on building responsive
            front-end web applications while learning backend technologies.
          </p>
          <div className="flex items-center justify-between mx-auto max-w-[330px] py-4">
            <a href="https://www.linkedin.com/in/prakhar-goyal-41b1451bb/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 flex text-[#5651e5] cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn size={20} />
              </div>
            </a>
            <a href="https://github.com/Prakhar-Goyal-3014">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 flex text-[#5651e5] cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub size={20} />
              </div>
            </a>
            <a href="https://twitter.com/Prakharg3014">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 flex text-[#5651e5] cursor-pointer hover:scale-105 ease-in duration-300">
                <FaTwitter size={20} />
              </div>
            </a>
            <a href="mailto:prakhargoyal.104@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 flex text-[#5651e5] cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
