"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"
import { assets } from "../../assets/assets"
import { Menu, X, Mail, Github, Linkedin } from "lucide-react"

const Navbar = () => {
  const pathname = usePathname()
  const isHome = pathname === "/"

  const [isScroll, setIsScroll] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [openContact, setOpenContact] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50)

    handleScroll()
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Navigate to a section on the home page, even from another route.
  const link = (hash) => (isHome ? hash : `/${hash}`)

  // Close menus when navigating.
  const closeMobileMenu = () => setOpenMenu(false)

  return (
    <>
      {/* Header background image */}
      <div className="absolute top-0 right-0 -z-10 w-full -translate-y-[80%]">
        <Image
          src={assets.header_bg_color}
          alt=""
          width={1920}
          height={1080}
          priority
        />
      </div>

      {/* Navigation bar */}
      <nav
        className={`fixed top-0 z-50 flex w-full items-center justify-between
          px-4 py-3 sm:px-5 lg:px-10 xl:px-[8%]
          transition-all duration-300 ${
            isScroll
              ? "border-b border-gray-200/50 bg-white/70 shadow-md backdrop-blur-xl"
              : "bg-white/40 backdrop-blur-md"
          }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-ovo text-2xl font-semibold text-[#21033cf5]"
        >
          Ahmed Bahget
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-6 rounded-full border border-gray-400/70 bg-white/50 px-4 py-2 shadow-md backdrop-blur-lg md:flex lg:gap-8">
          <li>
            <Link href={link("#top")} className="transition hover:text-purple-700">
              Home
            </Link>
          </li>

          <li>
            <Link href={link("#about")} className="transition hover:text-purple-700">
              About Me
            </Link>
          </li>

          <li>
            <Link href="/projects" className="transition hover:text-purple-700">
              My Works
            </Link>
          </li>

          <li>
            <Link href={link("#contact")} className="transition hover:text-purple-700">
              Contact Me
            </Link>
          </li>
        </ul>

        {/* Desktop contact dropdown */}
        <div className="relative hidden md:block">
          <button
            type="button"
            onClick={() => setOpenContact((prev) => !prev)}
            aria-expanded={openContact}
            className="flex items-center gap-2 rounded-full border border-gray-500 px-5 py-2 transition hover:bg-gray-100"
          >
            Contact
          </button>

          {openContact && (
            <div className="absolute right-0 top-14 w-72 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
              <a
                href="mailto:ahedbahget70@gmail.com"
                className="flex items-center gap-3 px-4 py-3 transition hover:bg-gray-100"
              >
                <Mail size={18} />
                <span className="break-all">ahedbahget70@gmail.com</span>
              </a>

              <a
                href="https://github.com/Ahmed-bahget/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 transition hover:bg-gray-100"
              >
                <Github size={18} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/ahmed-bahget-50747a198/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 transition hover:bg-gray-100"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpenMenu(true)}
          aria-label="Open navigation menu"
          aria-expanded={openMenu}
          className="block rounded-md p-1 transition hover:bg-gray-200/50 md:hidden"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {openMenu && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMobileMenu}
          className="fixed inset-0 z-[60] bg-black/20 md:hidden"
        />
      )}

      {/* Mobile menu panel */}
      <div
        className={`fixed right-0 top-0 z-[70]
          h-screen w-5/6 max-w-80 sm:w-64
          rounded-l-2xl shadow-xl backdrop-blur-xl
          transition-transform duration-300 ease-in-out md:hidden
          ${
            openMenu
              ? "translate-x-0"
              : "translate-x-full pointer-events-none"
          }`}
        style={{
          // Change this value to control the mobile menu background.
          backgroundColor: "rgba(255, 255, 255, 0.65)",
        }}
        aria-hidden={!openMenu}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={closeMobileMenu}
          aria-label="Close navigation menu"
          tabIndex={openMenu ? 0 : -1}
          className="absolute right-4 top-4 rounded-full p-2 transition hover:bg-gray-400/30"
        >
          <X size={20} className="text-gray-800" />
        </button>

        {/* Mobile menu items */}
        <ul className="p-6 pt-16 sm:p-8 sm:pt-16">
          <li className="mt-2">
            <Link
              href={link("#top")}
              onClick={closeMobileMenu}
              tabIndex={openMenu ? 0 : -1}
              className="block rounded-lg px-4 py-3 text-lg font-semibold text-gray-800 transition hover:bg-gray-300/50"
            >
              Home
            </Link>
          </li>

          <li className="mt-2">
            <Link
              href={link("#about")}
              onClick={closeMobileMenu}
              tabIndex={openMenu ? 0 : -1}
              className="block rounded-lg px-4 py-3 text-lg font-semibold text-gray-800 transition hover:bg-gray-300/50"
            >
              About Me
            </Link>
          </li>

          <li className="mt-2">
            <Link
              href="/projects"
              onClick={closeMobileMenu}
              tabIndex={openMenu ? 0 : -1}
              className="block rounded-lg px-4 py-3 text-lg font-semibold text-gray-800 transition hover:bg-gray-300/50"
            >
              My Works
            </Link>
          </li>

          <li className="mt-2">
            <Link
              href={link("#contact")}
              onClick={closeMobileMenu}
              tabIndex={openMenu ? 0 : -1}
              className="block rounded-lg px-4 py-3 text-lg font-semibold text-gray-800 transition hover:bg-gray-300/50"
            >
              Contact Me
            </Link>
          </li>

          {/* Mobile social links */}
          <li className="mt-6 border-t border-gray-400/40 pt-4">
            <a
              href="mailto:ahedbahget70@gmail.com"
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-800 transition hover:bg-gray-300/50"
              tabIndex={openMenu ? 0 : -1}
            >
              <Mail size={18} />
              Email Me
            </a>
          </li>

          <li>
            <a
              href="https://github.com/Ahmed-bahget/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-800 transition hover:bg-gray-300/50"
              tabIndex={openMenu ? 0 : -1}
            >
              <Github size={18} />
              GitHub
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/ahmed-bahget-50747a198/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-800 transition hover:bg-gray-300/50"
              tabIndex={openMenu ? 0 : -1}
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar