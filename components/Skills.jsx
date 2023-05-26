import React from 'react'
import Image from 'next/image'
import html from '../public/assets/skills/html.png'
import css from '../public/assets/skills/css.png'
import javascript from '../public/assets/skills/javascript.png'
import react from '../public/assets/skills/react.png'
import firebase from '../public/assets/skills/firebase.png'
import nextjs from '../public/assets/skills/nextjs.png'
import tailwind from '../public/assets/skills/tailwind.png'
import github from '../public/assets/skills/github1.png'
import mongodb from '../public/assets/skills/mongodb.png'
import nodejs from '../public/assets/skills/nodejs.png'
import express from '../public/assets/skills/express.png'
import mui from '../public/assets/skills/mui.png'
const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 py-20">
      <div className="max-w-[60%] sm:max-w-[80%] m-auto flex flex-col justify-center h-full">
        <p className="tracking-widest pb-6 uppercase text-xl text-[#5651e5]">
          Skills
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src={mongodb} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>MongoDB</h4>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src={nodejs} width="84px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>NodeJS</h4>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src={express} width="130px" height="55px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>ExpressJS</h4>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src={react} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>ReactJs</h4>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src={nextjs} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>NextJs</h4>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src={javascript} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>Javascript</h4>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src={html} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>HTML</h4>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src={css} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>CSS</h4>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src={tailwind} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>Tailwind</h4>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src={github} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>Github</h4>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src={mui} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>MUI</h4>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src={firebase} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>Firebase</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
