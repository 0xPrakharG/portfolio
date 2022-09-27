import React from 'react'
import Image from 'next/image'
import amazon from '../public/assets/projects/amazon.png'
import tesla from '../public/assets/projects/tesla.png'
import netflix from '../public/assets/projects/Netflix-copy.png'
import grocery from '../public/assets/projects/grocery.png'
import Link from 'next/link'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className="w-full  bg-gray-200">
      <div className="max-w-[80%] m-auto px-2 py-20">
        <p className="tracking-widest pb-6 uppercase text-xl text-[#5651e5]">
          Projects
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Netflix Clone"
            backgroundImg={netflix}
            projectUrl="/netflix"
          />
          <ProjectItem
            title="Amazon Clone"
            backgroundImg={amazon}
            projectUrl="/amazon"
          />
          <ProjectItem
            title="Tesla Clone"
            backgroundImg={tesla}
            projectUrl="/tesla"
          />
          <ProjectItem
            title="Grocery Bud"
            backgroundImg={grocery}
            projectUrl="/grocery"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
