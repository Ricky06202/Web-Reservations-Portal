import { useAuthStore } from "@authentication/stores/authStore";
import { getEventos } from "@events/services/eventosAPI";
import { useEventosStore } from "@events/stores/eventosStore";
import { useEffect } from "react";

export function useEventos(token: string) {
  const eventos = useEventosStore((state) => state.eventos);
  const setEventos = useEventosStore((state) => state.setEventos);

  useEffect(() => {
    getEventos(token).then((eventos) => {
      setEventos(eventos);
    });
  }, []);
  return eventos;
}
