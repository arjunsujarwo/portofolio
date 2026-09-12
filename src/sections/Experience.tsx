import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
} from "lucide-react";

import SectionTitle from "../components/ui/SectionTitle";
import { experiences } from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <SectionTitle
          eyebrow="Experience"
          title="Professional Journey"
          description="Pengalaman yang membentuk cara saya bekerja, memecahkan masalah, berkolaborasi, dan mengelola project."
        />

        <div className="relative mt-16">
          {/* Timeline Line */}
          <div className="absolute left-[19px] top-0 hidden h-full w-px bg-slate-200 md:block" />

          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="relative md:pl-16"
              >
                {/* Timeline Icon */}
                <div className="absolute left-0 top-0 hidden md:flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-[#f3ece8] text-[#8b6e63] shadow-sm ring-1 ring-slate-200">
                    <BriefcaseBusiness size={17} />
                  </div>
                </div>

                {/* Experience Card */}
                <div className="soft-card rounded-3xl p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="mb-3 inline-flex rounded-full bg-[#eaf7fd] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#2563eb]">
                        {experience.period}
                      </div>

                      <h3 className="font-heading text-2xl font-semibold leading-tight text-[#10243e] md:text-3xl">
                        {experience.position}
                      </h3>

                      <p className="mt-2 text-sm font-semibold text-[#8b6e63]">
                        {experience.company}
                      </p>
                    </div>

                    <span className="w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500">
                      {experience.type}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-600">
                    {experience.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mt-7">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[#10243e]">
                      Responsibilities
                    </p>

                    <div className="grid gap-3 md:grid-cols-2">
                      {experience.responsibilities.map(
                        (responsibility, responsibilityIndex) => (
                          <div
                            key={`${experience.id}-${responsibilityIndex}`}
                            className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4"
                          >
                            <CheckCircle2
                              size={17}
                              className="mt-0.5 shrink-0 text-[#3b82f6]"
                            />

                            <p className="text-sm leading-6 text-slate-600">
                              {responsibility}
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Special Project / Highlight */}
                  {experience.id === "experience-04" && (
                    <div className="mt-7 rounded-2xl border border-[#e7ddd7] bg-[#f9f5f2] p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8b6e63]">
                        Project
                      </p>

                      <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h4 className="font-heading text-lg font-semibold text-[#10243e]">
                            Smart Eco Bank
                          </h4>

                          <p className="mt-1 text-sm text-slate-600">
                            Program Komputer — HKI
                          </p>
                        </div>

                       <a
  href="https://hakcipta.dgip.go.id/legal/c/MDAxMzkxNDY3"
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-[#10243e] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#3b82f6] hover:text-[#2563eb] hover:shadow-md"
>
HKI • 001389342
  <ArrowUpRight size={14} />
</a>
                      </div>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;