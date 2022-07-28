import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] hover:scale-105 ease-in duration-300">
      <Image
        src={backgroundImg}
        alt="/"
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="capitalize tracking-widest text-2xl text-center text-white">
          {title}
        </h3>
        <Link href={projectUrl}>
          <p className="text-center mt-4 py-3 uppercase shadow-md shadow-black rounded-xl bg-white text-gray-700 hover:scale-105 ease-in duration-300">
            More Info
          </p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectItem
