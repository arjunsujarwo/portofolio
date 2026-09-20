import { useState } from "react";
import {
  ArrowUpRight,
  GitBranch,
  Layers3,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import ProjectDetailModal from "../components/ui/ProjectDetailModal";
import { projects } from "../data/projects";
import type { Project } from "../types/project";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden bg-[#f8fafc]"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute left-0 top-20 h-80 w-80 rounded-full bg-[#eaf7fd] blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Selected Work"
            title="Projects That I Build"
            description="Beberapa project yang menjadi bagian dari perjalanan saya dalam mempelajari software development, system analysis, dan project management."
          />

          <div className="hidden max-w-xs text-right md:block">
            <p className="font-heading text-lg italic text-[#8b6e63]">
              Ideas become valuable
              <br />
              when they solve problems.
            </p>
          </div>
        </div>

        {/* Project Grid */}
        <div className="mt-14 grid gap-7">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10"
            >
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                {/* ========================================
                    PROJECT IMAGE / VISUAL
                ======================================== */}
                <div className="relative min-h-[280px] overflow-hidden bg-[#eaf7fd] lg:min-h-[400px]">
                  {/* Decorative background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#bde8fa] via-[#eaf7fd] to-[#f3ece8]" />

                  <div className="absolute inset-5 flex items-center justify-center rounded-2xl border border-white/70 bg-white/70 p-3 shadow-xl backdrop-blur-sm sm:inset-8 sm:p-4">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="h-full w-full rounded-xl object-contain"
                    />
                  </div>

                  {/* Project Number */}
                  <div className="absolute bottom-5 left-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#10243e] text-xs font-bold text-white shadow-lg">
                    0{index + 1}
                  </div>

                  {/* Category */}
                  <div className="absolute right-5 top-5 rounded-full border border-white/70 bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-[#2563eb] backdrop-blur-md">
                    {project.category}
                  </div>
                </div>

                {/* ========================================
                    PROJECT CONTENT
                ======================================== */}
                <div className="flex flex-col p-7 md:p-8">
                  {/* Title */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium text-[#8b6e63]">
                        {project.year}
                      </p>

                      <h3 className="mt-2 font-heading text-2xl font-semibold text-[#10243e]">
                        {project.title}
                      </h3>
                    </div>

                    {/* Decorative arrow */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all group-hover:border-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-white">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="mt-5 text-sm leading-7 text-[#6b7280]">
                    {project.shortDescription}
                  </p>

                  {/* ========================================
                      ROLE
                  ======================================== */}
                  <div className="mt-6 flex items-center gap-2">
                    <Layers3 size={15} className="text-[#3b82f6]" />

                    <span className="text-xs font-semibold text-[#10243e]">
                      {project.role}
                    </span>
                  </div>

                  {/* ========================================
                      TECHNOLOGIES
                  ======================================== */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-medium text-slate-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* ========================================
                      ACTIONS
                  ======================================== */}
                  <div className="mt-auto flex flex-wrap gap-3 pt-7">
                    {/* View Details */}
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 rounded-full bg-[#10243e] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#3b82f6]"
                    >
                      View Details
                      <ArrowUpRight size={14} />
                    </button>

                    {/* ====================================
                        HKI
                    ==================================== */}
                    {project.hkiNumber && project.hkiUrl && (
                      <a
                        href={project.hkiUrl}
                        target="_blank"
                        rel="noreferrer"
                        title="Lihat Sertifikat HKI"
                        className="inline-flex items-center gap-2 rounded-full border border-[#e2d5cf] bg-[#fdf9f7] px-5 py-2.5 text-xs font-semibold text-[#6f553b] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#8b6e63] hover:bg-[#f3ece8] hover:shadow-sm"
                      >
                        HKI • {project.hkiNumber}
                        <ArrowUpRight
                          size={14}
                          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>
                    )}

                    {/* ====================================
                        GITHUB
                    ==================================== */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-xs font-semibold text-[#10243e] transition hover:border-[#10243e] hover:bg-slate-50"
                      >
                        <GitBranch size={14} />
                        GitHub
                      </a>
                    )}

                    {/* ====================================
                        DEMO
                    ==================================== */}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-xs font-semibold text-[#10243e] transition hover:border-[#3b82f6] hover:text-[#2563eb]"
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ========================================
            PROJECT DETAIL MODAL
        ======================================== */}
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}