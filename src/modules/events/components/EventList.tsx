import Event from "@events/components/Event";
import { useEventos } from "@events/hooks/useEventos";
import { useFiltroBusqueda } from "@events/hooks/useFiltroBusqueda";
import BarraBusqueda from "./BarraBusqueda";

export default function EventList() {
  const eventos = useEventos();
  const { filtrarEventos, handleBuscar, buscarEvento } =
    useFiltroBusqueda(eventos);
  if (eventos?.length === 0) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="flex flex-col items-center p-4 w-full">
      <BarraBusqueda handleBuscar={handleBuscar} buscarEvento={buscarEvento} />
      <ul className="flex flex-col gap-4 w-full max-w-2xl ">
        {filtrarEventos &&
          filtrarEventos?.map((evento) => (
            <Event key={evento.id} evento={evento} />
          ))}
      </ul>
    </div>
  );
}
