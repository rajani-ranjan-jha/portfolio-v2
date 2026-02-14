import Image from 'next/image'
import React from 'react'
import { TextHoverEffect } from './ui/text-hover-effect'
import { platform } from 'os'
import Loading from './Loading'

const Hero = () => {

  return <Loading/>

  const name = 'Rajani Ranjan Jha'
  const about = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates dolorem tempore a rem error saepe, minima illum, quam ipsa esse adipisci, reprehenderit ratione quos necessitatibus? Nemo nisi tempore sequi error asperiores nostrum sunt exercitationem aliquam accusantium enim. Voluptatum illum in ab sequi corporis dolorum cumque minus magnam eaque laboriosam.'
  const contactPlatforms = [
    {
      platform: 'gmail',
      url: 'rajanijha50@gmail.com',
      type: 'email'
    },
    {
      platform: 'github',
      url: 'https://github.com/rajani-ranjan-jha',
      type: 'platform'
    },
    {
      platform: 'linkedin',
      url: 'https://www.linkedin.com/in/rajani-ranjan-jha',
      type: 'platform'
    },
    {
      platform: 'leetcode',
      url: 'https://www.linkedin.com/in/rajani-ranjan-jha',
      type: 'platform'
    },
    {
      platform: 'resume',
      url: 'https://www.linkedin.com/in/rajani-ranjan-jha',
      type: 'document'
    },
  ]
  return (
    <div id='home' className='px-20 animate-fade-in-down border-2 w-full py-10 flex justify-center items-center'>
      <div className='md:w-1/2'>
        <img className='max-w-80 rounded-full border-red-500 border-2' src="/assets/cool-rajani.jpg" alt={name} />
        {/* <Image src='/assets/cool-rajani.jpg' alt={name}  width={400} height={400}></Image> */}
      </div>
      <div className='md:w-1/2 flex flex-col'>
        {/* <TextHoverEffect text='Rajani' automatic={true}/> */}
        <h1 className='text-4xl font-semibold bg-linear-to-r from-indigo-600 to-green-600 bg-clip-text bg-transparent'>{name}</h1>
        {/* add a profession section: i'm a ___ */}
        <p>{about}</p>
      </div>
    </div>
  )
}

export default Hero
