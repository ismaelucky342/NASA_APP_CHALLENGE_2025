import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CloudRain, Droplets, Thermometer, AlertTriangle, Wind, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

interface DashboardProps {}

export function Dashboard({}: DashboardProps = {}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carga de datos
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);
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
    <div className="flex flex-col gap-4 p-3 pb-28">
      {/* Header */}
      <div className="p-6 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl shadow-xl shadow-green-500/30 animate-fade-in">
        <h1 className="text-2xl font-bold text-white">
          AgroIA
          <br />
          <span className="text-sm text-green-100 font-normal">Protección Inteligente de Cultivos</span>
        </h1>
      </div>

      {/* Mapa de parcelas */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold text-gray-800">Mapa de Parcelas</h2>
          <Badge className="bg-green-500 text-white rounded-full px-3 shadow-md">
            {parcelas.length} activas
          </Badge>
        </div>
        <Card className="overflow-hidden border-2 border-green-200/50 shadow-xl rounded-2xl">
          <div className="relative h-56">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1496123630896-5374cc9e8233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBmYXJtJTIwZmllbGRzfGVufDF8fHx8MTc1OTQ5NjI4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Mapa de parcelas"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            
            {/* Info overlay */}
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
              <p className="text-xs font-semibold text-gray-800 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-green-600" />
                Vista aérea
              </p>
            </div>
            
            {/* Marcadores de parcelas mejorados */}
            <div className="absolute top-8 left-8 group">
              <div className="relative">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse border-2 border-white shadow-lg" />
                <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-xl whitespace-nowrap">
                    <p className="text-xs font-semibold text-red-700">Parcela Norte</p>
                    <p className="text-[10px] text-gray-600">Alerta activa</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-16 right-12 group">
              <div className="relative">
                <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse border-2 border-white shadow-lg" />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-xl whitespace-nowrap">
                    <p className="text-xs font-semibold text-yellow-700">Parcela Sur</p>
                    <p className="text-[10px] text-gray-600">Atención</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-12 right-10 group">
              <div className="relative">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse border-2 border-white shadow-lg" />
                <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-xl whitespace-nowrap">
                    <p className="text-xs font-semibold text-green-700">Parcela Este</p>
                    <p className="text-[10px] text-gray-600">Óptima</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-8 left-1/3 group">
              <div className="relative">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse border-2 border-white shadow-lg" />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-xl whitespace-nowrap">
                    <p className="text-xs font-semibold text-green-700">Parcela Oeste</p>
                    <p className="text-[10px] text-gray-600">Óptima</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Estado climático actual */}
      <div className="animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
        <h2 className="mb-3 text-lg font-semibold text-gray-800">Condiciones Actuales</h2>
        <div className="grid grid-cols-2 gap-3">
          <Card className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-500 rounded-xl shadow-md">
                <Thermometer className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-medium text-blue-700">Temperatura</p>
                <p className="text-lg font-bold text-blue-900">{currentWeather.temperature}°C</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-cyan-500 rounded-xl shadow-md">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-medium text-cyan-700">Humedad</p>
                <p className="text-lg font-bold text-cyan-900">{currentWeather.humidity}%</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-500 rounded-xl shadow-md">
                <CloudRain className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-medium text-indigo-700">Lluvia (24h)</p>
                <p className="text-lg font-bold text-indigo-900">{currentWeather.rainfall}mm</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gray-500 rounded-xl shadow-md">
                <Wind className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-700">Viento</p>
                <p className="text-lg font-bold text-gray-900">{currentWeather.wind} km/h</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Alertas activas */}
      <div className="animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold text-gray-800">Alertas Activas</h2>
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-300 rounded-full px-3 shadow-sm">
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
              <Card key={alert.id} className={`p-4 ${colors[alert.type as keyof typeof colors]} border-2 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer`}>
                <div className="flex items-start gap-3">
                  <div className={`p-2.5 ${badgeColors[alert.type as keyof typeof badgeColors]} rounded-xl shadow-md`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <h3 className={`font-semibold ${colors[alert.type as keyof typeof colors]}`}>{alert.title}</h3>
                      <Badge variant="secondary" className="text-xs rounded-full">
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
      <div className="animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
        <h2 className="mb-3 text-lg font-semibold text-gray-800">Mis Parcelas</h2>
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
              <Card key={parcela.id} className={`p-4 border-2 ${statusColors[parcela.status as keyof typeof statusColors]} rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer`}>
                <div className="flex items-start justify-between mb-2">
                  <div className={`w-3 h-3 rounded-full ${dotColors[parcela.status as keyof typeof dotColors]} shadow-md animate-pulse`} />
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1754106005357-2095d15fb965?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGNyb3BzfGVufDF8fHx8MTc1OTU4MDI1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt={parcela.crop}
                    className="w-12 h-12 rounded-lg object-cover shadow-md"
                  />
                </div>
                <h4 className="font-semibold text-gray-800">{parcela.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{parcela.crop}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}