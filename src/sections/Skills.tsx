import {
  BarChart3,
  Database,
  FileSearch,
  Code2,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import { skillCategories } from "../data/skills";

const icons = [BarChart3, FileSearch, Code2, Database];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden bg-white"
    >
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-[#eaf7fd] blur-3xl" />

      <div className="container-custom relative">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Skills"
            title="Tools & Technologies"
            description="Teknologi adalah alat. Kemampuan memahami masalah dan menemukan solusi adalah bagian yang terus saya kembangkan."
          />

          <div className="hidden max-w-xs text-right md:block">
            <p className="font-heading text-lg italic text-[#8b6e63]">
              Learn continuously.
              <br />
              Build intentionally.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = icons[index];

            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group rounded-3xl border border-slate-200 bg-[#f8fafc] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5 md:p-7"
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#3b82f6] shadow-sm transition-all duration-300 group-hover:bg-[#10243e] group-hover:text-white">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#3b82f6]"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 font-heading text-xl font-semibold text-[#10243e]">
                  {category.title}
                </h3>

                <p className="mt-2 max-w-lg text-sm leading-6 text-[#6b7280]">
                  {category.description}
                </p>

                {/* Skills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.25,
                        delay: index * 0.05 + skillIndex * 0.025,
                      }}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors duration-200 hover:border-[#87ceeb] hover:bg-[#eaf7fd] hover:text-[#2563eb]"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 rounded-3xl bg-[#10243e] p-7 md:p-9"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#87ceeb]">
                How I Work
              </p>

              <h3 className="mt-2 font-heading text-2xl font-semibold text-white md:text-3xl">
                Understand → Analyze → Build → Improve
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-white/60">
              Saya berusaha memahami masalah terlebih dahulu sebelum menentukan
              solusi, kemudian mengubahnya menjadi sistem yang dapat
              digunakan dan dikembangkan.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}