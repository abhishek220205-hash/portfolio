import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-28 md:py-40 text-center">
      <p className="eyebrow mb-6">404 · Signal lost</p>
      <h1 className="font-display font-semibold text-4xl md:text-6xl tracking-tight">
        Nothing came back on this route.
      </h1>
      <p className="font-body text-lg text-muted max-w-md mx-auto mt-6 leading-relaxed">
        The pipeline for this page didn't return a result. It's not you —
        the page just isn't here.
      </p>

      <svg viewBox="0 0 400 40" className="w-full max-w-xs h-10 text-line mx-auto mt-10" aria-hidden="true">
        <path
          d="M0 20 L150 20 L165 5 L180 35 L195 20 L400 20"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="6 6"
        />
      </svg>

      <Link
        href="/"
        className="inline-block font-display font-medium px-6 py-3 mt-10 bg-ink text-paper rounded-sm hover:bg-ink-soft transition-colors"
      >
        Back to the homepage
      </Link>
    </section>
  );
}
