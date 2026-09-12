import { ArrowUpRight, BriefcaseBusiness, GraduationCap, Users } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";

const highlights = [
  {
    icon: BriefcaseBusiness,
    title: "Professional Experience",
    description:
      "Memiliki pengalaman kerja selama beberapa tahun yang membentuk kedisiplinan, tanggung jawab, komunikasi, dan kemampuan bekerja dalam tim.",
  },
  {
    icon: GraduationCap,
    title: "Information Systems",
    description:
      "Mempelajari analisis sistem, database, pemrograman, pengembangan aplikasi, serta proses membangun solusi digital.",
  },
  {
    icon: Users,
    title: "Teaching & Mentoring",
    description:
      "Berpengalaman mendampingi siswa dalam pembelajaran pemrograman dan project pengembangan aplikasi menggunakan Flutter.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden bg-white"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-[#eaf7fd] blur-3xl" />

      <div className="container-custom relative">
        {/* Section Heading */}
        <SectionTitle
          eyebrow="About Me"
          title="More Than Just a Student"
          description="Perjalanan saya dibangun dari pengalaman kerja, pendidikan, project teknologi, dan kesempatan untuk berbagi ilmu."
        />

        {/* Main About */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-md"
          >
            {/* Main image container */}
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#eaf7fd] p-3 shadow-xl shadow-slate-900/10">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-[#dff3fb] to-[#9fcfe1]">
                {/* Temporary visual */}
                <div className="absolute inset-0 flex items-center justify-center">
               
                </div>

                {/* Actual image — aktifkan setelah foto tersedia */}
                {
                <img
                  src="/images/profile/about.png"
                  alt="Arjun Sujarwo"
                  className="h-full w-full object-cover object-top"
                />
                }

                {/* Bottom overlay */}
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-lg backdrop-blur-md">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
                    Currently
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#10243e]">
                    Learning • Building • Growing
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative card */}
            <div className="absolute -bottom-6 -right-5 hidden rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl md:block">
              <p className="font-heading text-2xl font-semibold text-[#10243e]">
                4+
              </p>

              <p className="mt-1 text-xs text-[#6b7280]">
                Years Work Experience
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-base leading-8 text-[#6b7280]">
              Saya adalah mahasiswa Sistem Informasi yang memiliki ketertarikan
              pada bagaimana teknologi dapat digunakan untuk menyelesaikan
              masalah nyata dan menghasilkan proses yang lebih baik.
            </p>

            <p className="mt-5 text-base leading-8 text-[#6b7280]">
              Sebelum fokus pada dunia teknologi, saya mendapatkan pengalaman
              kerja di lingkungan non-IT. Pengalaman tersebut mengajarkan saya
              tentang disiplin, tanggung jawab, komunikasi, kerja sama tim,
              kemampuan beradaptasi, serta pentingnya menyelesaikan pekerjaan
              dengan baik.
            </p>

            <p className="mt-5 text-base leading-8 text-[#6b7280]">
              Saat menempuh pendidikan Sistem Informasi, saya mulai
              memperdalam software development, system analysis, database,
              project management, dan pengembangan aplikasi. Saya juga
              mendapatkan kesempatan untuk mengajar dan membimbing siswa dalam
              project Rekayasa Perangkat Lunak.
            </p>

            {/* Quote */}
            <div className="relative mt-8 overflow-hidden rounded-2xl bg-[#eaf7fd] p-6 md:p-7">
              <div className="absolute left-0 top-0 h-full w-1 bg-[#3b82f6]" />

              <p className="font-heading text-lg italic leading-8 text-[#10243e]">
                "Terus belajar, terus berkembang, dan memberikan dampak
                positif melalui teknologi."
              </p>

              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#6b7280]">
                — Arjun Sujarwo
              </p>
            </div>

            {/* CTA */}
            <div className="mt-7">
              <a
                href="#experience"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb]"
              >
                Lihat perjalanan saya

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#3b82f6] shadow-sm transition-colors group-hover:bg-[#3b82f6] group-hover:text-white">
                  <Icon size={20} />
                </div>

                <h3 className="mt-5 font-heading text-lg font-semibold text-[#10243e]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6b7280]">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}