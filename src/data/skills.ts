export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Project Management",
    description:
      "Kemampuan mengelola proses, koordinasi tim, komunikasi, dan dokumentasi project.",
    skills: [
      "Project Planning",
      "Task Management",
      "Team Coordination",
      "Team Leadership",
      "Documentation",
      "Communication",
      "Problem Solving",
    ],
  },

  {
    title: "System Analysis",
    description:
      "Memahami kebutuhan pengguna dan menerjemahkannya menjadi rancangan sistem.",
    skills: [
      "Requirement Analysis",
      "Use Case",
      "Activity Diagram",
      "Flowchart",
      "UML",
      "ERD",
      "System Design",
      "Database Design",
      "Draw Io",
    ],
  },

  {
    title: "Software Development",
    description:
      "Membangun aplikasi dan memahami proses pengembangan software dari konsep hingga implementasi.",
    skills: [
      "Flutter",
      "Dart",
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "OOP",
      "REST API",
      "Laravel",
      "Tailwind",
      "Bootstrap",
      "Ms. Visual Studio Community",
      "Android Studio",
    ],
  },

  {
    title: "Database & Tools",
    description:
      "Menggunakan berbagai database dan development tools untuk mendukung proses pengembangan.",
    skills: [
      "MySQL",
      "PostgreSQL",
      "SQLite",
      "Supabase",
      "Firebase",
      "Git",
      "GitHub",
      "VS Code",
      "DBeaver",
      "Postman",
      "Figma",
    ],
  },
];