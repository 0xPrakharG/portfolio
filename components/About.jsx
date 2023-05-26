import React from 'react'
import Image from 'next/image'
import myPhoto from '../public/assets/prakhar2.jpg'

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-20 bg-gray-200"
    >
      <div className="max-w-[80%] m-auto md:grid grid-cols-3 gap-12">
        <div className="col-span-2">
          <p className="tracking-widest pb-6 uppercase text-xl text-[#5651e5]">
            About
          </p>
          <p className="pb-6 text-lg tracking-widest text-gray-600">
            I'm Prakhar Goyal, a React.js frontend web developer expanding my skills to include the complete MERN stack. I'm passionate about creating intuitive user interfaces and I'm excited about the potential of Web 3.0 technologies. With a strong curiosity for backend development, I'm currently diving into MongoDB, Express.js, React.js, and Node.js. Collaboration and continuous learning are at the core of my approach, and I thrive in team environments. On my portfolio website, you'll find examples of my frontend work and ongoing projects exploring the potential of Web 3.0.
          </p>
          <p className="pb-6 text-lg tracking-widest text-gray-600">
            Let's connect and build the future of the web together!
          </p>
          <button className="mb-9 p-3">
            <a
              href="https://drive.google.com/file/d/1j5MGKqSQLtWxCGbByHQnkXXbdG-LO_Ho/view?usp=sharing"
              target="_blank" rel="noreferrer"
            >
              My Resume
            </a>
          </button>
        </div>
        <div className="m-auto w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4 flex items-center justify-center hover:scale-105 ease-in duration-300">
          <Image src={myPhoto} alt="/" className="rounded-xl" />
        </div>
      </div>
    </div>
  )
}

export default About
