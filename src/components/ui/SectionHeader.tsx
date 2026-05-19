type SectionHeaderProps = {
  tag?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
};

export default function SectionHeader({ tag, title, highlight, subtitle, center = true }: SectionHeaderProps) {
  return (
    <div className={center ? 'text-center mb-12' : 'mb-12'}>
      {tag && (
        <span className="inline-block px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
