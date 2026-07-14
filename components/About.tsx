import { profile } from '@/data/projects';

export default function About() {
  return (
    <section id="about" className="border-b border-line scroll-mt-16">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-[1.3fr_1fr] gap-12 md:gap-16">
        <div>
          <p className="eyebrow mb-4">About</p>
          <p className="font-body text-2xl md:text-3xl leading-snug text-ink-soft">
            {profile.bio}
          </p>
        </div>

        <div className="border border-line rounded-sm p-6 h-fit bg-ink text-paper font-mono text-sm">
          <p className="text-muted-dark mb-4">// currently</p>
          <dl className="space-y-4">
            <div>
              <dt className="text-signal-soft">institution</dt>
              <dd className="mt-1">{profile.education.institution}</dd>
            </div>
            <div>
              <dt className="text-signal-soft">degree</dt>
              <dd className="mt-1">{profile.education.degree}</dd>
            </div>
            <div>
              <dt className="text-signal-soft">timeline</dt>
              <dd className="mt-1">{profile.education.years}</dd>
            </div>
            <div>
              <dt className="text-signal-soft">status</dt>
              <dd className="mt-1">Juggling two hackathon builds in parallel, most weeks</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
