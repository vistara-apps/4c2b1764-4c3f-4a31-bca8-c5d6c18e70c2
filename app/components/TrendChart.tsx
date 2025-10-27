'use client';

import { LineChart, Line, ResponsiveContainer } from 'recharts';

interface TrendData {
  name: string;
  value: string;
  data: number[];
}

const trendData: TrendData[] = [
  { name: 'Alop null', value: '', data: [] },
  { name: 'Ccon', value: '17,147', data: [20, 40, 30, 50, 45, 60, 55, 70, 65, 80] },
  { name: 'Traffic activ', value: '', data: [] },
  { name: 'Agaim', value: '6.9%', data: [30, 25, 35, 30, 40, 35, 45, 40, 50, 45] },
  { name: 'Tranaron', value: '6.21k', data: [40, 50, 45, 55, 50, 60, 55, 65, 60, 70] },
  { name: 'Fesek', value: '95.0%', data: [] },
];

export function TrendChart() {
  return (
    <div className="space-y-4">
      {trendData.map((item, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm text-muted">{item.name}</p>
            {item.value && (
              <p className="mt-1 text-sm font-medium text-fg">{item.value}</p>
            )}
          </div>
          {item.data.length > 0 && (
            <div className="h-12 w-24">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={item.data.map((v, i) => ({ value: v }))}>
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="rgba(255,255,255,0.5)" 
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
