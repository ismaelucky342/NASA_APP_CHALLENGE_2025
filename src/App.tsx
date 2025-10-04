import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Alerts } from "./components/Alerts";
import { History } from "./components/History";
import { Scenarios } from "./components/Scenarios";
import { Settings } from "./components/Settings";
import { Sheet, SheetContent } from "./components/ui/sheet";
import { Home, Bell, BarChart3, Zap } from "lucide-react";
import Layout from "./components/Layout";

type View = "dashboard" | "alerts" | "history" | "scenarios";

export default function App() {
  const [currentView, setCurrentView] = useState<View>("dashboard");
  const [showSettings, setShowSettings] = useState(false);

  const tabs = [
    { id: "dashboard" as View, label: "Inicio", icon: Home },
    { id: "alerts" as View, label: "Alertas", icon: Bell },
    { id: "history" as View, label: "Histórico", icon: BarChart3 },
    { id: "scenarios" as View, label: "Escenarios", icon: Zap }
  ];

  return (
    <Layout>
      {/* Main content area */}
      <div className="flex-1 overflow-y-auto">
        {currentView === "dashboard" && <Dashboard onMenuClick={() => setShowSettings(true)} />}
        {currentView === "alerts" && <Alerts />}
        {currentView === "history" && <History />}
        {currentView === "scenarios" && <Scenarios />}
      </div>

      {/* Bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 shadow-lg">
        <div className="grid grid-cols-4 gap-0">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentView === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setCurrentView(tab.id)}
                className={`relative flex flex-col items-center justify-center py-3 px-2 transition-colors ${
                  isActive
                    ? "text-green-600 bg-green-50"
                    : "text-gray-600 hover:text-green-600 hover:bg-gray-50"
                }`}
              >
                <Icon className={`w-6 h-6 mb-1 ${isActive ? "stroke-[2.5]" : ""}`} />
                <span className="text-xs">{tab.label}</span>
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-600" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Settings sheet */}
      <Sheet open={showSettings} onOpenChange={setShowSettings}>
        <SheetContent side="left" className="w-full p-0 max-w-md">
          <Settings onClose={() => setShowSettings(false)} />
        </SheetContent>
      </Sheet>
    </Layout>
  );
}