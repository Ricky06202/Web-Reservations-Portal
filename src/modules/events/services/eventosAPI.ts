import type { Evento } from "@events/constants/eventosTypes";
import { eventosApiToEventos } from "@events/logic/typesConversion";

export function getEventos(): Promise<Evento[] | null> {
  return fetch("http://localhost:8000/api/eventos/")
    .then((res) => res.json())
    .then((data) => eventosApiToEventos(data))
    .catch((error) => {
      console.error(error);
      return null;
    });
}
