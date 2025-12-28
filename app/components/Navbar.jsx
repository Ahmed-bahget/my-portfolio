"use client"

import { assets } from '../../assets/assets'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Menu, X, Mail, Github, LinkedinMail, Linkedin } from 'lucide-react'


const Navbar = () => {
  const pathname = usePathname()
  const isHome = pathname === "/"

  const [isScroll, setIsScroll] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [openContact, setOpenContact] = useState(false)


  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const link = (hash) => (isHome ? hash : `/${hash}`)

  return (
    <>
      <div className="absolute top-0 right-0 w-full -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" width={1920} height={1080} />
      </div>

      <nav
        className={`${isScroll ? 'md:bg-[#ffffff60] backdrop-blur-lg shadow-sm' : ''} 
        fixed top-4  w-full z-50 flex items-center justify-between px-5 lg:px-10 xl:px-[8%]`}
      >
        {/* Logo */}
        <Link href="/" className="font-ovo text-2xl font-semibold text-[#21033cf5]">
          Ahmed Bahget
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 border border-gray-400 rounded-full shadow-md bg-[#ffffff86] p-2 px-4 backdrop-blur-lg">
          <li><Link href={link("#top")}>Home</Link></li>
          <li><Link href={link("#about")}>About Me</Link></li>
          {/* <li><Link href={link("#services")}>Services</Link></li> */}
          <li><Link href="/projects">My Works</Link></li>
          <li><Link href={link("#contact")}>Contact Me</Link></li>
        </ul>
        <div className="hidden md:relative md:flex">
          <button
            onClick={() => setOpenContact(!openContact)}
            className="flex items-center gap-2 px-5 py-2 border border-gray-500 rounded-full hover:bg-gray-100 transition"
          >
            Contact
          </button>

          {/* Dropdown */}
          {openContact && (
            <div
              className="absolute right-0 top-14 w-65 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
              onMouseLeave={() => setOpenContact(false)}
            >
              <a
                href="mailto:ahedbahget70@gmail.com"
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition"
              >
                <Mail size={18} /> ahedbahget70@gmail.com
              </a>

              <a
                href="https://github.com/Ahmed-bahget/"
                target="_blank"
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition"
              >
                <Github size={18} /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/ahmed-bahget-50747a198/"
                target="_blank"
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          )}
        </div>


        {/* Mobile menu button */}
        <button onClick={() => setOpenMenu(true)} className="block md:hidden">
          <Menu size={24} className="w-6" />
        </button>

        {/* Mobile menu */}
        <ul
          className={`fixed top-0 right-0 h-screen w-64 bg-rose-50 z-50 p-10 transition-transform duration-500
          ${openMenu ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <button onClick={() => setOpenMenu(false)} className="absolute top-6 right-6">
            <X size={20} className="w-5" />
          </button>

          <li><Link onClick={() => setOpenMenu(false)} href={link("#top")}>Home</Link></li>
          <li><Link onClick={() => setOpenMenu(false)} href={link("#about")}>About Me</Link></li>
          {/* <li><Link onClick={() => setOpenMenu(false)} href={link("#services")}>Services</Link></li> */}
          <li><Link onClick={() => setOpenMenu(false)} href={link("#work")}>My Work</Link></li>
          <li><Link onClick={() => setOpenMenu(false)} href={link("#contact")}>Contact Me</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
