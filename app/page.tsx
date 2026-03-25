"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import CertificateCard from "@/components/CertificateCard";
import Contact from "@/components/Contact";

// Define structured data types
type Skill = {
  name: string;
  category: "language" | "library" | "database" | "bundler" | "Content Management System" | "deployment" | "other";
  level: number;
  url?: string;
};

type Project = {
  mediaUrl?: string;
  title: string;
  description: string;
  githubUrl: string;
  level: "basic" | "intermediate" | "advanced";
  liveUrl?: string;
};

type Certificate = {
  mediaUrl?: string;
  name: string;
  description: string;
};

export default function Home() {

  const skills: Skill[] = [
    { name: "python", category: "language", level: 80 },
    { name: "javascript", category: "language", level: 70 },
    { name: "typescript", category: "language", level: 50 },
    { name: "HTML", category: "language", level: 95 },
    { name: "CSS", category: "language", level: 95 },
    { name: "react", category: "library", level: 60 },
    { name: "redux toolkit", category: "library", level: 60 },
    { name: "express", category: "library", level: 80 },
    { name: "nextJS", category: "language", level: 75 },
    { name: "mongoDB", category: "database", level: 75 },
    { name: "mySQL", category: "database", level: 60 },
    { name: "postgreSQL", category: "database", level: 10 },
    { name: "tailwind CSS", category: "language", level: 90 },
    { name: "bootstrap", category: "language", level: 80 },
    { name: "vite", category: "bundler", level: 95 },
    { name: "strapi", category: "Content Management System", level: 95 },
    { name: "wordpress", category: "Content Management System", level: 95 },
    { name: "vercel", category: "deployment", level: 95 },
    { name: "netlify", category: "deployment", level: 95 },
    { name: "render", category: "deployment", level: 95 },
  ];

  const projects: Project[] = [
    {
      title: "Todo App",
      description: "A full-stack Todo application designed to demonstrate modern web development practices. This project is split into a client-side frontend and a server-side backend.",
      githubUrl: "https://github.com/rajani-ranjan-jha/todo-app",
      level: "intermediate",
      mediaUrl: '/assets/cool-rajani.jpg' // Placeholder, would ideally be project specific
    },
    {
      title: "Quiz App",
      description: "An interactive quiz application built with React that leverages AI to generate dynamic questions and provide explanations.",
      githubUrl: "https://github.com/rajani-ranjan-jha/quiz-app",
      level: "intermediate",
      mediaUrl: '/assets/cool-rajani.jpg'
    },
    {
      title: "QR-code Generator",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam minus veniam id deleniti. Ullam non unde, sequi, excepturi accusamus vero illum dolor repellendus velit eius aperiam odit natus totam veniam.",
      githubUrl: "github.com",
      level: "basic",
      mediaUrl: '/assets/cool-rajani.jpg'
    },
    {
      title: "GIF App",
      description: "A dynamic web application for discovering and sharing GIFs, built with React, TypeScript, and Vite. This project demonstrates modern frontend development practices and integration with third-party APIs.",
      githubUrl: "https://github.com/rajani-ranjan-jha/gif-app",
      level: "intermediate",
      mediaUrl: '/assets/cool-rajani.jpg'
    },
    {
      title: "News App",
      description: "A modern news application built with Next.js that fetches and displays the latest news headlines from various categories using the NewsAPI.",
      githubUrl: "https://github.com/rajani-ranjan-jha/news-app",
      level: "intermediate",
      mediaUrl: '/assets/cool-rajani.jpg'
    },
    {
      title: "URL shortner",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam minus veniam id deleniti. Ullam non unde, sequi, excepturi accusamus vero illum dolor repellendus velit eius aperiam odit natus totam veniam.",
      githubUrl: "github.com",
      level: "basic",
      mediaUrl: '/assets/cool-rajani.jpg'
    },
    {
      title: "Password Generator",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam minus veniam id deleniti. Ullam non unde, sequi, excepturi accusamus vero illum dolor repellendus velit eius aperiam odit natus totam veniam.",
      githubUrl: "github.com",
      level: "basic",
      mediaUrl: '/assets/cool-rajani.jpg'
    },
    {
      title: "Unit Converter",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam minus veniam id deleniti. Ullam non unde, sequi, excepturi accusamus vero illum dolor repellendus velit eius aperiam odit natus totam veniam.",
      githubUrl: "github.com",
      level: "basic",
      mediaUrl: '/assets/cool-rajani.jpg'
    },
    {
      title: "Weather App",
      description: "Built using React and Vite. Provides users with current weather information and forecasts based on city search or current location.",
      githubUrl: "https://github.com/rajani-ranjan-jha/weather-app",
      level: "intermediate",
      mediaUrl: '/assets/cool-rajani.jpg'
    },
    {
      title: "Chat Z",
      description: "A modern, real-time chat application built with Next.js 15, featuring seamless messaging, user authentication, and real-time communication powered by Socket.IO.",
      githubUrl: "https://github.com/rajani-ranjan-jha/chat-app",
      level: "advanced",
      mediaUrl: '/assets/cool-rajani.jpg'
    },
    {
      title: "Movie Master",
      description: "Movie Master is a modern web application designed for movie enthusiasts to discover, track, and review their favorite movies and TV shows. Built with Next.js and Tailwind CSS, it offers a sleek, responsive interface with dark mode support.",
      githubUrl: "https://github.com/rajani-ranjan-jha/movie-app",
      level: "advanced",
      mediaUrl: '/assets/cool-rajani.jpg'
    },
  ];

  const certificates: Certificate[] = [
    {
      name: "GUVI FullStack Development Course",
      description: "Completed a comprehensive full-stack development self-paced learning program at GUVI, covering various technologies and tools used in modern web development.",
      mediaUrl: 'guvi-fullstack-development-course.png'
    },
    {
      name: "GUVI FullStack internship",
      description: "Completed a full-stack development virtual-internship at GUVI, gaining hands-on experience in building modern web applications.",
      mediaUrl: 'guvi-fullstack-internship.jpg'
    },
  ]

  return (
    <main className="min-h-screen font-sans bg-background text-foreground selection:bg-primary/20 selection:text-primary transition-all duration-300 ease-in-out">
      <Navbar />
      <div className="container mx-auto px-4 md:px-8 space-y-24 pb-24">
        <Hero />
        <SkillCard SkillData={skills} />
        <ProjectCard ProjectData={projects} />
        <CertificateCard CertificateData={certificates}/>
        <Contact/>
      </div>
    </main>
  );
}
