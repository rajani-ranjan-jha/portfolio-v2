"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { Github, ExternalLink } from 'lucide-react'


type Project = {
  mediaUrl?: string;
  title: string;
  description: string;
  githubUrl: string;
  level: "basic" | "intermediate" | "advanced";
  liveUrl?: string; // Made optional
};

const ProjectCard = ({ ProjectData }: { ProjectData: Project[] }) => {
  return (
    <section id="projects" className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {ProjectData.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }} // Stagger effect
            viewport={{ once: true }}
            className="group relative bg-card rounded-xl overflow-hidden border border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col h-full"
          >
            {/* Image Container */}
            <div className="relative h-48 w-full overflow-hidden">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
              <Image
                src={`/assets/projects/${project.title.toLowerCase().replaceAll(" ", "-")}.png`}
                alt={project.title}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col grow">
              <div className="flex justify-between items-start mb-2 gap-2">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded-full capitalize shrink-0">
                  {project.level}
                </span>
              </div>
              <p className="text-muted-foreground text-sm line-clamp-3 mb-4 grow">
                {project.description}
              </p>

              {/* Actions */}
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors ml-auto"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ProjectCard
