import { useState } from "react";
import {
  ArrowUpRight,
  Award,
  ExternalLink,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import CertificateModal from "../components/ui/CertificateModal";
import { certificates } from "../data/certificates";
import type { Certificate } from "../types/certificate";

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  return (
    <section
      id="certificates"
      className="section-padding relative overflow-hidden bg-white"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[#f3ece8] blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Credentials"
            title="Certificates & Recognition"
            description="Beberapa sertifikasi dan pencapaian yang menjadi bagian dari perjalanan akademik dan profesional saya."
          />

          <div className="hidden max-w-xs text-right md:block">
            <p className="font-heading text-lg italic text-[#8b6e63]">
              Credentials reflect
              <br />
              continuous growth.
            </p>
          </div>
        </div>

        {/* Certificate Grid */}
        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <motion.article
              key={certificate.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
            >
              {/* Certificate Preview */}
              <button
                type="button"
                onClick={() => setSelectedCertificate(certificate)}
                className="relative block w-full cursor-pointer overflow-hidden bg-[#f8fafc] text-left"
                aria-label={`Lihat ${certificate.title}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* Certificate Image */}
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#10243e]/0 transition-all duration-300 group-hover:bg-[#10243e]/45">
                    <div className="flex h-12 w-12 scale-90 items-center justify-center rounded-full bg-white text-[#10243e] opacity-0 shadow-xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#10243e] shadow-sm backdrop-blur-md">
                    {certificate.year}
                  </div>
                </div>
              </button>

              {/* Certificate Content */}
              <div className="p-6">
                {/* Issuer */}
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#f3ece8] text-[#8b6e63]">
                    <Award size={15} />
                  </div>

                  <p className="text-[11px] font-semibold uppercase tracking-wide text-[#8b6e63]">
                    {certificate.issuer}
                  </p>
                </div>

                {/* Title */}
                <h3 className="mt-4 font-heading text-xl font-semibold leading-snug text-[#10243e]">
                  {certificate.title}
                </h3>

                {/* Description */}
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#6b7280]">
                  {certificate.description}
                </p>

                {/* Credential */}
                {certificate.credentialId && (
                  <div className="mt-5 rounded-2xl bg-slate-50 px-4 py-3">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Credential / Registration
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#10243e]">
                      {certificate.credentialId}
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {/* View Details */}
                  <button
                    type="button"
                    onClick={() => setSelectedCertificate(certificate)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#10243e] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#3b82f6]"
                  >
                    View Certificate
                    <ArrowUpRight size={13} />
                  </button>

                  {/* PDF */}
                  {certificate.documentUrl && (
                    <a
                      href={certificate.documentUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-xs font-semibold text-[#10243e] transition hover:border-[#10243e] hover:bg-slate-50"
                    >
                      <FileText size={13} />
                      PDF
                    </a>
                  )}

                  {/* Credential URL */}
                  {certificate.credentialUrl && (
                    <a
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-xs font-semibold text-[#10243e] transition hover:border-[#3b82f6] hover:text-[#2563eb]"
                    >
                      <ExternalLink size={13} />
                      Verify
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Empty State */}
        {certificates.length === 0 && (
          <div className="mt-14 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
            <Award
              size={32}
              className="mx-auto text-slate-400"
            />

            <p className="mt-4 text-sm font-medium text-slate-500">
              Certificate data will be added soon.
            </p>
          </div>
        )}

        {/* Certificate Modal */}
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      </div>
    </section>
  );
}