import { useFiltroBusqueda } from "@events/hooks/useFiltroBusqueda";
import { Search } from "./icons/Search";
import type { Evento } from "@events/constants/eventosTypes";

interface Props {
  buscarEvento: string;
  handleBuscar: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function BarraBusqueda({ buscarEvento, handleBuscar }: Props) {
  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar eventos..."
          value={buscarEvento}
          onChange={handleBuscar}
          className="w-full py-3 px-4 pr-12 text-gray-700 bg-white border border-indigo-300 rounded-full focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          aria-label="Buscar eventos"
        />
        <button
          className="absolute right-0 top-0 mt-3 mr-4 text-indigo-600 hover:text-indigo-800 cursor-default"
          aria-label="Realizar búsqueda"
        >
          <Search className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
