import React from 'react'
import Image from 'next/image'
import myPhoto from '../public/assets/my.png'

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
            I am a front-end web developer currently pursuing my BTECH in the
            field of Information Technology from Manipal University Jaipur,
            Rajasthan. I have always had a knack for technology and working with
            computers. During my college I started working with HTML & CSS which
            developed my interest in Web Development.
          </p>
          <p className="pb-6 text-lg tracking-widest text-gray-600">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning JavaScript and was even more
            enthused with making websites interactive. This interest helped me
            in making more creative and unique website designs. I am now
            spending my time with building projects with ReactJS, NextJS,
            Firebase and learning new technologies.
          </p>
          <button className="mb-9 p-3">
            <a
              href="https://drive.google.com/file/d/1udGffFSaeql1ZHJJgGyZG_VL-9PyJFkU/view"
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
