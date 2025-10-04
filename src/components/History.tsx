import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";
import { TrendingUp, TrendingDown, Calendar } from "lucide-react";

export function History() {
  const yieldData = [
    { year: "2020", trigo: 3200, maiz: 5800, soja: 2900, temp: 22 },
    { year: "2021", trigo: 3500, maiz: 6100, soja: 3200, temp: 23 },
    { year: "2022", trigo: 2800, maiz: 5200, soja: 2600, temp: 25 },
    { year: "2023", trigo: 3800, maiz: 6500, soja: 3400, temp: 21 },
    { year: "2024", trigo: 4100, maiz: 6800, soja: 3600, temp: 22 }
  ];

  const monthlyData = [
    { month: "Ene", lluvia: 45, temp: 28, rendimiento: 85 },
    { month: "Feb", lluvia: 52, temp: 27, rendimiento: 88 },
    { month: "Mar", lluvia: 68, temp: 25, rendimiento: 92 },
    { month: "Abr", lluvia: 82, temp: 22, rendimiento: 95 },
    { month: "May", lluvia: 35, temp: 19, rendimiento: 78 },
    { month: "Jun", lluvia: 28, temp: 16, rendimiento: 72 }
  ];

  const comparativeData = [
    { cultivo: "Trigo", actual: 4100, promedio: 3480, optimo: 4500 },
    { cultivo: "Maíz", actual: 6800, promedio: 6080, optimo: 7200 },
    { cultivo: "Soja", actual: 3600, promedio: 3140, optimo: 3800 }
  ];

  return (
    <div className="flex flex-col gap-4 pb-20 p-3">
      {/* Header */}
      <div className="mb-6 p-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl shadow-xl shadow-indigo-500/30 animate-fade-in">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold">
            Histórico y Rendimiento
            <br />
            <span className="text-sm text-purple-100 font-normal">Análisis de cosechas vs clima</span>
          </h1>
        </div>
      </div>

      {/* Resumen estadístico */}
      <div className="px-4">
        <div className="grid grid-cols-2 gap-3">
          <Card className="p-3 bg-gradient-to-br from-green-50 to-emerald-100 border-green-200">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <p className="text-xs text-green-700">Rendimiento 2024</p>
            </div>
            <p className="text-green-900">+18.5%</p>
            <p className="text-xs text-green-600 mt-1">vs promedio histórico</p>
          </Card>

          <Card className="p-3 bg-gradient-to-br from-blue-50 to-cyan-100 border-blue-200">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-4 h-4 text-blue-600" />
              <p className="text-xs text-blue-700">Mejor cosecha</p>
            </div>
            <p className="text-blue-900">2024</p>
            <p className="text-xs text-blue-600 mt-1">14,500 kg/ha total</p>
          </Card>
        </div>
      </div>

      {/* Rendimiento anual */}
      <div className="px-4">
        <Card className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-gray-800">Rendimiento Anual (kg/ha)</h3>
            <Badge variant="outline">2020-2024</Badge>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={yieldData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="year" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Line type="monotone" dataKey="trigo" stroke="#10b981" strokeWidth={2} name="Trigo" />
              <Line type="monotone" dataKey="maiz" stroke="#f59e0b" strokeWidth={2} name="Maíz" />
              <Line type="monotone" dataKey="soja" stroke="#8b5cf6" strokeWidth={2} name="Soja" />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Clima vs Rendimiento */}
      <div className="px-4">
        <Card className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-gray-800">Clima vs Rendimiento (2024)</h3>
            <Badge variant="outline">Últimos 6 meses</Badge>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Bar dataKey="lluvia" fill="#3b82f6" name="Lluvia (mm)" />
              <Bar dataKey="rendimiento" fill="#10b981" name="Rendimiento (%)" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Comparativa de cultivos */}
      <div className="px-4">
        <Card className="p-4">
          <h3 className="text-gray-800 mb-3">Comparativa por Cultivo (kg/ha)</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={comparativeData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis type="number" tick={{ fontSize: 12 }} />
              <YAxis dataKey="cultivo" type="category" width={60} tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Bar dataKey="actual" fill="#10b981" name="Actual 2024" />
              <Bar dataKey="promedio" fill="#94a3b8" name="Promedio 5 años" />
              <Bar dataKey="optimo" fill="#f59e0b" name="Óptimo teórico" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Análisis de correlación */}
      <div className="px-4">
        <h2 className="mb-3 text-gray-800">Correlaciones Climáticas</h2>
        <div className="flex flex-col gap-3">
          <Card className="p-4 bg-blue-50 border-blue-200">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-blue-900">Lluvia óptima</h4>
                <p className="text-sm text-blue-700 mt-1">
                  65-85mm mensuales incrementan rendimiento en 12-15%
                </p>
              </div>
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
          </Card>

          <Card className="p-4 bg-orange-50 border-orange-200">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-orange-900">Temperaturas extremas</h4>
                <p className="text-sm text-orange-700 mt-1">
                  Temp &gt;30°C o &lt;10°C reducen rendimiento hasta 20%
                </p>
              </div>
              <TrendingDown className="w-5 h-5 text-orange-600" />
            </div>
          </Card>

          <Card className="p-4 bg-purple-50 border-purple-200">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-purple-900">Estrés hídrico</h4>
                <p className="text-sm text-purple-700 mt-1">
                  Periodos secos &gt;15 días reducen cosecha 8-12%
                </p>
              </div>
              <TrendingDown className="w-5 h-5 text-purple-600" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}