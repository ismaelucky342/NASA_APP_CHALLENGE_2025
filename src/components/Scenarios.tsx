import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Slider } from "./ui/slider";
import { 
  CloudRain, 
  Droplets, 
  Thermometer, 
  Sprout, 
  Shield, 
  TrendingUp,
  AlertCircle,
  CheckCircle,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

export function Scenarios() {
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [rainfallLevel, setRainfallLevel] = useState([65]);

  const scenarios = [
    {
      id: "spring",
      name: "Primavera 2025",
      season: "Próximos 3 meses",
      risk: "medium",
      riskLabel: "Riesgo Moderado",
      temperature: "18-25°C",
      rainfall: "45-65mm/mes",
      predictions: [
        { aspect: "Lluvia", value: 62, status: "good" },
        { aspect: "Temperatura", value: 78, status: "good" },
        { aspect: "Heladas", value: 15, status: "warning" },
        { aspect: "Sequía", value: 25, status: "warning" }
      ]
    },
    {
      id: "summer",
      name: "Verano 2025",
      season: "Dentro de 4-6 meses",
      risk: "high",
      riskLabel: "Riesgo Alto",
      temperature: "28-38°C",
      rainfall: "20-35mm/mes",
      predictions: [
        { aspect: "Lluvia", value: 35, status: "bad" },
        { aspect: "Temperatura", value: 88, status: "bad" },
        { aspect: "Heladas", value: 5, status: "good" },
        { aspect: "Sequía", value: 75, status: "bad" }
      ]
    },
    {
      id: "autumn",
      name: "Otoño 2025",
      season: "Dentro de 7-9 meses",
      risk: "safe",
      riskLabel: "Condiciones Favorables",
      temperature: "15-22°C",
      rainfall: "55-75mm/mes",
      predictions: [
        { aspect: "Lluvia", value: 82, status: "good" },
        { aspect: "Temperatura", value: 72, status: "good" },
        { aspect: "Heladas", value: 25, status: "warning" },
        { aspect: "Sequía", value: 18, status: "good" }
      ]
    }
  ];

  const recommendations = [
    {
      id: 1,
      icon: Droplets,
      title: "Riego inteligente",
      description: "Incrementar frecuencia de riego +25% durante julio-agosto",
      priority: "high",
      impact: "+12% rendimiento esperado"
    },
    {
      id: 2,
      icon: Sprout,
      title: "Ajuste de siembra",
      description: "Adelantar siembra de maíz 15 días para evitar estrés térmico",
      priority: "high",
      impact: "Reducir riesgo 40%"
    },
    {
      id: 3,
      icon: Shield,
      title: "Protección de cultivos",
      description: "Instalar mallas de sombreo en parcela sur durante verano",
      priority: "medium",
      impact: "Proteger 85% de la cosecha"
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Fertilización adaptada",
      description: "Aplicar fertilizantes de liberación lenta antes de primavera",
      priority: "medium",
      impact: "+8% eficiencia nutricional"
    }
  ];

  const getRiskColor = (risk: string) => {
    const colors = {
      high: "bg-red-500",
      medium: "bg-yellow-500",
      safe: "bg-green-500"
    };
    return colors[risk as keyof typeof colors];
  };

  const getStatusColor = (status: string) => {
    const colors = {
      good: "text-green-600",
      warning: "text-yellow-600",
      bad: "text-red-600"
    };
    return colors[status as keyof typeof colors];
  };

  return (
    <div className="flex flex-col gap-4 pb-20 p-3">
      {/* Header */}
      <div className="mb-6 p-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl shadow-xl shadow-blue-500/30 animate-fade-in">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold">
            Simulación de Escenarios
            <br />
            <span className="text-sm text-cyan-100 font-normal">Predicción estacional con IA</span>
          </h1>
        </div>
      </div>

      {/* Predicciones estacionales */}
      <div className="px-4">
        <h2 className="mb-3 text-gray-800">Predicciones Estacionales</h2>
        <div className="flex flex-col gap-3">
          {scenarios.map((scenario) => (
            <Card 
              key={scenario.id}
              className={`p-4 cursor-pointer transition-all border-2 ${
                selectedScenario === scenario.id 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => setSelectedScenario(scenario.id)}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-gray-800">{scenario.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{scenario.season}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${getRiskColor(scenario.risk)}`} />
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline" className="text-xs">
                  🌡️ {scenario.temperature}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  💧 {scenario.rainfall}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {scenario.predictions.map((pred, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-xs text-gray-600">{pred.aspect}</p>
                      <p className={`text-xs ${getStatusColor(pred.status)}`}>
                        {pred.value}%
                      </p>
                    </div>
                    <Progress value={pred.value} className="h-1.5" />
                  </div>
                ))}
              </div>

              {selectedScenario === scenario.id && (
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <Badge className={getRiskColor(scenario.risk) + " text-white"}>
                    {scenario.riskLabel}
                  </Badge>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Simulador interactivo */}
      <div className="px-4">
        <Card className="p-4 bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200">
          <h3 className="text-indigo-900 mb-3">Simulador de Escenarios</h3>
          <p className="text-sm text-indigo-700 mb-4">
            Ajusta las condiciones para ver el impacto en tus cultivos
          </p>

          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm text-indigo-900">Precipitación mensual (mm)</label>
                <Badge variant="outline">{rainfallLevel[0]}mm</Badge>
              </div>
              <Slider
                value={rainfallLevel}
                onValueChange={setRainfallLevel}
                max={150}
                min={0}
                step={5}
                className="mb-2"
              />
              <div className="flex justify-between text-xs text-indigo-600">
                <span>0mm</span>
                <span>150mm</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-4">
              <Card className="p-2 text-center bg-white border-indigo-200">
                <p className="text-xs text-gray-600 mb-1">Rendimiento</p>
                <p className="text-indigo-900">
                  {rainfallLevel[0] >= 50 && rainfallLevel[0] <= 80 ? "Alto" : 
                   rainfallLevel[0] >= 30 && rainfallLevel[0] < 50 ? "Medio" : 
                   rainfallLevel[0] >= 80 && rainfallLevel[0] <= 100 ? "Medio" : "Bajo"}
                </p>
              </Card>
              <Card className="p-2 text-center bg-white border-indigo-200">
                <p className="text-xs text-gray-600 mb-1">Riesgo</p>
                <p className="text-indigo-900">
                  {rainfallLevel[0] >= 50 && rainfallLevel[0] <= 80 ? "Bajo" : 
                   rainfallLevel[0] >= 30 && rainfallLevel[0] < 50 ? "Medio" : "Alto"}
                </p>
              </Card>
              <Card className="p-2 text-center bg-white border-indigo-200">
                <p className="text-xs text-gray-600 mb-1">Riego extra</p>
                <p className="text-indigo-900">
                  {rainfallLevel[0] < 40 ? "Sí" : "No"}
                </p>
              </Card>
            </div>
          </div>
        </Card>
      </div>

      {/* Recomendaciones de acción */}
      <div className="px-4">
        <h2 className="mb-3 text-gray-800">Recomendaciones IA</h2>
        <div className="flex flex-col gap-3">
          {recommendations.map((rec) => {
            const Icon = rec.icon;
            const priorityColors = {
              high: "border-red-300 bg-red-50",
              medium: "border-yellow-300 bg-yellow-50"
            };
            const iconColors = {
              high: "bg-red-500",
              medium: "bg-yellow-500"
            };

            return (
              <Card 
                key={rec.id} 
                className={`p-4 border-2 ${priorityColors[rec.priority as keyof typeof priorityColors]}`}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 ${iconColors[rec.priority as keyof typeof iconColors]} rounded-lg shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-gray-800">{rec.title}</h4>
                      {rec.priority === "high" ? (
                        <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                      ) : (
                        <CheckCircle className="w-5 h-5 text-yellow-600 shrink-0" />
                      )}
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{rec.description}</p>
                    <Badge variant="secondary" className="text-xs">
                      💡 {rec.impact}
                    </Badge>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Indicadores de riesgo */}
      <div className="px-4">
        <Card className="p-4 bg-gradient-to-br from-slate-50 to-gray-100">
          <h3 className="text-gray-800 mb-4">Indicadores de Riesgo Global</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <Thermometer className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm text-gray-700">Riesgo térmico</p>
                  <Badge className="bg-green-500 text-white">Bajo</Badge>
                </div>
                <Progress value={25} className="h-2" />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                <CloudRain className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm text-gray-700">Riesgo hídrico</p>
                  <Badge className="bg-yellow-500 text-white">Medio</Badge>
                </div>
                <Progress value={55} className="h-2" />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm text-gray-700">Salud de cultivos</p>
                  <Badge className="bg-green-500 text-white">Óptima</Badge>
                </div>
                <Progress value={85} className="h-2" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}