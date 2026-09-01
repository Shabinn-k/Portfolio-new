"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types/project";
import { ExternalLink, Server, ChevronDown, FolderGit2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative rounded-2xl border bg-[#0d1117] overflow-hidden transition-all duration-500 group",
        isExpanded ? "border-primary/50 shadow-[0_0_40px_rgba(132,204,22,0.15)]" : "border-border/50 hover:border-primary/30"
      )}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="p-6 md:p-8 flex flex-col gap-5 relative z-10">

        <div className="flex justify-between items-start gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-2 bg-muted/50 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <FolderGit2 className="w-5 h-5" />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="p-2 bg-muted/50 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="text-xs font-mono px-3 py-1.5 rounded-md bg-muted/40 border border-border/50 text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-border/50 mt-2 flex items-center justify-between">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            <Server className="w-4 h-4" />
            {isExpanded ? "Hide Architecture" : "View Architecture"}
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-2">
                <h4 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary block animate-pulse" />
                  Engineering Highlights
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.architectureNotes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground bg-muted/20 p-3 rounded-lg border border-border/30">
                      <span className="text-primary mt-0.5">▹</span>
                      <span className="leading-relaxed">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
}