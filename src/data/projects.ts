import type { Project } from "../types/project";

export const projects: Project[] = [
 {
  id: "smart-eco-bank",
  title: "Smart Eco Bank",
  category: "Web Application",
  year: "2026",

  shortDescription:
    "Platform pengelolaan sampah berbasis Artificial Intelligence untuk mendukung digitalisasi bank sampah, circular economy, dan SDGs 12.",

  description:
    "Smart Eco Bank (SEWB) merupakan platform pengelolaan sampah berbasis web yang dikembangkan untuk membantu proses pengelolaan sampah secara lebih efektif, terstruktur, dan berbasis teknologi.",

  role: "Project Manager / Team Leader",

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Laravel",
    "PHP",
    "MySQL / MariaDB",
    "MapLibre GL",
    "QR Code",
    "Laravel Reverb",
    "Laravel Echo",
    "Pusher",
  ],

  features: [
    "AI Waste Classification",
    "Digital Waste Transaction",
    "Bank Sampah Location Finder",
    "QR Code Verification",
    "Point & Reward System",
    "Real-time Notification",
    "User & Admin Chat",
    "Admin Dashboard",
  ],

  image: "/images/projects/project-01/smart-eco-bank-cover.png",

  gallery: [
    "/images/projects/project-01/smart-eco-bank-01.png",
    "/images/projects/project-01/smart-eco-bank-02.png",
    "/images/projects/project-01/smart-eco-bank-03.png",
  ],

 hkiNumber: "001389342",
hkiApplicationNumber: "EC002026130592",
hkiUrl: "/documents/hki/smart-eco-bank-hki.pdf",

  github: "",
  demo: "",
 },
{
    id: "pos-umkm-offline",
    title: "POS UMKM Offline",
    category: "Desktop & Mobile Application",
    year: "2026",
    shortDescription:
      "Aplikasi kasir offline untuk membantu UMKM mengelola produk, stok, transaksi, pembayaran, laporan, dan cetak struk.",
    description:
      "POS UMKM Offline adalah aplikasi Point of Sale berbasis Flutter yang dirancang agar operasional toko tetap berjalan tanpa koneksi internet. Data transaksi tersimpan lokal di perangkat, dengan alur kasir yang responsif untuk Windows, Android phone, dan tablet.",
    role: "Full-stack Developer",
    technologies: [
      "Flutter",
      "Dart",
      "Provider",
      "SQLite",
      "QRIS",
      "PDF & Printing",
      "Excel Export",
    ],
    features: [
      "Dashboard penjualan dan produk terlaris",
      "Katalog produk, kategori, foto, dan stok",
      "Pembayaran tunai, QRIS, dan multi-rekening bank",
      "Detail transaksi dan cetak ulang struk",
      "Laporan penjualan Excel",
      "Backup dan restore database lokal",
      "Responsive navigation untuk desktop dan mobile",
    ],
    image: "/images/projects/project-02/pos-umkm-dashboard.png",
    gallery: [
      "/images/projects/project-02/pos-umkm-dashboard.png",
      "/images/projects/project-02/pos-umkm-logo.png",
    ],
    github: "https://github.com/arjunsujarwo/pos-umkm-offline-flutter",
    demo:
      "https://github.com/arjunsujarwo/pos-umkm-offline-flutter/releases/latest",
  },
];