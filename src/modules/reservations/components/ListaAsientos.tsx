import { useState } from "react";
import AsientoCard from "./AsientoCard";

interface Asiento {
  id: number;
  numeroAsiento: number;
  ocupado: boolean;
  nombreReserva?: string;
}
export default function ListaAsientos() {
  const [filtro, setFiltro] = useState<"todos" | "disponibles" | "ocupados">(
    "todos",
  );

  const asientos: Asiento[] = [
    { id: 1, numeroAsiento: 1, ocupado: false },
    { id: 2, numeroAsiento: 2, ocupado: true, nombreReserva: "Juan Pérez" },
    { id: 3, numeroAsiento: 3, ocupado: false },
    { id: 4, numeroAsiento: 4, ocupado: true, nombreReserva: "María García" },
    { id: 5, numeroAsiento: 5, ocupado: false },
    { id: 6, numeroAsiento: 6, ocupado: false },
  ];

  const asientosFiltrados = asientos.filter((asiento) => {
    if (filtro === "todos") return true;
    if (filtro === "disponibles") return !asiento.ocupado;
    if (filtro === "ocupados") return asiento.ocupado;
    return true;
  });

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Asientos</h1>
      <div className="mb-4">
        <label htmlFor="filtro" className="mr-2">
          Filtrar por:
        </label>
        <select
          id="filtro"
          value={filtro}
          onChange={(e) =>
            setFiltro(e.target.value as "todos" | "disponibles" | "ocupados")
          }
          className="border rounded p-2"
        >
          <option value="todos">Todos</option>
          <option value="disponibles">Disponibles</option>
          <option value="ocupados">Ocupados</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {asientosFiltrados.map((asiento) => (
          <AsientoCard
            key={asiento.id}
            numeroAsiento={asiento.numeroAsiento}
            ocupado={asiento.ocupado}
            nombreReserva={asiento.nombreReserva}
          />
        ))}
      </div>
    </div>
  );
}
