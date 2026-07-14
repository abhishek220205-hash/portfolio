import type { PipelineStep } from '@/data/projects';

export default function PipelineDiagram({
  steps,
  size = 'default',
}: {
  steps: PipelineStep[];
  size?: 'default' | 'large';
}) {
  const nodeText = size === 'large' ? 'text-base' : 'text-sm';
  const detailText = size === 'large' ? 'text-sm' : 'text-xs';

  return (
    <div
      className="flex flex-col sm:flex-row sm:items-stretch gap-0"
      role="img"
      aria-label={`Pipeline: ${steps.map((s) => s.label).join(' to ')}`}
    >
      {steps.map((step, i) => (
        <div key={step.label} className="flex sm:flex-1 items-stretch">
          <div className="flex-1 border border-line rounded-sm p-4 bg-paper">
            <p className={`signal-dot font-mono ${nodeText} font-medium text-ink inline-block`}>
              {step.label}
            </p>
            <p className={`font-body ${detailText} text-muted mt-2 leading-snug`}>
              {step.detail}
            </p>
          </div>
          {i < steps.length - 1 && (
            <div
              aria-hidden="true"
              className="hidden sm:flex items-center px-2 text-signal font-mono"
            >
              →
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
