import type { Evento, EventoAPI } from "../constants/eventosTypes";

export function eventoToEventoApi(evento: Evento): EventoAPI {
  return {
    id_event: evento.id,
    name_event: evento.nombre,
    fecha: evento.fecha,
    cantidad_puestos: evento.asientos,
  };
}
export function eventoApiToEvento(eventoAPI: EventoAPI): Evento {
  return {
    id: eventoAPI.id_event,
    nombre: eventoAPI.name_event,
    fecha: eventoAPI.fecha,
    asientos: eventoAPI.cantidad_puestos,
  };
}
