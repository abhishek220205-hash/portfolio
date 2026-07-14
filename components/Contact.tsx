'use client';

import { useState } from 'react';
import { profile } from '@/data/projects';

type CopyState = 'idle' | 'copied' | 'error';

export default function Contact() {
  const [copyState, setCopyState] = useState<CopyState>('idle');

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState('copied');
    } catch {
      setCopyState('error');
    } finally {
      setTimeout(() => setCopyState('idle'), 2500);
    }
  }

  return (
    <section id="contact" className="scroll-mt-16">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
        <p className="eyebrow mb-4">Contact</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight max-w-2xl">
          Building something in AI? I'd like to hear about it.
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href={`mailto:${profile.email}`}
            className="font-display font-medium px-6 py-3 bg-ink text-paper rounded-sm hover:bg-ink-soft transition-colors text-center"
          >
            Email {profile.name.split(' ')[0]}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-display font-medium px-6 py-3 border border-ink rounded-sm hover:bg-ink hover:text-paper transition-colors text-center"
          >
            Connect on LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="font-display font-medium px-6 py-3 border border-ink rounded-sm hover:bg-ink hover:text-paper transition-colors text-center"
          >
            See the code on GitHub
          </a>
        </div>

        <div className="mt-8 flex items-center gap-4 font-mono text-sm text-muted">
          <span>{profile.email}</span>
          <button
            type="button"
            onClick={handleCopy}
            className="border border-line rounded-sm px-3 py-1.5 hover:border-ink hover:text-ink transition-colors"
            aria-live="polite"
          >
            {copyState === 'idle' && 'Copy email'}
            {copyState === 'copied' && 'Copied ✓'}
            {copyState === 'error' && 'Couldn\u2019t copy \u2014 email is listed above'}
          </button>
        </div>
      </div>
    </section>
  );
}
