import type { Evento } from "@events/constants/eventosTypes";
import { useState } from "react";

export function useFiltroBusqueda(eventos: Evento[] | null) {
  const [buscarEvento, setBuscarEvento] = useState("");
  const handleBuscar = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBuscarEvento(event.target.value);
  };

  const filtrarEventos = eventos?.filter((evento) => {
    return evento.nombre.toLowerCase().includes(buscarEvento.toLowerCase());
  });

  return { filtrarEventos, handleBuscar, buscarEvento };
}
