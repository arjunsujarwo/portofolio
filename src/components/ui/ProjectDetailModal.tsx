import { useEffect } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  GitBranch,
  Layers3,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "../../types/project";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({
  project,
  onClose,
}: ProjectDetailModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#10243e]/70 p-4 backdrop-blur-md md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-[#10243e] shadow-lg backdrop-blur transition hover:bg-[#10243e] hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="max-h-[90vh] overflow-y-auto">
              {/* Project Hero */}
              <div className="relative overflow-hidden bg-[#eaf7fd] p-6 md:p-10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#bde8fa] via-[#eaf7fd] to-[#f3ece8]" />

                <div className="relative">
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#2563eb] shadow-sm">
                      {project.category}
                    </span>

                    <span className="text-xs font-medium text-[#6b7280]">
                      {project.year}
                    </span>
                  </div>

                  <h2 className="max-w-3xl font-heading text-3xl font-semibold leading-tight text-[#10243e] md:text-5xl">
                    {project.title}
                  </h2>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6b7280] md:text-base">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="grid gap-10 p-6 md:p-10 lg:grid-cols-[1.2fr_0.8fr]">
                {/* Left */}
                <div>
                  {/* Gallery */}
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p className="section-label">Project Preview</p>
                        <h3 className="mt-3 font-heading text-2xl font-semibold text-[#10243e]">
                          Screens & Interface
                        </h3>
                      </div>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#eaf7fd] p-3 sm:p-5">
                      <div className="flex min-h-[220px] items-center justify-center rounded-xl bg-white p-2 sm:min-h-[300px]">
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          className="max-h-[420px] w-full rounded-lg object-contain"
                        />
                      </div>
                    </div>

                    {/* Future Gallery */}
                    {project.gallery && project.gallery.length > 0 && (
                      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {project.gallery.map((image) => (
                          <div
                            key={image}
                            className="aspect-video overflow-hidden rounded-xl border border-slate-200 bg-slate-100"
                          >
                            <img
                              src={image}
                              alt={`${project.title} screenshot`}
                              className="h-full w-full object-contain p-1"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <div className="mt-10">
                    <p className="section-label">Overview</p>

                    <p className="mt-4 text-sm leading-8 text-[#6b7280]">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mt-10">
                    <p className="section-label">Features</p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#3b82f6]" />

                            <span className="text-sm font-medium leading-6 text-[#10243e]">
                              {feature}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right */}
                <aside>
                  {/* Role */}
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf7fd] text-[#2563eb]">
                        <Layers3 size={18} />
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#6b7280]">
                          My Role
                        </p>

                        <p className="mt-1 text-sm font-semibold text-[#10243e]">
                          {project.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#6b7280]">
                      Technologies
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full bg-[#eaf7fd] px-3 py-1.5 text-[11px] font-semibold text-[#2563eb]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  {(project.github || project.demo) && (
                    <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#6b7280]">
                        Project Links
                      </p>

                      <div className="mt-4 flex flex-col gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-between rounded-xl bg-[#10243e] px-4 py-3 text-sm font-semibold !text-white shadow-sm transition hover:bg-[#1d4ed8] [&_*]:!text-white"
                          >
                            <span className="flex items-center gap-2">
                              <GitBranch size={16} />
                              View GitHub
                            </span>

                            <ArrowUpRight size={16} />
                          </a>
                        )}

                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-[#10243e] transition hover:border-[#3b82f6] hover:text-[#2563eb]"
                          >
                            <span className="flex items-center gap-2">
                              <ExternalLink size={16} />
                              Live Demo
                            </span>

                            <ArrowUpRight size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Number */}
                  <div className="mt-5 rounded-2xl bg-[#10243e] p-6 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#87ceeb]">
                      Selected Project
                    </p>

                    <p className="mt-3 font-heading text-3xl font-semibold">
                      {project.title}
                    </p>

                    <p className="mt-3 text-xs leading-6 text-white/60">
                      Project ini menjadi bagian dari perjalanan saya dalam
                      membangun solusi digital dan mengembangkan kemampuan
                      software development.
                    </p>
                  </div>
                </aside>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}