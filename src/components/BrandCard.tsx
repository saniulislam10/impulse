import Link from 'next/link';

interface BrandCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  overlayColor?: 'primary' | 'gold' | 'dark';
  href: string;
}

export default function BrandCard({
  title,
  description,
  imageUrl,
  imageAlt,
  overlayColor = 'primary',
  href,
}: BrandCardProps) {
  const overlayClasses = {
    primary: 'bg-primary/20 group-hover:bg-primary/10',
    gold: 'bg-black/40 group-hover:bg-black/30',
    dark: 'bg-gray-800/40 group-hover:bg-gray-800/20',
  };

  return (
    <div className="brand-card group cursor-pointer">
      <div className="relative h-64 overflow-hidden rounded-xl mb-6">
        <div
          className="brand-image absolute inset-0 bg-cover bg-center transition-transform duration-500"
          style={{ backgroundImage: `url('${imageUrl}')` }}
          role="img"
          aria-label={imageAlt}
        />
        <div className={`absolute inset-0 ${overlayClasses[overlayColor]}`} />
      </div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-4 leading-relaxed">{description}</p>
      <Link
        className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all"
        href={href}
      >
        Learn More <span className="material-symbols-outlined">arrow_forward</span>
      </Link>
    </div>
  );
}
