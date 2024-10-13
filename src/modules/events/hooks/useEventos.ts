import { getEventos } from "@events/services/eventosAPI";
import { useEventosStore } from "@events/stores/eventosStore";
import { useEffect } from "react";

export function useEventos() {
  const eventos = useEventosStore((state) => state.eventos);
  const setEventos = useEventosStore((state) => state.setEventos);
  useEffect(() => {
    getEventos().then((eventos) => {
      setEventos(eventos);
    });
  }, []);
  return eventos;
}
