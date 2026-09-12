import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden bg-[#10243e]"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#3b82f6]/20 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#87ceeb]/10 blur-3xl" />

      <div className="container-custom relative">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="section-label !text-[#87ceeb]">
            Let's Connect
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-5 font-heading text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            Have an idea?
            <br />
            <span className="text-[#87ceeb]">
              Let's turn it into impact.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 md:text-base"
          >
            Saya terbuka untuk kesempatan magang, project
            collaboration, maupun diskusi seputar IT Project
            Management, System Analysis, dan Software Development.
          </motion.p>
        </div>

        {/* Contact Content */}
        <div className="mt-14 grid gap-7 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm md:p-9"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#87ceeb]">
              Start a conversation
            </p>

            <h3 className="mt-4 font-heading text-2xl font-semibold text-white md:text-3xl">
              Let's build something meaningful.
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
              Jika kamu sedang mencari seseorang yang memiliki
              ketertarikan pada project management, system analysis,
              maupun software development, saya dengan senang hati
              terbuka untuk berdiskusi.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
             <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=xitlas105arjunsujarwo@gmail.com"
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold text-[#10243e] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#87ceeb] hover:shadow-lg"
>
  Send an Email
  <ArrowUpRight size={14} />
</a>
              <a
                href="https://wa.me/62895384796125"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#260] px-5 py-3 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[#87ceeb] hover:text-[#87ceeb]"
              >
                WhatsApp
                <MessageCircle size={14} />
              </a>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="rounded-3xl bg-white p-7 shadow-2xl md:p-9"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8b6e63]">
              Contact Information
            </p>

            <div className="mt-7 space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#eaf7fd] text-[#3b82f6]">
                  <Mail size={18} />
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#10243e]">
                    xitlas105arjunsujarwo@gmail.com
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f3ece8] text-[#8b6e63]">
                  <MessageCircle size={18} />
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#10243e]">
                    +62895384796125
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-[#10243e]">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#10243e]">
                    Depok, Jawa Barat, Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />

                <p className="text-xs font-semibold text-[#10243e]">
                  Open to opportunities
                </p>
              </div>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Internship, collaboration, and entry-level
                opportunities, Contract.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}