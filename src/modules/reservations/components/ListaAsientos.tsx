import { useFiltroEstado } from "@reservations/hooks/useFiltroEstado";
import AsientoCard from "./AsientoCard";
import { useAsientos } from "@reservations/hooks/useAsientos";
import { ModalButton } from "./ModalButton";
import type { Asiento } from "@reservations/constants/reservasTypes";

export default function ListaAsientos() {
  const asientos = useAsientos();
  const { filtro, setFiltro, asientosFiltrados } = useFiltroEstado(asientos);

  const handleAction = (asiento: Partial<Asiento>) => {
    console.log("Reservar asiento", asiento);
  };

  return (
    <div className="flex flex-col items-center p-4 gap-4">
      <h1 className="text-2xl font-bold">Lista de Asientos</h1>
      <div className="flex gap-4">
        <div>
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
        <ModalButton variant="create" onAction={handleAction} />
      </div>
      {asientosFiltrados && asientosFiltrados.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {asientosFiltrados.map((asiento) => (
            <ModalButton
              key={asiento.id}
              asiento={asiento}
              onAction={handleAction}
            >
              <AsientoCard
                key={asiento.id}
                numeroAsiento={asiento.asiento}
                ocupado={asiento.ocupado}
                nombreReserva={asiento.usuario}
              />
            </ModalButton>
          ))}
        </div>
      ) : (
        <p className="text-center ">No hay asientos disponibles</p>
      )}
    </div>
  );
}
