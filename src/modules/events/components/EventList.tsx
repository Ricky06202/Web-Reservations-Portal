import Event from "@events/components/Event";
import { useEventos } from "@events/hooks/useEventos";
import { useFiltroBusqueda } from "@events/hooks/useFiltroBusqueda";
import BarraBusqueda from "./BarraBusqueda";
import { ModalButton } from "./ModalButton";

export default function EventList() {
  const user = window.sessionStorage.getItem("auth-store");
  const token = user ? JSON.parse(user).state.token : null;
  const eventos = useEventos(token!);
  const { filtrarEventos, handleBuscar, buscarEvento } =
    useFiltroBusqueda(eventos);
  if (eventos?.length === 0) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="flex flex-col items-center p-4 w-full">
      <div className="flex justify-between gap-10 w-full max-w-2xl mb-8">
        <BarraBusqueda
          handleBuscar={handleBuscar}
          buscarEvento={buscarEvento}
        />
        <ModalButton variant="create" />
      </div>
      <ul className="flex flex-col gap-4 w-full max-w-2xl ">
        {filtrarEventos &&
          filtrarEventos?.map((evento) => (
            <ModalButton key={evento.id} evento={evento}>
              <Event key={evento.id!} evento={evento} />
            </ModalButton>
          ))}
      </ul>
    </div>
  );
}
