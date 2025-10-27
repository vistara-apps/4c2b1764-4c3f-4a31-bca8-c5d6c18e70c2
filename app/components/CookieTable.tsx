'use client';

interface CookieData {
  name: string;
  value: string;
  color: string;
}

const cookieData: CookieData[] = [
  { name: 'Feline Cid', value: '515.4%', color: '#a78bfa' },
  { name: 'Licence', value: '195.8%', color: '#fb923c' },
  { name: 'Cloteral', value: '', color: '' },
  { name: 'Carre', value: '', color: '' },
  { name: 'Vistonay', value: '115.12.4%', color: '#fbbf24' },
  { name: '512-Cid', value: '', color: '' },
  { name: 'Macrom', value: '6/3.7%', color: '#ef4444' },
  { name: '665.4%', value: '', color: '' },
];

export function CookieTable() {
  return (
    <div className="space-y-3">
      {cookieData.map((item, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {item.color && (
              <div 
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
            )}
            <span className="text-sm text-fg">{item.name}</span>
          </div>
          {item.value && (
            <span className="text-sm font-medium text-fg">{item.value}</span>
          )}
        </div>
      ))}
    </div>
  );
}
