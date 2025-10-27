# CookieClarity - Base Mini App

Turn cookie consent from conversion killer to competitive advantage.

## Features

- **Cookie Impact Dashboard**: Real-time analytics showing how cookie configurations affect conversions
- **Compliance Templates**: Pre-built, legally vetted cookie policy templates
- **A/B Testing**: Test banner designs and track consent rates
- **Competitor Intelligence**: Analyze competitor cookie strategies
- **Cookie Audit**: Automated scanner to identify and categorize cookies

## Tech Stack

- Next.js 15 with App Router
- React 19
- OnchainKit for Base integration
- Recharts for data visualization
- Tailwind CSS with BASE theme
- TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── Providers.tsx   # OnchainKit provider
│   ├── DashboardShell.tsx
│   ├── MetricCard.tsx
│   ├── CookieChart.tsx
│   ├── CookieTable.tsx
│   └── TrendChart.tsx
├── layout.tsx          # Root layout
├── page.tsx            # Main dashboard page
└── globals.css         # Global styles with BASE theme
```

## BASE Theme

This app uses the BASE theme with:
- Dark blue background (#0f1419)
- Base blue accents (#0052ff)
- Rounded borders and modern design
- Mobile-first responsive layout

## License

MIT
