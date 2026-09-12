import {
  ArrowUpRight,
  GitBranch,
  Link,
  Mail,
  MessageCircle,
} from "lucide-react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arjunsujarwo",
    icon: Link,
  },
  {
    label: "GitHub",
    href: "https://github.com/arjunsujarwo",
    icon: GitBranch,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/arjunsujarwo30",
    icon: Link,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/62895384796125",
    icon: MessageCircle,
  },
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=xitlas105arjunsujarwo@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#10243e] text-white">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-[1.3fr_0.7fr_0.7fr] md:py-20">
          {/* Brand */}
          <div><div className="flex h-20 w-20 items-center justify-center rounded-xl bg-[#10243e] text-white">
                <img
                  src="/images/profile/logo.png"
                  alt="Arjun Sujarwo"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            <a
              href="#home"
              className="inline-flex items-center gap-3"
              aria-label="Arjun Sujarwo Home"
            >
           

              <span className="font-heading text-xl font-semibold">
                Arjun Sujarwo
              </span>
            </a>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-300">
              IT Project Manager, System Analyst, dan Software Developer
              yang tertarik membangun solusi digital melalui kombinasi
              analisis, teknologi, dan kolaborasi.
            </p>

            <p className="mt-6 font-heading text-lg italic text-[#87ceeb]">
              Turning ideas into impact.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#87ceeb]">
              Navigation
            </p>

            <nav className="mt-6 flex flex-col gap-3">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="w-fit text-sm text-slate-300 transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#87ceeb]">
              Connect
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noreferrer"
                        : undefined
                    }
                    className="group flex w-fit items-center gap-3 text-sm text-slate-300 transition-colors duration-200 hover:text-white"
                  >
                    <Icon
                      size={16}
                      className="transition-transform duration-200 group-hover:-translate-y-0.5"
                    />

                    <span>{social.label}</span>

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {currentYear} Arjun Sujarwo. All rights reserved.
          </p>

          
        </div>
      </div>
    </footer>
  );
}