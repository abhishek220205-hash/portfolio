import Link from 'next/link';
import { projects } from '@/data/projects';
import PipelineDiagram from './PipelineDiagram';

export default function Projects() {
  return (
    <section id="work" className="border-b border-line scroll-mt-16">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
        <p className="eyebrow mb-4">Selected work</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight mb-14 md:mb-20">
          Two builds, two working pipelines.
        </h2>

        <div className="flex flex-col gap-20 md:gap-28">
          {projects.map((project) => (
            <article key={project.slug} className="grid md:grid-cols-[1fr_1fr] gap-8 md:gap-14 items-start">
              <div>
                <p className="eyebrow mb-3">{project.status} · {project.year}</p>
                <h3 className="font-display font-semibold text-2xl md:text-4xl tracking-tight">
                  {project.name}
                </h3>
                <p className="font-body text-lg text-muted mt-3 leading-relaxed">
                  {project.tagline}
                </p>

                <ul className="flex flex-wrap gap-2 mt-6" aria-label="Stack">
                  {project.stack.map((s) => (
                    <li
                      key={s}
                      className="font-mono text-xs border border-line rounded-full px-3 py-1 text-muted"
                    >
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-6 mt-8 font-display font-medium">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="underline decoration-signal decoration-2 underline-offset-4 hover:text-signal"
                  >
                    Read the case study →
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <PipelineDiagram steps={project.pipeline} />
                <div className="flex gap-4 font-mono text-xs text-muted">
                  <a href={project.repoUrl} target="_blank" rel="noreferrer" className="hover:text-ink underline underline-offset-4">
                    Repo
                  </a>
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" className="hover:text-ink underline underline-offset-4">
                      Demo video
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
