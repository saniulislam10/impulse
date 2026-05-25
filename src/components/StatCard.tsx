interface StatCardProps {
  label: string;
  value: string;
  description: string;
  trend?: string;
  trendLabel?: string;
}

export default function StatCard({
  label,
  value,
  description,
  trend,
  trendLabel,
}: StatCardProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark p-8 rounded-xl border border-[#dce5e3] dark:border-white/10 hover:shadow-xl transition-shadow group">
      <div className="flex justify-between items-start mb-4">
        <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">{label}</p>
        {trend && (
          <span className="text-primary font-bold text-sm bg-primary/10 px-2 py-1 rounded">
            {trend}
          </span>
        )}
        {trendLabel && !trend && (
          <span className="text-gray-400 font-bold text-sm bg-gray-100 dark:bg-white/5 px-2 py-1 rounded">
            {trendLabel}
          </span>
        )}
      </div>
      <p className="text-5xl font-black text-[#121716] dark:text-white mb-2">{value}</p>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
}
