import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CloudRain, Droplets, Thermometer, AlertTriangle, Wind, Menu } from "lucide-react";

interface DashboardProps {
  onMenuClick: () => void;
}

export function Dashboard({ onMenuClick }: DashboardProps) {
  const currentWeather = {
    temperature: 24,
    humidity: 65,
    rainfall: 5.2,
    wind: 12
  };

  const activeAlerts = [
    { id: 1, type: "high", title: "Riesgo de helada", location: "Parcela Norte", time: "En 48h", icon: AlertTriangle },
    { id: 2, type: "medium", title: "Estrés hídrico", location: "Parcela Sur", time: "Próximos 5 días", icon: Droplets },
    { id: 3, type: "safe", title: "Condiciones óptimas", location: "Parcela Este", time: "Hoy", icon: CloudRain }
  ];

  const parcelas = [
    { id: 1, name: "Parcela Norte", crop: "Trigo", status: "high" },
    { id: 2, name: "Parcela Sur", crop: "Maíz", status: "medium" },
    { id: 3, name: "Parcela Este", crop: "Soja", status: "safe" },
    { id: 4, name: "Parcela Oeste", crop: "Girasol", status: "safe" }
  ];

  return (
    <div className="flex flex-col gap-4 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div>
          <h1 className="text-white">AgroIA</h1>
          <p className="text-sm text-green-100 mt-1">Protección Inteligente de Cultivos</p>
        </div>
        <button 
          onClick={onMenuClick}
          className="p-2 hover:bg-green-500/30 rounded-lg transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mapa de parcelas */}
      <div className="px-4">
        <Card className="overflow-hidden border-2 border-green-200">
          <div className="relative h-48">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1496123630896-5374cc9e8233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBmYXJtJTIwZmllbGRzfGVufDF8fHx8MTc1OTQ5NjI4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Mapa de parcelas"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-3 left-3 text-white">
              <p className="text-sm">Vista aérea - {parcelas.length} parcelas</p>
            </div>
            
            {/* Marcadores de parcelas */}
            <div className="absolute top-4 left-4">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-white" />
            </div>
            <div className="absolute bottom-12 right-8">
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse border-2 border-white" />
            </div>
            <div className="absolute top-8 right-6">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse border-2 border-white" />
            </div>
          </div>
        </Card>
      </div>

      {/* Estado climático actual */}
      <div className="px-4">
        <h2 className="mb-3 text-gray-800">Condiciones Actuales</h2>
        <div className="grid grid-cols-2 gap-3">
          <Card className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-500 rounded-lg">
                <Thermometer className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-blue-700">Temperatura</p>
                <p className="text-blue-900">{currentWeather.temperature}°C</p>
              </div>
            </div>
          </Card>

          <Card className="p-3 bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-cyan-500 rounded-lg">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-cyan-700">Humedad</p>
                <p className="text-cyan-900">{currentWeather.humidity}%</p>
              </div>
            </div>
          </Card>

          <Card className="p-3 bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-indigo-500 rounded-lg">
                <CloudRain className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-indigo-700">Lluvia (24h)</p>
                <p className="text-indigo-900">{currentWeather.rainfall}mm</p>
              </div>
            </div>
          </Card>

          <Card className="p-3 bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gray-500 rounded-lg">
                <Wind className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-700">Viento</p>
                <p className="text-gray-900">{currentWeather.wind} km/h</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Alertas activas */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-gray-800">Alertas Activas</h2>
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-300">
            {activeAlerts.filter(a => a.type === "high").length} urgentes
          </Badge>
        </div>
        
        <div className="flex flex-col gap-3">
          {activeAlerts.map((alert) => {
            const Icon = alert.icon;
            const colors = {
              high: "bg-red-50 border-red-300 text-red-800",
              medium: "bg-yellow-50 border-yellow-300 text-yellow-800",
              safe: "bg-green-50 border-green-300 text-green-800"
            };
            const badgeColors = {
              high: "bg-red-500",
              medium: "bg-yellow-500",
              safe: "bg-green-500"
            };

            return (
              <Card key={alert.id} className={`p-4 ${colors[alert.type as keyof typeof colors]} border-2`}>
                <div className="flex items-start gap-3">
                  <div className={`p-2 ${badgeColors[alert.type as keyof typeof badgeColors]} rounded-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <h3 className={colors[alert.type as keyof typeof colors]}>{alert.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {alert.time}
                      </Badge>
                    </div>
                    <p className="text-sm mt-1 opacity-80">{alert.location}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Resumen de parcelas */}
      <div className="px-4">
        <h2 className="mb-3 text-gray-800">Mis Parcelas</h2>
        <div className="grid grid-cols-2 gap-3">
          {parcelas.map((parcela) => {
            const statusColors = {
              high: "border-red-400 bg-red-50",
              medium: "border-yellow-400 bg-yellow-50",
              safe: "border-green-400 bg-green-50"
            };
            const dotColors = {
              high: "bg-red-500",
              medium: "bg-yellow-500",
              safe: "bg-green-500"
            };

            return (
              <Card key={parcela.id} className={`p-3 border-2 ${statusColors[parcela.status as keyof typeof statusColors]}`}>
                <div className="flex items-start justify-between mb-2">
                  <div className={`w-2 h-2 rounded-full ${dotColors[parcela.status as keyof typeof dotColors]}`} />
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1754106005357-2095d15fb965?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGNyb3BzfGVufDF8fHx8MTc1OTU4MDI1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt={parcela.crop}
                    className="w-10 h-10 rounded object-cover"
                  />
                </div>
                <h4 className="text-gray-800">{parcela.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{parcela.crop}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}