import Reveal from "./Reveal";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal y={18} duration={0.9}>
        <span
          className={`section-label ${
            centered ? "justify-center" : ""
          }`}
        >
          {eyebrow}
        </span>
      </Reveal>

      <Reveal y={24} delay={0.08} duration={1}>
        <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight text-[#10243e] md:text-5xl">
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal y={20} delay={0.16} duration={0.95}>
          <p className="mt-5 text-base leading-7 text-[#6b7280]">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}