import React from 'react';
import { Settings as SettingsIcon, MapPin, Bell, Globe } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="space-y-6 pb-20 lg:pb-6">
      <div className="card">
        <div className="flex items-center gap-3 mb-4">
          <SettingsIcon className="text-primary-600" size={28} />
          <h2 className="text-2xl font-bold">Settings</h2>
        </div>
        <p className="text-gray-600">
          Customize your AgriWeather experience
        </p>
      </div>

      <div className="card">
        <div className="flex items-center gap-3 mb-4">
          <MapPin size={20} className="text-gray-600" />
          <h3 className="font-semibold">Farm Location</h3>
        </div>
        <input
          type="text"
          placeholder="Enter your farm address"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      <div className="card">
        <div className="flex items-center gap-3 mb-4">
          <Bell size={20} className="text-gray-600" />
          <h3 className="font-semibold">Notification Preferences</h3>
        </div>
        <div className="space-y-3">
          <label className="flex items-center gap-3">
            <input type="checkbox" className="w-4 h-4 text-primary-600" defaultChecked />
            <span>Email alerts for critical weather</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="w-4 h-4 text-primary-600" defaultChecked />
            <span>SMS notifications</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="w-4 h-4 text-primary-600" />
            <span>Daily weather summary</span>
          </label>
        </div>
      </div>

      <div className="card">
        <div className="flex items-center gap-3 mb-4">
          <Globe size={20} className="text-gray-600" />
          <h3 className="font-semibold">Display Preferences</h3>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Temperature Unit
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
              <option>Fahrenheit (°F)</option>
              <option>Celsius (°C)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Language
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
              <option>English</option>
              <option>Español</option>
              <option>Français</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
