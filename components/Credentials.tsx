import { certifications } from '@/data/projects';

export default function Credentials() {
  if (certifications.length === 0) return null;

  return (
    <section className="border-b border-line">
      <div className="max-w-content mx-auto px-6 md:px-10 py-10 flex flex-wrap items-center gap-4">
        <p className="eyebrow">Credentials</p>
        {certifications.map((cert) => (
          <span
            key={cert.name}
            className="font-mono text-xs border border-line rounded-full px-4 py-1.5 text-muted"
          >
            {cert.name} — {cert.issuer} · {cert.date}
          </span>
        ))}
      </div>
    </section>
  );
}
