import { profile } from '@/data/projects';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="max-w-content mx-auto px-6 md:px-10 pt-20 pb-16 md:pt-28 md:pb-24">
        <p className="eyebrow mb-6">{profile.location} · Available for internships & collaborations</p>

        <h1 className="font-display font-semibold text-[13vw] leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
          {profile.name}
        </h1>

        <p className="font-display font-medium text-2xl md:text-4xl mt-4 text-ink-soft">
          {profile.role}
        </p>

        <p className="font-body text-lg md:text-xl text-muted max-w-2xl mt-6 leading-relaxed">
          I turn AI models into working products — pipelines that actually
          hold together, on real devices, under real constraints.
        </p>

        {/* Signature element: a waveform trace that draws itself in, echoing
            the STT → Chat → TTS and RAG pipelines this portfolio is about. */}
        <div className="mt-10 md:mt-14" aria-hidden="true">
          <svg
            viewBox="0 0 600 60"
            className="w-full max-w-xl h-12 text-signal"
            fill="none"
          >
            <path
              d="M0 30 L40 30 L55 8 L75 52 L95 16 L115 44 L135 30 L175 30 L190 12 L210 48 L230 30 L600 30"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="400"
              className="motion-safe:animate-traceDraw"
            />
          </svg>
        </div>

        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href="#work"
            className="font-display font-medium px-6 py-3 bg-ink text-paper rounded-sm hover:bg-ink-soft transition-colors"
          >
            View the work
          </a>
          <a
            href="#contact"
            className="font-display font-medium px-6 py-3 border border-ink rounded-sm hover:bg-ink hover:text-paper transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
