import { Card } from "./ui/card";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  MapPin, 
  Bell, 
  Wifi, 
  Satellite,
  Trash2,
  Plus,
  User,
  Settings as SettingsIcon,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

interface SettingsProps {
  onClose: () => void;
}

export function Settings({ onClose }: SettingsProps) {
  const [notifications, setNotifications] = useState({
    alertasAltas: true,
    alertasMedias: true,
    pronósticos: true,
    recomendaciones: false,
    sensores: true
  });

  const parcelas = [
    { id: 1, name: "Parcela Norte", crop: "Trigo", area: "12.5 ha", sensors: 4, status: "active" },
    { id: 2, name: "Parcela Sur", crop: "Maíz", area: "18.2 ha", sensors: 6, status: "active" },
    { id: 3, name: "Parcela Este", crop: "Soja", area: "15.8 ha", sensors: 5, status: "active" },
    { id: 4, name: "Parcela Oeste", crop: "Girasol", area: "10.3 ha", sensors: 3, status: "inactive" }
  ];

  const ganado = [
    { id: 1, type: "Bovino", count: 45, location: "Potrero A" },
    { id: 2, type: "Ovino", count: 120, location: "Potrero B" }
  ];

  const sensors = [
    { id: 1, name: "Sensor Humedad #1", location: "Parcela Norte", status: "online", battery: 85 },
    { id: 2, name: "Sensor Temp #2", location: "Parcela Sur", status: "online", battery: 92 },
    { id: 3, name: "Sensor Multi #3", location: "Parcela Este", status: "online", battery: 78 },
    { id: 4, name: "Pluviómetro #1", location: "Parcela Oeste", status: "offline", battery: 12 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-gray-50 p-4 pb-28">
      {/* Header mejorado */}
      <div className="mb-6 p-6 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl shadow-xl shadow-green-500/30 animate-fade-in">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-white/20 rounded-xl">
            <SettingsIcon className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Ajustes</h1>
            <p className="text-sm text-green-100 mt-1">Configuración de AgroIA</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4">
        {/* Perfil */}
        <Card className="p-6 border-2 border-green-200/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
              <User className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">Juan Pérez</h3>
              <p className="text-sm text-gray-600">Finca El Progreso</p>
              <Badge className="mt-2 bg-gradient-to-r from-green-500 to-green-600 text-white border-0 rounded-full px-3">
                Plan Premium
              </Badge>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </Card>

        {/* Gestión de parcelas */}
        <Card className="p-4 border-2 border-green-200/50 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-green-600" />
              <h2 className="font-semibold text-gray-800">Mis Parcelas</h2>
            </div>
            <Button size="sm" className="bg-green-600 hover:bg-green-700 rounded-xl">
              <Plus className="w-4 h-4 mr-1" />
              Agregar
            </Button>
          </div>

          <div className="flex flex-col gap-2">
            {parcelas.map((parcela) => (
              <Card key={parcela.id} className="p-3 border border-gray-200 rounded-xl hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-800">{parcela.name}</h4>
                    <p className="text-sm text-gray-600">{parcela.crop} • {parcela.area}</p>
                  </div>
                  <div className={`w-2 h-2 rounded-full ${
                    parcela.status === 'active' ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
                  }`} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <Wifi className="w-3 h-3" />
                    {parcela.sensors} sensores
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm" className="h-7 px-2 rounded-lg hover:bg-gray-100">
                      <SettingsIcon className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 px-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg">
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        {/* Ganado */}
        <Card className="p-4 border-2 border-amber-200/50 rounded-2xl shadow-lg bg-amber-50/30">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-gray-800">Ganado</h2>
            <Button size="sm" variant="outline" className="rounded-xl">
              <Plus className="w-4 h-4 mr-1" />
              Agregar
            </Button>
          </div>

          <div className="flex flex-col gap-2">
            {ganado.map((animal) => (
              <Card key={animal.id} className="p-3 border-2 border-amber-200 bg-amber-50 rounded-xl hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-amber-900">{animal.type}</h4>
                    <p className="text-sm text-amber-700">
                      {animal.count} animales • {animal.location}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-amber-600" />
                </div>
              </Card>
            ))}
          </div>
        </Card>

        {/* Sensores IoT */}
        <Card className="p-4 border-2 border-blue-200/50 rounded-2xl shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <Wifi className="w-5 h-5 text-blue-600" />
            <h2 className="font-semibold text-gray-800">Sensores IoT</h2>
          </div>

          <div className="flex flex-col gap-2">
            {sensors.map((sensor) => (
              <Card key={sensor.id} className="p-3 rounded-xl hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-800">{sensor.name}</h4>
                    <p className="text-sm text-gray-600">{sensor.location}</p>
                  </div>
                  <Badge 
                    variant={sensor.status === 'online' ? 'default' : 'secondary'}
                    className={`rounded-full ${sensor.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}
                  >
                    {sensor.status === 'online' ? 'Online' : 'Offline'}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 ${
                        sensor.battery > 50 ? 'bg-green-500' : 
                        sensor.battery > 20 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${sensor.battery}%` }}
                    />
                  </div>
                  <p className="text-xs font-medium text-gray-600">{sensor.battery}%</p>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        {/* Datos satelitales */}
        <Card className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 bg-indigo-500 rounded-xl shadow-md">
              <Satellite className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-indigo-900">Datos Satelitales</h3>
              <p className="text-sm text-indigo-700">Sentinel-2 • Actualizado hoy</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white rounded-xl p-3 shadow-sm">
              <p className="text-xs text-gray-600 mb-1">NDVI promedio</p>
              <p className="text-lg font-bold text-indigo-900">0.78</p>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-sm">
              <p className="text-xs text-gray-600 mb-1">Cobertura</p>
              <p className="text-lg font-bold text-indigo-900">92%</p>
            </div>
          </div>
        </Card>

        {/* Preferencias de notificaciones */}
        <Card className="p-4 border-2 border-orange-200/50 rounded-2xl shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <Bell className="w-5 h-5 text-orange-600" />
            <h2 className="font-semibold text-gray-800">Notificaciones</h2>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-800 font-medium">Alertas de alto riesgo</p>
                <p className="text-xs text-gray-600">Heladas, sequías extremas</p>
              </div>
              <Switch
                checked={notifications.alertasAltas}
                onCheckedChange={(checked) => 
                  setNotifications({...notifications, alertasAltas: checked})
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-800 font-medium">Alertas de riesgo medio</p>
                <p className="text-xs text-gray-600">Estrés hídrico, temperaturas</p>
              </div>
              <Switch
                checked={notifications.alertasMedias}
                onCheckedChange={(checked) => 
                  setNotifications({...notifications, alertasMedias: checked})
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-800 font-medium">Pronósticos diarios</p>
                <p className="text-xs text-gray-600">Clima del día siguiente</p>
              </div>
              <Switch
                checked={notifications.pronósticos}
                onCheckedChange={(checked) => 
                  setNotifications({...notifications, pronósticos: checked})
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-800 font-medium">Recomendaciones IA</p>
                <p className="text-xs text-gray-600">Sugerencias de manejo</p>
              </div>
              <Switch
                checked={notifications.recomendaciones}
                onCheckedChange={(checked) => 
                  setNotifications({...notifications, recomendaciones: checked})
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-800 font-medium">Estado de sensores</p>
                <p className="text-xs text-gray-600">Batería baja, desconexiones</p>
              </div>
              <Switch
                checked={notifications.sensores}
                onCheckedChange={(checked) => 
                  setNotifications({...notifications, sensores: checked})
                }
              />
            </div>
          </div>
        </Card>

        {/* Acerca de */}
        <Card className="p-4 bg-gray-50 border-2 border-gray-200 rounded-2xl shadow-lg">
          <h3 className="font-semibold text-gray-800 mb-2">AgroIA v2.1.0</h3>
          <p className="text-sm text-gray-600 mb-4">
            Protección inteligente de cultivos con IA predictiva
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="text-xs rounded-lg hover:bg-gray-100">
              Ayuda
            </Button>
            <Button variant="outline" size="sm" className="text-xs rounded-lg hover:bg-gray-100">
              Términos
            </Button>
            <Button variant="outline" size="sm" className="text-xs rounded-lg hover:bg-gray-100">
              Privacidad
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}