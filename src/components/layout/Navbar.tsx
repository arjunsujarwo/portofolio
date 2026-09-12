import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-custom pt-4">
        <nav className="rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 shadow-lg shadow-slate-900/5 backdrop-blur-md md:px-5">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <a
              href="#home"
              onClick={closeMenu}
              className="flex items-center gap-3"
            >
              <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-white text-white">
                <img
                  src="/images/profile/logo.png"
                  alt="Arjun Sujarwo"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="hidden leading-none sm:block">
                <p className="font-heading text-lg font-semibold text-[#10243e]">
                  Arjun Sujarwo
                </p>

                <p className="mt-1 text-[10px] font-medium tracking-wide text-[#6b7280]">
                  BUILD IDEAS INTO REAL SOLUTIONS
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-6 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs font-medium text-slate-600 transition-colors duration-200 hover:text-[#2563eb]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-2 md:flex">
              <a
                href="/cv/Arjun-Sujarwo-CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-200 px-4 py-2.5 text-xs font-semibold text-[#10243e] transition hover:border-[#87ceeb] hover:bg-[#eaf7fd]"
              >
                Download CV
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1 rounded-full bg-[#3b82f6] px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-blue-500/20 transition hover:bg-[#2563eb]"
              >
                Hire Me
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-[#10243e] transition hover:bg-slate-50 md:hidden"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="mt-4 border-t border-slate-100 pt-4 md:hidden">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-[#eaf7fd] hover:text-[#2563eb]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href="/cv/Arjun-Sujarwo-CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-[#10243e]"
                >
                  Download CV
                </a>

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="rounded-xl bg-[#3b82f6] px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Hire Me
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}