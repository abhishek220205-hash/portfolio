import { profile } from '@/data/projects';

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="max-w-content mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <p className="eyebrow">© {year} {profile.name}. Built with intent, not a template.</p>
        <div className="flex gap-6 eyebrow">
          <a href={`mailto:${profile.email}`} className="hover:text-ink">Email</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-ink">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
