"use client"
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
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
  const targetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [sortedProjects, setSortedProjects] = useState<Project[]>([]);

  useEffect(() => {
    const sorted = [...ProjectData].sort((a, b) => {
      const levelOrder = {
        basic: 1,
        intermediate: 2,
        advanced: 3
      };
      return levelOrder[a.level] - levelOrder[b.level];
    });
    setSortedProjects(sorted);
  }, [ProjectData]);

  useEffect(() => {
    const updateRange = () => {
      if (carouselRef.current && containerRef.current) {
        setScrollRange(carouselRef.current.scrollWidth - containerRef.current.offsetWidth);
      }
    };
    updateRange();
    
    // Fallback recalculation to ensure fonts/images are loaded
    const timeoutId = setTimeout(updateRange, 150);
    
    window.addEventListener("resize", updateRange);
    return () => {
      window.removeEventListener("resize", updateRange);
      clearTimeout(timeoutId);
    };
  }, [ProjectData]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <section id="projects" ref={targetRef} className="relative h-[300vh] border-0 border-blue-500">
      <div className="border-0 border-green-500 sticky top-0 flex flex-col min-h-screen overflow-hidden py-6 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12 shrink-0 mt-8 md:mt-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div ref={containerRef} className="flex-1 flex items-center w-full max-w-7xl mx-auto overflow-hidden border-0 border-red-500">
          <motion.div
            ref={carouselRef}
            style={{ x }}
            className="flex gap-8 w-max px-2"
          >
            {sortedProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="group relative bg-card rounded-xl overflow-hidden border border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col w-75 md:w-100 h-110 shrink-0"
              >
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden shrink-0">
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
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full capitalize shrink-0 ${project.level === "advanced" ? "bg-red-700" : project.level === "intermediate" ? "bg-yellow-700" : "bg-green-700"}`}>
                      {project.level}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4 grow">
                    {project.description}
                  </p>

                  {/* Actions */}
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border shrink-0">
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProjectCard
