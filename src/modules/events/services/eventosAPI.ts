import type { Evento, EventoAPI } from "@events/constants/eventosTypes";
import {
  eventoApiToEvento,
  eventoToEventoApi,
} from "@events/logic/typesConversion";

export function getEventos(): Promise<Evento[] | null> {
  return fetch("http://localhost:8000/api/eventos/")
    .then((res) => res.json())
    .then((data) => data.map((evento: EventoAPI) => eventoApiToEvento(evento)))
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export function postEvento(evento: Evento) {
  return fetch("http://localhost:8000/api/eventos/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventoToEventoApi(evento)),
  })
    .then((res) => res)
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export function putEvento(evento: Evento) {
  return fetch(`http://localhost:8000/api/eventos/${evento.id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventoToEventoApi(evento)),
  })
    .then((res) => res)
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export function deleteEvento(evento: Evento) {
  return fetch(`http://localhost:8000/api/eventos/${evento.id}/`, {
    method: "DELETE",
  })
    .then((res) => res)
    .catch((error) => {
      console.error(error);
      return null;
    });
}
