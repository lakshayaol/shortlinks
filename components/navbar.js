"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <nav className='bg-emerald-800 text-emerald-50 px-5 py-3 flex items-center justify-between'>
        <div className='flex items-center justify-between w-full md:w-auto gap-4'>
          <div className="logo font-extrabold text-2xl sm:text-3xl">
            <Link href="/">ShortLinks</Link>
          </div>

       <button className="md:hidden text-emerald-50 focus:outline-none cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className='hidden md:flex items-center gap-10'>
          <ul className='flex items-center gap-8 text-lg font-medium'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shorten">Shorten</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>

          <div className='flex items-center text-base gap-4'>
            <Link href="https://www.linkedin.com/in/lakshay-aol/" target="_blank">
              <button className="bg-emerald-50 text-emerald-800 shadow-lg px-4 py-2 rounded-lg font-bold flex items-center min-w-[120px] justify-center">
                <Image src="/linkedin.svg" alt="LinkedIn Logo" width={20} height={20} className="mr-2" />
                LinkedIn
              </button>
            </Link>

            <Link href="https://github.com/lakshayaol" target='_blank'>
              <button className='bg-emerald-50 text-emerald-800 shadow-lg px-4 py-2 rounded-lg font-bold flex items-center min-w-[120px] justify-center'>
                <Image src="/Github.svg" alt="GitHub Logo" width={20} height={20} className='mr-2' />
                GitHub
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className='md:hidden bg-emerald-800 text-emerald-50 px-5 py-6 space-y-6'>
          <ul className='flex flex-col items-center text-lg font-medium gap-4'>
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/shorten" onClick={() => setMenuOpen(false)}>Shorten</Link></li>
            <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
          </ul>

          <div className='flex justify-center gap-4 pt-4'>
            <Link href="https://www.linkedin.com/in/lakshay-aol/" target="_blank">
              <button className="bg-emerald-50 text-emerald-800 shadow-lg px-4 py-2 rounded-lg font-bold flex items-center min-w-[120px] justify-center">
                <Image src="/linkedin.svg" alt="LinkedIn Logo" width={20} height={20} className="mr-2" />
                LinkedIn
              </button>
            </Link>

            <Link href="https://github.com/lakshayaol" target='_blank'>
              <button className='bg-emerald-50 text-emerald-800 shadow-lg px-4 py-2 rounded-lg font-bold flex items-center min-w-[120px] justify-center'>
                <Image src="/Github.svg" alt="GitHub Logo" width={20} height={20} className='mr-2' />
                GitHub
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
