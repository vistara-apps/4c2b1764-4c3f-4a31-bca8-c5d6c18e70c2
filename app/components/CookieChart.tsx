'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'JAN', value: 450 },
  { name: 'II', value: 520 },
  { name: 'DAS', value: 380 },
  { name: 'I', value: 580 },
  { name: 'FEB', value: 680 },
  { name: 'JUL', value: 520 },
  { name: 'I', value: 480 },
  { name: 'I', value: 720 },
  { name: 'K', value: 620 },
  { name: 'I', value: 180 },
  { name: 'JUL', value: 280 },
  { name: 'VI', value: 380 },
  { name: 'I-FEB', value: 480 },
  { name: 'I', value: 580 },
  { name: 'MAR', value: 680 },
  { name: 'AU', value: 780 },
];

const colors = [
  '#a78bfa', '#4ade80', '#818cf8', '#a78bfa', '#4ade80',
  '#60a5fa', '#fb923c', '#60a5fa', '#fb923c', '#a78bfa',
  '#4ade80', '#60a5fa', '#4ade80', '#fb923c', '#60a5fa',
  '#fb923c'
];

export function CookieChart() {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="name" 
            stroke="rgba(255,255,255,0.5)"
            tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
          />
          <YAxis 
            stroke="rgba(255,255,255,0.5)"
            tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
          />
          <Bar 
            dataKey="value" 
            radius={[8, 8, 0, 0]}
            fill="#0052ff"
          >
            {data.map((entry, index) => (
              <Bar key={`bar-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
