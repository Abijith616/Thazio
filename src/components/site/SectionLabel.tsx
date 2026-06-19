export function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="font-display text-brand-accent text-sm">{index}</span>
      <span className="h-px w-10 bg-brand-accent/40" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-muted">
        {children}
      </span>
    </div>
  );
}
