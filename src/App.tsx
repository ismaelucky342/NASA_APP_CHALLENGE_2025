import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Alerts } from "./components/Alerts";
import { History } from "./components/History";
import { Scenarios } from "./components/Scenarios";
import { Settings } from "./components/Settings";
import { Sheet, SheetContent } from "./components/ui/sheet";
import { Home, Bell, BarChart3, Zap, Settings as SettingsIcon } from "lucide-react";
import Layout from "./components/Layout";

type View = "dashboard" | "alerts" | "history" | "scenarios" | "settings";

export default function App() {
  const [currentView, setCurrentView] = useState<View>("dashboard");
  const [showSettings, setShowSettings] = useState(false);

  const tabs = [
    { id: "dashboard" as View, label: "Inicio", icon: Home },
    { id: "alerts" as View, label: "Alertas", icon: Bell },
    { id: "history" as View, label: "Histórico", icon: BarChart3 },
    { id: "scenarios" as View, label: "Escenarios", icon: Zap },
    { id: "settings" as View, label: "Ajustes", icon: SettingsIcon }
  ];

  return (
    <Layout>
      {/* Main content area */}
      <div className="flex-1 overflow-y-auto pb-24">
        {currentView === "dashboard" && <Dashboard />}
        {currentView === "alerts" && <Alerts />}
        {currentView === "history" && <History />}
        {currentView === "scenarios" && <Scenarios />}
        {currentView === "settings" && <Settings onClose={() => setCurrentView("dashboard")} />}
      </div>

      {/* Bottom navigation - Modern design with glassmorphism */}
      <div className="fixed bottom-4 left-4 right-4 z-50 animate-slide-up">
        <div className="max-w-md mx-auto">
          <div className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-2xl shadow-green-500/10">
            <div className="grid grid-cols-5 gap-1 p-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = currentView === tab.id;
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => setCurrentView(tab.id)}
                    className={`relative flex flex-col items-center justify-center py-3 px-2 rounded-xl transition-all duration-300 group active:scale-90 ${
                      isActive
                        ? "bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg shadow-green-500/50 scale-105"
                        : "text-gray-600 hover:bg-gray-100 hover:scale-105"
                    }`}
                  >
                    <Icon className={`w-5 h-5 mb-1 transition-transform ${
                      isActive ? "scale-110" : "group-hover:scale-110"
                    }`} />
                    <span className={`text-[10px] font-medium transition-colors ${
                      isActive ? "text-white" : "text-gray-600 group-hover:text-green-600"
                    }`}>
                      {tab.label}
                    </span>
                    {isActive && (
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    </Layout>
  );
}