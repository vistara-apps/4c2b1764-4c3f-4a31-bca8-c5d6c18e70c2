'use client';

import { useState } from 'react';
import { 
  LayoutDashboard, 
  Activity, 
  Users, 
  MapPin, 
  Heart,
  Menu,
  X,
  Search,
  Bell,
  User,
  HelpCircle,
  Palette,
  MoreVertical
} from 'lucide-react';

interface DashboardShellProps {
  children: React.ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: 'Data models', icon: LayoutDashboard, current: true },
    { name: 'Data overview', icon: LayoutDashboard, current: false },
    { name: 'User activity', icon: Activity, current: false },
    { name: 'User activity', icon: Users, current: false },
    { name: 'System health', icon: Heart, current: false },
  ];

  return (
    <div className="min-h-screen bg-bg">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-surface transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center justify-between px-6">
            <h1 className="text-2xl font-bold text-fg">x402</h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden"
            >
              <X className="h-6 w-6 text-muted" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-3 py-4">
            {navigation.map((item, index) => (
              <button
                key={item.name + index}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  item.current
                    ? 'bg-accent text-white'
                    : 'text-muted hover:bg-surface-hover hover:text-fg'
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-surface px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden"
          >
            <Menu className="h-6 w-6 text-muted" />
          </button>

          <div className="flex flex-1 items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                type="text"
                placeholder="Anta com notify"
                className="w-full rounded-lg bg-bg py-2 pl-10 pr-4 text-sm text-fg placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <button className="rounded-lg p-2 hover:bg-surface-hover">
              <Search className="h-5 w-5 text-muted" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button className="rounded-lg p-2 hover:bg-surface-hover">
              <div className="h-8 w-8 rounded-full bg-danger" />
            </button>
            <button className="rounded-lg p-2 hover:bg-surface-hover">
              <User className="h-5 w-5 text-muted" />
            </button>
            <button className="rounded-lg p-2 hover:bg-surface-hover">
              <HelpCircle className="h-5 w-5 text-muted" />
            </button>
            <button className="rounded-lg p-2 hover:bg-surface-hover">
              <Palette className="h-5 w-5 text-muted" />
            </button>
            <button className="rounded-lg p-2 hover:bg-surface-hover">
              <Bell className="h-5 w-5 text-muted" />
            </button>
            <button className="rounded-lg p-2 hover:bg-surface-hover">
              <MoreVertical className="h-5 w-5 text-muted" />
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
