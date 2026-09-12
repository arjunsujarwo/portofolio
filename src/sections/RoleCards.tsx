import {
  BarChart3,
  Code2,
  FileSearch,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";

const icons = {
  project: BarChart3,
  analysis: FileSearch,
  code: Code2,
};

export default function RoleCards() {
  return (
    <section className="relative -mt-2 pb-20">
      <div className="container-custom">
        <div className="grid gap-4 md:grid-cols-3">
          {profile.roles.map((role, index) => {
            const Icon =
              icons[role.icon as keyof typeof icons];

            return (
              <motion.article
                key={role.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group soft-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10243e] text-white transition-colors duration-300 group-hover:bg-[#3b82f6]">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#3b82f6]"
                  />
                </div>

                <h3 className="mt-6 font-heading text-xl font-semibold text-[#10243e]">
                  {role.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6b7280]">
                  {role.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}