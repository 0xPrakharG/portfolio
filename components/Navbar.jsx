import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/assets/logo.png'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { useRouter } from 'next/router'
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [navBg, setNavBg] = useState('#ecf0f3')
  const [linkColor, setLinkColor] = useState('#1f2937')
  const router = useRouter()

  useEffect(() => {
    if (
      router.asPath === '/amazon' ||
      router.asPath === '/tesla' ||
      router.asPath === '/grocery' ||
      router.asPath === '/netflix'
    ) {
      setNavBg('transparent')
      setLinkColor('#ecf0f3')
    } else {
      setNavBg('#ecf0f3')
      setLinkColor('#1f2937')
    }
  }, [router])

  const handleNav = () => {
    setNav(!nav)
  }
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 1) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])
  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100]'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src={logo} alt="/" width="85" height="50" />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b mr-10">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden cursor-pointer mr-3" onClick={handleNav}>
            <AiOutlineMenu size={28} />
          </div>
        </div>
      </div>

      <div
        onClick={handleNav}
        className={
          nav
            ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-700'
            : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-700'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-200'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src={logo}
                  alt="/"
                  width="80"
                  height="45"
                  onClick={handleNav}
                />
              </Link>

              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 pb-2 my-4">
              <p className="capitalize w-[85%] md:w-[90%] py-4">
                let's build something legendary together
              </p>
            </div>
          </div>

          <div>
            <ul className="flex uppercase py-4 flex-col">
              <Link href="/">
                <li
                  onClick={handleNav}
                  className="py-4 pl-2 text-sm hover:bg-gray-200 hover:translate-x-1 ease-in duration-300"
                >
                  home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={handleNav}
                  className="py-4 pl-2 text-sm hover:bg-gray-200 hover:translate-x-1 ease-in duration-300"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={handleNav}
                  className="py-4 pl-2 text-sm hover:bg-gray-200 hover:translate-x-1 ease-in duration-300"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={handleNav}
                  className="py-4 pl-2 text-sm hover:bg-gray-200 hover:translate-x-1 ease-in duration-300"
                >
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={handleNav}
                  className="py-4 pl-2 text-sm hover:bg-gray-200 hover:translate-x-1 ease-in duration-300"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's connect
              </p>
              <div className="flex items-center justify-between my-4 w-[80%]">
                <a
                  href="https://www.linkedin.com/in/0xprakharg/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 flex text-[#5651e5] cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/0xPrakharG"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 flex text-[#5651e5] cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <a
                  href="https://twitter.com/0xPrakharG"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 flex text-[#5651e5] cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaTwitter />
                  </div>
                </a>
                <a
                  href="mailto:prakhargoyal.3014@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 flex text-[#5651e5] cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
