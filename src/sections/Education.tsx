import {
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import { education } from "../data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="section-padding relative overflow-hidden bg-[#f8fafc]"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#eaf7fd] blur-3xl" />

      <div className="container-custom relative">
        <SectionTitle
          eyebrow="Education"
          title="Learning Is Part of the Journey"
          description="Pendidikan menjadi fondasi dalam membangun pemahaman saya terhadap teknologi, sistem informasi, dan proses pengembangan solusi digital."
        />

        <div className="relative mt-14">
          {/* Timeline Line */}
          <div className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-slate-200 md:block" />

          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="relative md:pl-14"
              >
                {/* Timeline Icon */}
                <div className="absolute left-0 top-0 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#f8fafc] bg-[#10243e] text-white shadow-md md:flex">
                  <GraduationCap size={16} />
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 md:p-8">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-[#eaf7fd] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#2563eb]">
                          {item.period}
                        </span>

                        <span className="text-xs font-medium text-[#8b6e63]">
                          {item.status}
                        </span>
                      </div>

                      <h3 className="mt-4 font-heading text-2xl font-semibold text-[#10243e] md:text-3xl">
                        {item.institution}
                      </h3>

                      <p className="mt-2 text-sm font-semibold text-[#2563eb]">
                        {item.program}
                      </p>
                    </div>

                   <div className="flex h-30 w-30 shrink-0 items-center justify-center rounded-2xl bg-white p-2 shadow-sm ring-1 ring-slate-200">
  <img
    src="/images/education/ubsi-logo.png"
    alt="Logo Universitas Bina Sarana Informatika"
    className="h-full w-full object-contain"
  />
</div>
                  </div>

                  <p className="mt-6 max-w-3xl text-sm leading-7 text-[#6b7280]">
                    {item.description}
                  </p>

                  {item.highlights && item.highlights.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] font-medium text-slate-600"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}

   <a
  href="https://bsi.ac.id/"
  target="_blank"
  rel="noreferrer"
  className="mt-7 inline-flex w-fit items-center gap-2 text-xs font-semibold text-[#10243e] transition-colors hover:text-[#2563eb]"
>
  Visit University Website
  <ArrowUpRight
    size={14}
    className="text-[#3b82f6] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
  />
</a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}