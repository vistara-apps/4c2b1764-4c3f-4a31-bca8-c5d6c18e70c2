'use client';

import { TrendingUp, TrendingDown, ChevronDown } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string;
  trend?: number;
  variant?: 'default' | 'accent';
}

export function MetricCard({ label, value, trend, variant = 'default' }: MetricCardProps) {
  const isPositive = trend && trend > 0;
  const isNegative = trend && trend < 0;

  return (
    <div className={`rounded-lg p-4 shadow-card transition-all hover:shadow-card-hover ${
      variant === 'accent' ? 'bg-purple-500/20' : 'bg-surface'
    }`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-muted">{label}</p>
          <p className="mt-2 text-2xl font-semibold text-fg">{value}</p>
        </div>
        {variant === 'accent' && (
          <button className="rounded-lg p-1 hover:bg-surface-hover">
            <ChevronDown className="h-4 w-4 text-muted" />
          </button>
        )}
      </div>
      {trend !== undefined && trend !== 0 && (
        <div className="mt-2 flex items-center gap-1">
          {isPositive && <TrendingUp className="h-4 w-4 text-success" />}
          {isNegative && <TrendingDown className="h-4 w-4 text-danger" />}
          <span className={`text-sm font-medium ${
            isPositive ? 'text-success' : isNegative ? 'text-danger' : 'text-muted'
          }`}>
            {Math.abs(trend)}%
          </span>
        </div>
      )}
    </div>
  );
}
