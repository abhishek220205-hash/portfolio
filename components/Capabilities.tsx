import { profile } from '@/data/projects';

export default function Capabilities() {
  return (
    <section id="capabilities" className="border-b border-line scroll-mt-16">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
        <p className="eyebrow mb-4">How I build</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight mb-14 md:mb-20 max-w-2xl">
          Not a skills list — the actual method behind both builds.
        </h2>

        <div className="grid sm:grid-cols-2 gap-px bg-line border border-line rounded-sm overflow-hidden">
          {profile.workingStyle.map((item) => (
            <div key={item.label} className="bg-paper p-8">
              <p className="font-display font-semibold text-xl mb-3">{item.label}</p>
              <p className="font-body text-muted leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
