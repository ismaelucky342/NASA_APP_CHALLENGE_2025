import React from 'react';
import { Calendar, TrendingUp } from 'lucide-react';

const Forecast: React.FC = () => {
  return (
    <div className="space-y-6 pb-20 lg:pb-6">
      <div className="card">
        <div className="flex items-center gap-3 mb-4">
          <Calendar className="text-primary-600" size={28} />
          <h2 className="text-2xl font-bold">Extended Forecast</h2>
        </div>
        <p className="text-gray-600">
          Detailed weather predictions for the next 30 days
        </p>
      </div>

      <div className="card">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="text-primary-600" size={24} />
          <h3 className="text-xl font-semibold">Weather Trends</h3>
        </div>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Chart visualization will be implemented here</p>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
