import { DataBase } from "./icons/DataBase";
import { Message } from "./icons/Message";
import { User } from "./icons/User";
import { WebSocket } from "./icons/WebSocket";
import { History } from "./icons/History";
import { AstroIcon } from "./icons/AstroIcon";
import { Docker } from "./icons/Docker";

const iconComponents = {
  "Base de datos": DataBase,
  Notificaciones: Message,
  Autenticacion: User,
  WebSocket: WebSocket,
  Historial: History,
  Astro: AstroIcon,
  Docker: Docker,
};

export default function RolesComponente({ key, nombre, rol, icon, color }) {
  const IconComponent = iconComponents[icon] || (() => null);
  return (
    <div
      key={key}
      className="w-full max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{nombre}</h3>
            <span
              className="inline-block px-2 py-1 text-xs font-semibold rounded-full mt-1"
              style={{
                backgroundColor: `${color}22`,
                color: color,
                borderWidth: "1px",
                borderColor: color,
              }}
            >
              {rol}
            </span>
          </div>
          <div className="bg-gray-100 p-3 rounded-full">
            <IconComponent className="w-6 h-6 text-gray-600" />
          </div>
        </div>
        <p className="text-sm text-gray-600">Especialista en {icon}</p>
      </div>
    </div>
  );
}
