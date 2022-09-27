import Image from 'next/image'
import React from 'react'
import netflix from '../public/assets/projects/Netflix.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const amazonClone = () => {
  return (
    <div className="w-full ">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1 top-0 left-0"
          layout="fill"
          objectFit="cover"
          src={netflix}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[80%] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 tracking-widest">Netflix Clone</h2>
          
        </div>
      </div>
      <div className="max-w-[80%] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="tracking-widest pb-6 uppercase text-xl text-[#5651e5]">
            Project
          </p>
          <h2 className="pb-3">Overview</h2>
          <p>
            This app was built using Typescript and NextJs and hosted on Vercel. User can signUp/signIn first using thier email and password which will be stored in the firestore database. After this user have to make payment through thier debit/credit card. This information of the payment get stored in the stripe payments database and also the information of the page. user can watch the movies which keep updating regularly here and in the account section I have added functionality for upgrading the plan and then user can also signOut of the site.
          </p>
          <a href="https://netflix-clone-nextjs-kohl.vercel.app/" target="_blank" rel="noreferrer">
            <button className="px-4 py-2 mt-4 mr-8 ">Demo</button>
          </a>
          <a href="https://github.com/Prakhar-Goyal-3014/netflix-clone-nextjs" target="_blank" rel="noreferrer">
            <button className="px-4 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-2 lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-1">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 lg:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Typescript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                NextJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Firebase
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  )
}

export default amazonClone
