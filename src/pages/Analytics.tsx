import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

const Analytics: React.FC = () => {
  return (
    <div className="space-y-6 pb-20 lg:pb-6">
      <div className="card">
        <div className="flex items-center gap-3 mb-4">
          <BarChart3 className="text-primary-600" size={28} />
          <h2 className="text-2xl font-bold">Weather Analytics</h2>
        </div>
        <p className="text-gray-600">
          Historical patterns and predictive insights
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-semibold mb-4">Monthly Rainfall Comparison</h3>
          <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Chart coming soon</p>
          </div>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-4">Temperature Trends</h3>
          <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Chart coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
