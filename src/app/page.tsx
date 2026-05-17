"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronRight, Sparkles, LayoutGrid, GalleryHorizontalEnd } from "lucide-react";
import Image from "next/image";

// Easily add new projects here. 
// Just drop the generated image into the 'public' folder and add it to this list!
export const projects = [
  {
    id: 1,
    title: "Bible Lands Explorer",
    subtitle: "Spatial Theological Engine",
    description: "Interactive 3D map of the ancient Middle East with immersive theological spatial data.",
    url: "https://frontend-six-jet-41.vercel.app",
    image: "/bible_lands_explorer.png",
    color: "from-blue-600 to-indigo-900"
  },
  {
    id: 2,
    title: "Sermon Prep App",
    subtitle: "Apostle's Desk AI",
    description: "AI-powered theological assistant for sermon outlining, exegesis, and lectionary alignment.",
    url: "https://sermon-prep-app.vercel.app",
    image: "/sermon_prep.png",
    color: "from-purple-600 to-fuchsia-900"
  },
  {
    id: 3,
    title: "DARKROOM Pipeline",
    subtitle: "Video Production Dashboard",
    description: "7-agent autonomous video production and social media fulfillment pipeline.",
    url: "https://darkroom-app.vercel.app",
    image: "/darkroom_pipeline.png",
    color: "from-red-600 to-rose-900"
  },
  {
    id: 4,
    title: "GushelperBot",
    subtitle: "Telegram AI Assistant",
    description: "Your primary command interface for querying the Second Brain and triggering workflows.",
    url: "https://t.me/GushelperBot",
    image: "/gushelper_bot.png",
    color: "from-cyan-500 to-blue-800"
  }
];

export default function LinkTreeCarousel() {
  const [activeProject, setActiveProject] = useState(0);
  const [viewMode, setViewMode] = useState<"carousel" | "grid">("carousel");

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden relative flex flex-col items-center font-sans antialiased">
      {/* Dynamic Background Glow */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/0 via-black/50 to-black z-0" />
      </div>

      <div className="z-10 w-full max-w-lg px-6 pt-12 pb-12 flex flex-col min-h-screen">
        
        {/* Header */}
        <header className="flex flex-col items-center mb-8 shrink-0 relative">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-zinc-800 to-zinc-700 p-[1px] mb-4 shadow-2xl relative">
            <div className="absolute inset-0 rounded-2xl bg-black flex items-center justify-center overflow-hidden">
                <Sparkles className="w-8 h-8 text-white/80" />
            </div>
            <div className="absolute -inset-1 bg-white/20 blur-xl rounded-full opacity-50 z-[-1]" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">ORBIT Hub</h1>
          <p className="text-sm text-zinc-400 font-medium mb-6">Production & AI Workflows</p>
          
          {/* View Toggle */}
          <div className="flex items-center bg-white/10 p-1 rounded-xl backdrop-blur-md border border-white/10">
            <button 
              onClick={() => setViewMode("carousel")}
              className={`p-2 rounded-lg flex items-center gap-2 transition-all duration-300 ${viewMode === "carousel" ? "bg-white/20 text-white shadow-md" : "text-white/50 hover:text-white"}`}
            >
              <GalleryHorizontalEnd className="w-4 h-4" />
              <span className="text-xs font-semibold pr-1">Carousel</span>
            </button>
            <button 
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg flex items-center gap-2 transition-all duration-300 ${viewMode === "grid" ? "bg-white/20 text-white shadow-md" : "text-white/50 hover:text-white"}`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="text-xs font-semibold pr-1">Quick Grid</span>
            </button>
          </div>
        </header>

        {/* Views */}
        <div className="relative flex-1 w-full flex flex-col justify-center">
          <AnimatePresence mode="wait">
            
            {/* CAROUSEL VIEW */}
            {viewMode === "carousel" && (
              <motion.div 
                key="carousel"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full flex flex-col"
              >
                <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-8 px-4 -mx-4 items-center">
                  {projects.map((project, index) => (
                    <motion.div 
                      key={project.id}
                      className="min-w-[85%] snap-center shrink-0 flex flex-col relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onViewportEnter={() => setActiveProject(index)}
                      viewport={{ amount: 0.8 }}
                    >
                      <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                        {/* Background Image */}
                        <div className="absolute inset-0 bg-zinc-900">
                          <Image 
                            src={project.image} 
                            alt={project.title} 
                            fill 
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority={index === 0}
                          />
                        </div>
                        
                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 mix-blend-multiply`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                        {/* Content */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                          <div className="transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                            <p className="text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                              {project.subtitle}
                            </p>
                            <h2 className="text-3xl font-bold text-white leading-tight mb-3">
                              {project.title}
                            </h2>
                            <p className="text-sm text-white/80 line-clamp-2 mb-6">
                              {project.description}
                            </p>
                            
                            <a 
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between w-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-5 py-4 rounded-2xl transition-all duration-300 group/btn"
                            >
                              <span className="font-semibold text-sm">Launch App</span>
                              <div className="bg-white text-black p-1.5 rounded-full transform transition-transform group-hover/btn:rotate-45">
                                <ExternalLink className="w-4 h-4" />
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Pagination Indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {projects.map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => {
                         // A real implementation would scroll the carousel container to the index
                         setActiveProject(i);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeProject === i ? "w-6 bg-white" : "w-1.5 bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* QUICK GRID VIEW */}
            {viewMode === "grid" && (
              <motion.div 
                key="grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="w-full grid grid-cols-2 gap-4 pb-12"
              >
                {projects.map((project, index) => (
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="relative aspect-square rounded-2xl overflow-hidden group border border-white/10 shadow-lg hover:border-white/30 transition-all duration-300 block"
                  >
                    {/* Background */}
                    <div className="absolute inset-0 bg-zinc-900">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                      />
                    </div>
                    {/* Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-70 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 p-4 flex flex-col justify-end">
                      <ExternalLink className="w-4 h-4 text-white/50 absolute top-3 right-3 group-hover:text-white transition-colors" />
                      <p className="text-[10px] font-bold uppercase tracking-wider text-white/70 mb-1 truncate">
                        {project.subtitle}
                      </p>
                      <h3 className="text-sm font-bold text-white leading-tight line-clamp-2">
                        {project.title}
                      </h3>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Global styles for hiding scrollbar but allowing scroll */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </main>
  );
}

