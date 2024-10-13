import type { Evento, EventoAPI } from "../constants/eventosTypes";

export function eventosToEventosApi(eventos: Evento[]): EventoAPI[] {
  return eventos.map((e) => ({
    id_event: e.id,
    name_event: e.nombre,
    fecha: e.fecha,
    cantidad_puestos: e.asientos,
  }));
}

export function eventosApiToEventos(eventosAPI: EventoAPI[]): Evento[] {
  return eventosAPI.map((e) => ({
    id: e.id_event,
    nombre: e.name_event,
    fecha: e.fecha,
    asientos: e.cantidad_puestos,
  }));
}
