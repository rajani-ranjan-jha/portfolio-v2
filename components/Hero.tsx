"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
import { ArrowRight, Github, Code, Linkedin, Mail, FileText } from 'lucide-react'

const Hero = () => {

  const name = 'Rajani Ranjan Jha'
  const role = "Full Stack Developer"
  const about = "Building digital experiences that matter. I specialize in full-stack development, crafting scalable and beautiful web applications."

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/rajani-ranjan-jha',
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/rajani-ranjan-jha/',
      icon: <Code className="w-5 h-5" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rajani-ranjan-jha',
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: 'Email',
      url: 'mailto:rajanijha50@gmail.com',
      icon: <Mail className="w-5 h-5" />,
    },
    {
      name: 'Resume',
      url: '/assets/RESUME2.pdf', // Assumed path based on previous file list
      icon: <FileText className="w-5 h-5" />,
    }
  ]

  return (
    <section id='home' className='min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between py-20 gap-10 overflow-hidden'>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='flex-1 space-y-6 text-center md:text-left'
      >
        <div className="space-y-2">
          <h2 className='text-sm md:text-base font-semibold tracking-wider text-primary uppercase'>
            Welcome to my portfolio
          </h2>
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight'>
            Hi, I'm <span className='text-primary'>{name}</span>
          </h1>
          <p className='text-xl md:text-2xl text-muted-foreground font-medium'>
            {role}
          </p>
        </div>

        <p className='text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0'>
          {about}
        </p>

        <div className='flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4'>
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
              title={link.name}
            >
              {link.icon}
            </motion.a>
          ))}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium ml-2 shadow-lg hover:shadow-primary/25 transition-all"
          >
            View Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

      </motion.div>

      {/* Image Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className='flex-1 flex justify-center md:justify-end relative'
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <Image
            src="/assets/cool-rajani.jpg"
            alt={name}
            fill
            className='object-cover rounded-full border-4 border-background shadow-2xl relative z-10'
            priority
          />
          {/* Decor elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary rounded-full blur-xl opacity-50" />
        </div>
      </motion.div>

    </section>
  )
}

export default Hero
