import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function Stats() {
  return (
    <section className="pb-24">
      <div className="container-custom">
        <div className="rounded-3xl bg-[#10243e] px-6 py-8 shadow-xl shadow-slate-900/10 md:px-10 md:py-10">
          <div className="grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
            {profile.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`px-4 text-center ${
                  index >= 2 ? "mt-8 md:mt-0" : ""
                }`}
              >
                <p className="font-heading text-3xl font-semibold text-white md:text-4xl">
                  {stat.value}
                </p>

                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-[#87ceeb] md:text-sm">
                  {stat.label}
                </p>

                <p className="mt-1 text-[11px] text-white/50 md:text-xs">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}