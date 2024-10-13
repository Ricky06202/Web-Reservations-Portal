import type { Evento } from "@events/constants/eventosTypes";
import { Calendar } from "./icons/Calendar";
import { Users } from "./icons/Users";

interface Props {
  evento: Evento;
}

export default function EventCard({ evento }: Props) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="bg-indigo-600 p-4 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold text-white mb-1 text-left">
            {evento.nombre}
          </h3>
          <div className="flex items-center text-indigo-100">
            <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
            <span className="text-sm">{evento.fecha}</span>
          </div>
        </div>
        <span className="bg-white text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
          Evento
        </span>
      </div>
      <div className="p-4">
        {/* <div className="flex items-center text-gray-600 mb-2">
          <Clock className="w-4 h-4 mr-2" aria-hidden="true" />
          <span className="text-sm">{hora}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-2" aria-hidden="true" />
          <span className="text-sm">{lugar}</span>
        </div> */}
        <div className="flex items-center text-gray-600">
          <Users className="w-4 h-4 mr-2" aria-hidden="true" />
          <span className="text-sm">
            {evento.asientos} asientos disponibles
          </span>
        </div>
      </div>
    </div>
  );
}
