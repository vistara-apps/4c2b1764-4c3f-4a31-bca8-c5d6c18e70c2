import { DashboardShell } from './components/DashboardShell';
import { MetricCard } from './components/MetricCard';
import { CookieChart } from './components/CookieChart';
import { CookieTable } from './components/CookieTable';
import { TrendChart } from './components/TrendChart';

export default function Home() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-fg">Cookie Impact Dashboard</h1>
          <p className="mt-2 text-muted">Real-time analytics showing how cookie configurations affect your metrics</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            label="Monthly"
            value="4,687"
            trend={12.5}
            variant="default"
          />
          <MetricCard
            label="Rate"
            value="15.6%"
            trend={-2.3}
            variant="default"
          />
          <MetricCard
            label="Signal"
            value="7,23"
            trend={8.1}
            variant="default"
          />
          <MetricCard
            label="Conversion"
            value="$6,375.0"
            trend={15.2}
            variant="accent"
          />
          <MetricCard
            label="Trumbly"
            value="$48.85"
            trend={5.4}
            variant="default"
          />
          <MetricCard
            label="Oktaro"
            value="1.00"
            trend={0}
            variant="default"
          />
        </div>

        {/* Main Chart */}
        <div className="rounded-lg bg-surface p-6 shadow-card">
          <h2 className="mb-4 text-xl font-semibold text-fg">Real-time Metrics</h2>
          <CookieChart />
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Cookie Table */}
          <div className="rounded-lg bg-surface p-6 shadow-card">
            <h2 className="mb-4 text-xl font-semibold text-fg">Cookie Analysis</h2>
            <CookieTable />
          </div>

          {/* Trend Charts */}
          <div className="rounded-lg bg-surface p-6 shadow-card">
            <h2 className="mb-4 text-xl font-semibold text-fg">Traffic Activity</h2>
            <TrendChart />
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
