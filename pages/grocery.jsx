import Image from 'next/image'
import React from 'react'
import grocery from '../public/assets/projects/grocery.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const groceryBud = () => {
  return (
    <div className="w-full ">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1 top-0 left-0"
          layout="fill"
          objectFit="cover"
          src={grocery}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[80%] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 tracking-widest">Grocery Bud</h2>
          <h3 className="tracking-wider">HTML / CSS / Javascript</h3>
        </div>
      </div>
      <div className="max-w-[80%] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="tracking-widest pb-6 uppercase text-xl text-[#5651e5]">
            Project
          </p>
          <h2 className="pb-3">Overview</h2>
          <p>
            This app was built using HTML, CSS and Javascript. Users can add
            their grocery items in the list so they do not want to remember that
            what they have to buy when they go out for maketing the next time.
            It stores the items in the localstorage so even after closing the
            tab or the browser they can easily see what they added before.
          </p>
          <a href="https://prakhar-goyal-3014.github.io/Grocery-Bud/" target="_blank" rel="noreferrer">
            <button className="px-4 py-2 mt-4 mr-8 ">Demo</button>
          </a>
          <a href="https://github.com/Prakhar-Goyal-3014/Grocery-Bud" target="_blank" rel="noreferrer">
            <button className="px-4 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-2 lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-1">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                HTML
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Javascript
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

export default groceryBud
