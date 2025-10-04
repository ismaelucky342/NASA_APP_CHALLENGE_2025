import React from 'react';
import { Bell, AlertTriangle, Info } from 'lucide-react';

const Alerts: React.FC = () => {
  const alerts = [
    { type: 'warning', message: 'Heavy rain expected in 48 hours', time: '2 hours ago' },
    { type: 'info', message: 'Optimal planting window opens next week', time: '5 hours ago' },
    { type: 'warning', message: 'Frost risk tonight - protect crops', time: '1 day ago' },
  ];

  return (
    <div className="space-y-6 pb-20 lg:pb-6">
      <div className="card">
        <div className="flex items-center gap-3 mb-4">
          <Bell className="text-primary-600" size={28} />
          <h2 className="text-2xl font-bold">Weather Alerts</h2>
        </div>
        <p className="text-gray-600">
          Stay informed about critical weather conditions
        </p>
      </div>

      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className={`card border-l-4 ${
              alert.type === 'warning' ? 'border-warning-500' : 'border-blue-500'
            }`}
          >
            <div className="flex items-start gap-3">
              {alert.type === 'warning' ? (
                <AlertTriangle className="text-warning-500 flex-shrink-0" size={24} />
              ) : (
                <Info className="text-blue-500 flex-shrink-0" size={24} />
              )}
              <div className="flex-1">
                <p className="font-medium text-gray-900">{alert.message}</p>
                <p className="text-sm text-gray-500 mt-1">{alert.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alerts;
