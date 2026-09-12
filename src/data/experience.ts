export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    id: "experience-01",
    company: "PT. Lucky Indah Keramik",
    position: "Operator Maintenance",
    period: "Oktober 2023 — Juli 2026",
    type: "Full Time",
    description:
      "Menangani kebutuhan maintenance dan permasalahan mesin produksi, termasuk pembuatan konstruksi mesin, troubleshooting, serta analisis kebutuhan user untuk mendukung proses produksi.",
    responsibilities: [
      "Membuat konstruksi mesin produksi piring sesuai dengan kebutuhan dan kondisi operasional.",
      "Menangani kerusakan dan error pada mesin produksi melalui proses troubleshooting.",
      "Melakukan wawancara dengan user untuk memahami kebutuhan dan permasalahan pada mesin.",
      "Menganalisis permasalahan dan menentukan solusi teknis yang sesuai dengan kebutuhan user.",
      "Memastikan mesin dapat berfungsi dengan baik dan mendukung kelancaran proses produksi.",
    ],
  },
  {
    id: "experience-02",
    company: "PT. Andalan Arthalestari",
    position: "Staff CPC",
    period: "Januari 2022 — Juni 2023",
    type: "Full Time",
    description:
      "Menangani proses pengelolaan dan pemrosesan uang tunai dengan memastikan proses sortir, distribusi, serta kesiapan perangkat pendukung berjalan sesuai prosedur operasional.",
    responsibilities: [
      "Melakukan sortir uang tunai berdasarkan kategori UTLE, ULE, mutilasi, dan uang yang terindikasi palsu.",
      "Memproses uang tunai dari Bank Indonesia untuk kebutuhan pengiriman ke bank cabang dan ATM, serta proses sebaliknya.",
      "Memeriksa dan memastikan cartridge dapat berfungsi secara normal sebelum digunakan.",
      "Menjaga ketelitian dan akurasi dalam proses pengelolaan uang tunai.",
      "Menjalankan pekerjaan sesuai prosedur operasional dan standar keamanan yang berlaku.",
    ],
  },
  {
    id: "experience-03",
    company: "SMKN 20 Jakarta",
    position: "Guru RPL — Internship",
    period: "Juli 2026 — September 2026",
    type: "Teaching Internship",
    description:
      "Melaksanakan kegiatan magang mengajar pada bidang Rekayasa Perangkat Lunak (RPL) untuk kelas XI dan XII dengan fokus pada pemrograman berorientasi objek serta pengembangan aplikasi desktop dan mobile menggunakan Flutter.",
    responsibilities: [
      "Menyusun materi pembelajaran dan mempresentasikan materi di depan siswa layaknya kegiatan pembelajaran guru.",
      "Mengajarkan konsep Pemrograman Berorientasi Objek (PBO) serta pemrograman aplikasi desktop dan mobile menggunakan Flutter.",
      "Menyusun tugas praktik dan memastikan siswa memahami serta menyelesaikan tugas yang diberikan.",
      "Membimbing siswa dalam proses pengembangan project akhir secara berkelompok.",
      "Membimbing siswa menyiapkan output project berupa APK, EXE, laporan, user manual book, PPT, presentasi, GitHub, dan LinkedIn.",
      "Memberikan arahan dan troubleshooting selama proses pengerjaan project siswa.",
    ],
  },
  {
    id: "experience-04",
    company: "IT Bootcamp UBSI 2026 Batch 3",
    position: "Project Manager / Team Leader",
    period: "Mei 2026",
    type: "IT Bootcamp",
    description:
      "Memimpin tim dalam pengembangan software Smart Eco Bank, mulai dari pengumpulan kebutuhan, pembagian pekerjaan, koordinasi tim, dokumentasi, hingga presentasi dan pengurusan dokumen pendukung HKI.",
    responsibilities: [
      "Memimpin tim dalam mengerjakan project berdasarkan kebutuhan yang telah dikumpulkan.",
      "Mengumpulkan dan menganalisis kebutuhan project dari dosen pembimbing sebagai dasar pengembangan software.",
      "Membagi task kepada anggota tim sesuai dengan kebutuhan dan tanggung jawab masing-masing.",
      "Memantau progress pekerjaan dan memastikan setiap anggota menyelesaikan bagian yang telah diberikan.",
      "Menyusun laporan dan materi presentasi project bersama tim.",
      "Memimpin tim dalam melakukan presentasi hasil project.",
      "Mengurus dokumen pendukung untuk proses pengajuan Hak Kekayaan Intelektual (HKI).",
    ],
  },
];