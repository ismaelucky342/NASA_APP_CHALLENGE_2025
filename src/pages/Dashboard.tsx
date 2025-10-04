import React from 'react';
import { Cloud, Droplets, Wind, Sun, AlertTriangle } from 'lucide-react';
import { useResponsive } from '../hooks/useResponsive';

const Dashboard: React.FC = () => {
  const { isMobile } = useResponsive();

  return (
    <div className="space-y-6 pb-20 lg:pb-6">
      {/* Welcome Section */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Welcome Back, Farmer
        </h2>
        <p className="text-gray-600">
          Here's your weather overview for today
        </p>
      </div>

      {/* Current Conditions */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Current Conditions</h3>
          <span className="text-sm text-gray-500">Updated 5 min ago</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <Cloud className="mx-auto mb-2 text-blue-600" size={isMobile ? 32 : 40} />
            <p className="text-2xl md:text-3xl font-bold">75°F</p>
            <p className="text-sm text-gray-600">Temperature</p>
          </div>
          <div className="text-center p-4 bg-cyan-50 rounded-lg">
            <Droplets className="mx-auto mb-2 text-cyan-600" size={isMobile ? 32 : 40} />
            <p className="text-2xl md:text-3xl font-bold">65%</p>
            <p className="text-sm text-gray-600">Humidity</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Wind className="mx-auto mb-2 text-gray-600" size={isMobile ? 32 : 40} />
            <p className="text-2xl md:text-3xl font-bold">12mph</p>
            <p className="text-sm text-gray-600">Wind Speed</p>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <Sun className="mx-auto mb-2 text-yellow-600" size={isMobile ? 32 : 40} />
            <p className="text-2xl md:text-3xl font-bold">High</p>
            <p className="text-sm text-gray-600">UV Index</p>
          </div>
        </div>
      </div>

      {/* Rain Probability */}
      <div className="card bg-gradient-to-br from-blue-500 to-blue-700 text-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Today's Rain Probability</h3>
          <Droplets size={32} />
        </div>
        <p className="text-5xl md:text-6xl font-bold mb-2">45%</p>
        <p className="text-blue-100">Moderate chance of rain this afternoon</p>
        <div className="mt-4 pt-4 border-t border-blue-400">
          <p className="text-sm">Confidence Level: <span className="font-semibold">High (85%)</span></p>
        </div>
      </div>

      {/* Active Alerts */}
      <div className="card border-l-4 border-warning-500">
        <div className="flex items-start gap-3">
          <AlertTriangle className="text-warning-500 flex-shrink-0" size={24} />
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">Weather Alert</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Heavy rainfall expected in 48 hours. Consider covering sensitive crops.
            </p>
            <button className="mt-3 text-sm font-medium text-primary-600 hover:text-primary-700">
              View Details →
            </button>
          </div>
        </div>
      </div>

      {/* 7-Day Forecast Preview */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">7-Day Forecast</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <div key={day} className="text-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <p className="text-sm font-medium text-gray-600 mb-2">{day}</p>
              <Cloud className="mx-auto mb-2 text-gray-400" size={24} />
              <p className="text-lg font-bold">72°</p>
              <p className="text-xs text-blue-600 mt-1">{30 + index * 5}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
