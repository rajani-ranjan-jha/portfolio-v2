import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './Theme'

const Navbar = () => {

    const sections = [
        'home','skills','projects', 'academics','C&A','contact'
    ]

    const name = 'Rajani Ranjan Jha'


  return (
    <header className='animate-navbar w-full flex justify-center'>
        <nav className='w-190 flex justify-center items-center border border-white shadow-md rounded-full backdrop:blur-in-3xl'>
            {/* <div>
                <Link className='px-4 py-2 capitalize text-2xl' href={`#`}>{name}</Link>
            </div> */}
            <div className='flex justify-center items-center'>
                {sections.map((sec, idx) => (
                    <Link className='px-4 py-3 capitalize text-lg hover:bg-white/20  rounded-b-md' href={`#${sec}`} key={idx}>{sec}</Link>
                ))}
            </div>
            <ModeToggle/>
        </nav>
    </header>
  )
}

export default Navbar
