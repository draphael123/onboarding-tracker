interface ProgressBarProps {
  progress: number;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function ProgressBar({ progress, showLabel = true, size = 'md' }: ProgressBarProps) {
  const heightClass = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  }[size];

  const getColor = () => {
    if (progress === 100) return 'bg-emerald-500';
    if (progress >= 75) return 'bg-amber-500';
    if (progress >= 25) return 'bg-teal-500';
    return 'bg-gray-400';
  };

  return (
    <div className="flex items-center gap-3">
      <div className={`flex-1 bg-gray-200 rounded-full overflow-hidden ${heightClass}`}>
        <div
          className={`${heightClass} ${getColor()} rounded-full transition-all duration-500`}
          style={{ width: `${progress}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-sm font-medium text-gray-600 min-w-[3rem] text-right">
          {progress}%
        </span>
      )}
    </div>
  );
}
