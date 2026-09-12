import {
  Award,
  ExternalLink,
  X,
} from "lucide-react";
import type { Certificate } from "../../types/certificate";

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export default function CertificateModal({
  certificate,
  onClose,
}: CertificateModalProps) {
  if (!certificate) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#10243e]/70 p-4 backdrop-blur-md"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl md:p-8">
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close certificate"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#10243e] transition hover:bg-[#10243e] hover:text-white"
        >
          <X size={18} />
        </button>

        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          {/* Certificate Preview */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#eaf7fd] p-4">
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white">
              {certificate.image ? (
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  className="h-full w-full object-contain"
                />
              ) : (
                <div className="text-center">
                  <Award
                    size={48}
                    className="mx-auto text-[#3b82f6]"
                    strokeWidth={1.5}
                  />

                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#8b6e63]">
                    Certificate Preview
                  </p>

                  <h3 className="mt-3 max-w-md font-heading text-2xl font-semibold text-[#10243e]">
                    {certificate.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-500">
                    {certificate.issuer}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Information */}
          <div className="flex flex-col justify-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2563eb]">
              {certificate.year}
            </p>

            <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-[#10243e]">
              {certificate.title}
            </h2>

            <p className="mt-4 text-sm font-medium text-[#8b6e63]">
              {certificate.issuer}
            </p>

            <p className="mt-5 text-sm leading-7 text-[#6b7280]">
              {certificate.description}
            </p>

            {certificate.credentialId && (
              <div className="mt-6 rounded-xl bg-slate-50 p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Credential ID
                </p>

                <p className="mt-2 break-all text-xs font-semibold text-[#10243e]">
                  {certificate.credentialId}
                </p>
              </div>
            )}

            {certificate.credentialUrl && (
  <a
    href={certificate.credentialUrl}
    target="_blank"
    rel="noreferrer"
    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-xs font-semibold text-[#10243e] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#3b82f6] hover:bg-[#f8fafc] hover:text-[#2563eb] hover:shadow-md"
  >
    Verify Certificate
    <ExternalLink size={14} />
  </a>
)}
          </div>
        </div>
      </div>
    </div>
  );
}