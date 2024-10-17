import type { Evento, EventoAPI } from "@events/constants/eventosTypes";
import {
  eventoApiToEvento,
  eventoToEventoApi,
} from "@events/logic/typesConversion";

export function getEventos(token: string): Promise<Evento[] | null> {
  return fetch("http://localhost:8000/api/eventos/", {
    method: "GET",
    headers: {
      Authorization: `token ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data.map((evento: EventoAPI) => eventoApiToEvento(evento)))
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export function postEvento(evento: Evento, token: string) {
  return fetch("http://localhost:8000/api/eventos/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${token}`,
    },
    body: JSON.stringify(eventoToEventoApi(evento)),
  })
    .then((res) => res)
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export function putEvento(evento: Evento, token: string) {
  return fetch(`http://localhost:8000/api/eventos/${evento.id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${token}`,
    },
    body: JSON.stringify(eventoToEventoApi(evento)),
  })
    .then((res) => res)
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export function deleteEvento(evento: Evento, token: string) {
  return fetch(`http://localhost:8000/api/eventos/${evento.id}/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${token}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      console.error(error);
      return null;
    });
}
