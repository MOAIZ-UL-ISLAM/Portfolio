import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {BsLinkedin, BsFacebook, BsGithub} from 'react-icons/bs'
import {FaXTwitter} from 'react-icons/fa6'
export default function Footer() {
  return (
    <div className='flex flex-col items-center w-[300px] justify-between gap-6 m-8 mt-8 sm:w-[800px] sm:flex-row'>
        <div>
            <Image alt='logo' src='/mylogo.png' width={150} height={150}/>
        </div>
        <div className='flex flex-row items-center justify-center gap-4'>
        <Link
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com"
          target="_blank"
        >
          <BsLinkedin />
        </Link>
        <Link
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://twitter.com/moaiz0404"
          target="_blank"
        >
          <FaXTwitter />
        </Link>
        <Link
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.facebook.com/profile.php?id=100005708386670"
          target="_blank"
        >
          <BsFacebook />
        </Link>
        <Link
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/MOAIZ-UL-ISLAM"
          target="_blank"
        >
          <BsGithub />
        </Link>
        </div>
        <div>
            <p>2023&#169;| Devloped by Moaiz   ❤</p>
        </div>
    </div>
  )
}
