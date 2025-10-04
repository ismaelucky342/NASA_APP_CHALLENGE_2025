import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";
import { AlertTriangle, Droplets, CloudSnow, CloudRainWind, Sun, TrendingUp } from "lucide-react";
import { useState } from "react";

export function Alerts() {
  const [selectedParcelas, setSelectedParcelas] = useState<Record<string, boolean>>({
    "parcela-norte": true,
    "parcela-sur": true,
    "parcela-este": true,
    "parcela-oeste": false
  });

  const alerts = [
    {
      id: 1,
      type: "high",
      icon: CloudSnow,
      title: "Alerta de helada",
      description: "Temperatura descenderá a -2°C en las próximas 48 horas",
      location: "Parcela Norte",
      time: "Hoy, 14:30",
      forecast: "Corto plazo (48h)",
      recommendation: "Activar sistema de riego por aspersión o cubrir cultivos sensibles"
    },
    {
      id: 2,
      type: "high",
      icon: CloudRainWind,
      title: "Lluvia extrema",
      description: "Se esperan precipitaciones de 80-120mm en 24 horas",
      location: "Todas las parcelas",
      time: "Hace 2h",
      forecast: "Corto plazo (24h)",
      recommendation: "Verificar drenaje y evitar aplicación de fertilizantes"
    },
    {
      id: 3,
      type: "medium",
      icon: Droplets,
      title: "Estrés hídrico moderado",
      description: "Humedad del suelo por debajo del 40% óptimo",
      location: "Parcela Sur",
      time: "Hace 5h",
      forecast: "Medio plazo (5 días)",
      recommendation: "Programar riego adicional para próximos 3 días"
    },
    {
      id: 4,
      type: "medium",
      icon: Sun,
      title: "Ola de calor",
      description: "Temperaturas superiores a 35°C durante 4 días consecutivos",
      location: "Parcela Oeste",
      time: "Ayer, 18:00",
      forecast: "Medio plazo (7 días)",
      recommendation: "Incrementar frecuencia de riego y monitorear estrés vegetal"
    },
    {
      id: 5,
      type: "safe",
      icon: TrendingUp,
      title: "Condiciones óptimas",
      description: "Temperatura y humedad ideales para crecimiento",
      location: "Parcela Este",
      time: "Hace 1h",
      forecast: "Corto plazo (72h)",
      recommendation: "Momento ideal para aplicación de nutrientes foliares"
    }
  ];

  const parcelas = [
    { id: "parcela-norte", name: "Parcela Norte", crop: "Trigo" },
    { id: "parcela-sur", name: "Parcela Sur", crop: "Maíz" },
    { id: "parcela-este", name: "Parcela Este", crop: "Soja" },
    { id: "parcela-oeste", name: "Parcela Oeste", crop: "Girasol" }
  ];

  const toggleParcela = (id: string) => {
    setSelectedParcelas(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="flex flex-col gap-4 pb-20">
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <h1 className="text-white">Alertas de Riesgo</h1>
        <p className="text-sm text-orange-100 mt-1">Pronósticos y recomendaciones</p>
      </div>

      {/* Filtro de parcelas */}
      <div className="px-4">
        <Card className="p-4 bg-amber-50 border-amber-200">
          <h3 className="text-amber-900 mb-3">Recibir alertas de:</h3>
          <div className="flex flex-col gap-3">
            {parcelas.map((parcela) => (
              <div key={parcela.id} className="flex items-center justify-between">
                <div>
                  <p className="text-amber-900">{parcela.name}</p>
                  <p className="text-sm text-amber-700">{parcela.crop}</p>
                </div>
                <Switch
                  checked={selectedParcelas[parcela.id]}
                  onCheckedChange={() => toggleParcela(parcela.id)}
                />
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Resumen de alertas */}
      <div className="px-4">
        <div className="grid grid-cols-3 gap-2">
          <Card className="p-3 bg-red-50 border-red-200">
            <p className="text-xs text-red-700">Urgentes</p>
            <p className="text-red-900 mt-1">
              {alerts.filter(a => a.type === "high").length}
            </p>
          </Card>
          <Card className="p-3 bg-yellow-50 border-yellow-200">
            <p className="text-xs text-yellow-700">Moderadas</p>
            <p className="text-yellow-900 mt-1">
              {alerts.filter(a => a.type === "medium").length}
            </p>
          </Card>
          <Card className="p-3 bg-green-50 border-green-200">
            <p className="text-xs text-green-700">Favorables</p>
            <p className="text-green-900 mt-1">
              {alerts.filter(a => a.type === "safe").length}
            </p>
          </Card>
        </div>
      </div>

      {/* Lista de alertas */}
      <div className="px-4">
        <h2 className="mb-3 text-gray-800">Notificaciones Recientes</h2>
        <div className="flex flex-col gap-3">
          {alerts.map((alert) => {
            const Icon = alert.icon;
            const colors = {
              high: "bg-red-50 border-red-300",
              medium: "bg-yellow-50 border-yellow-300",
              safe: "bg-green-50 border-green-300"
            };
            const iconColors = {
              high: "bg-red-500",
              medium: "bg-yellow-500",
              safe: "bg-green-500"
            };
            const textColors = {
              high: "text-red-800",
              medium: "text-yellow-800",
              safe: "text-green-800"
            };
            const badgeColors = {
              high: "bg-red-100 text-red-800 border-red-300",
              medium: "bg-yellow-100 text-yellow-800 border-yellow-300",
              safe: "bg-green-100 text-green-800 border-green-300"
            };

            return (
              <Card key={alert.id} className={`p-4 border-2 ${colors[alert.type as keyof typeof colors]}`}>
                <div className="flex items-start gap-3">
                  <div className={`p-2 ${iconColors[alert.type as keyof typeof iconColors]} rounded-lg shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className={`${textColors[alert.type as keyof typeof textColors]}`}>
                        {alert.title}
                      </h3>
                      {alert.type === "high" && (
                        <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
                      )}
                    </div>
                    
                    <p className={`text-sm mb-2 ${textColors[alert.type as keyof typeof textColors]} opacity-80`}>
                      {alert.description}
                    </p>
                    
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <Badge variant="outline" className="text-xs">
                        📍 {alert.location}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        🕐 {alert.time}
                      </Badge>
                    </div>

                    <div className={`p-2 rounded-lg ${badgeColors[alert.type as keyof typeof badgeColors]} mb-2`}>
                      <p className="text-xs">
                        <span className="opacity-70">Pronóstico:</span> {alert.forecast}
                      </p>
                    </div>

                    <div className="bg-white/50 p-2 rounded">
                      <p className="text-xs opacity-70 mb-1">💡 Recomendación:</p>
                      <p className="text-xs">{alert.recommendation}</p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}