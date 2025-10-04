# AgriWeather - Agricultural Weather Prediction App

A comprehensive web application for farmers to predict rainfall and weather patterns, helping them protect crops and make informed decisions about planting, harvesting, and resource allocation.

## Features

- 📱 **Responsive Design**: Works seamlessly on phones, tablets, and desktop
- 🌦️ **Weather Predictions**: 7, 14, and 30-day forecasts with confidence levels
- 🔔 **Smart Alerts**: Critical weather event notifications
- 📊 **Analytics**: Historical patterns and predictive insights
- 🗺️ **Microclimate Monitoring**: Farm-specific weather tracking
- 🌍 **Multi-language Support**: Accessible to farmers worldwide

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **State Management**: TanStack Query
- **Routing**: React Router v7
- **UI Components**: Radix UI + Lucide Icons
- **Charts**: Recharts (for data visualization)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:3000` with hot module replacement enabled.

### Mobile Testing

The dev server is configured to be accessible on your local network. Find your local IP and access:
```
http://YOUR_IP:3000
```

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   └── Layout.tsx   # Responsive layout with navigation
├── pages/           # Page components
│   ├── Dashboard.tsx
│   ├── Forecast.tsx
│   ├── Alerts.tsx
│   ├── Analytics.tsx
│   └── Settings.tsx
├── hooks/           # Custom React hooks
│   └── useResponsive.ts
├── App.tsx          # Main app with routing
└── main.tsx         # Entry point

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## NASA API Integration (Coming Soon)

The app will integrate with:
- NASA POWER API (weather data)
- NASA GPM (precipitation)
- NASA MODIS (vegetation health)

## License

MIT

# Prototipo App Agricultores IA

- Dev: npm run dev
- Build: npm run build
- Preview: npm run preview

Notas:
- No uses sufijos de versión en imports (ej.: "lucide-react", no "lucide-react@0.487.0").
- Si usas postcss.config.js con module.exports, no definas "type": "module" en package.json.
