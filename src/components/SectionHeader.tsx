interface SectionHeaderProps {
  title: string;
  description?: string;
  centered?: boolean;
  showUnderline?: boolean;
}

export default function SectionHeader({
  title,
  description,
  centered = false,
  showUnderline = false,
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center mb-16 space-y-4' : 'space-y-2 mb-12'}`}>
      <h2 className="text-4xl font-extrabold tracking-tight">{title}</h2>
      {showUnderline && !centered && <div className="h-1 w-20 bg-accent-gold rounded" />}
      {description && (
        <p className={`text-gray-500 ${centered ? 'max-w-2xl mx-auto' : 'max-w-md'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
