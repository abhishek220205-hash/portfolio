import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/projects';
import PipelineDiagram from '@/components/PipelineDiagram';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.tagline,
    openGraph: {
      title: `${project.name} — Abhishek Kumar`,
      description: project.tagline,
    },
  };
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid md:grid-cols-[10rem_1fr] gap-3 md:gap-10 py-8 border-b border-line">
      <p className="eyebrow">{label}</p>
      <div className="font-body text-lg leading-relaxed text-ink-soft">{children}</div>
    </div>
  );
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const otherProject = projects.find((p) => p.slug !== project.slug);

  return (
    <article>
      <div className="max-w-content mx-auto px-6 md:px-10 pt-16 pb-10 border-b border-line">
        <Link href="/#work" className="eyebrow hover:text-ink">← All work</Link>
        <p className="eyebrow mt-8 mb-4">{project.status} · {project.year} · {project.role}</p>
        <h1 className="font-display font-semibold text-4xl md:text-6xl tracking-tight">
          {project.name}
        </h1>
        <p className="font-body text-xl text-muted max-w-2xl mt-4 leading-relaxed">
          {project.tagline}
        </p>

        <div className="flex gap-6 mt-8 font-mono text-sm">
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-signal">
            View repository
          </a>
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-signal">
              Watch demo
            </a>
          )}
        </div>
      </div>

      <div className="max-w-content mx-auto px-6 md:px-10 py-12">
        <p className="eyebrow mb-4">Pipeline</p>
        <PipelineDiagram steps={project.pipeline} size="large" />
      </div>

      <div className="max-w-content mx-auto px-6 md:px-10">
        <Section label="Problem">
          <p>{project.problem}</p>
        </Section>

        <Section label="Target user">
          <p>{project.targetUser}</p>
        </Section>

        <Section label="My role">
          <p>{project.myRole}</p>
        </Section>

        <Section label="Process">
          <ol className="space-y-4">
            {project.process.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-mono text-signal shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </Section>

        <Section label="Key decisions">
          <div className="space-y-6">
            {project.keyDecisions.map((kd) => (
              <div key={kd.decision}>
                <p className="font-display font-medium text-ink">{kd.decision}</p>
                <p className="text-muted mt-1">{kd.reasoning}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section label="Final result">
          <p>{project.finalResult}</p>
        </Section>

        <Section label="What I learned">
          <p>{project.whatILearned}</p>
        </Section>
      </div>

      {otherProject && (
        <div className="max-w-content mx-auto px-6 md:px-10 py-16">
          <p className="eyebrow mb-4">Next case study</p>
          <Link
            href={`/projects/${otherProject.slug}`}
            className="font-display font-semibold text-2xl md:text-4xl tracking-tight hover:text-signal transition-colors"
          >
            {otherProject.name} →
          </Link>
        </div>
      )}
    </article>
  );
}
