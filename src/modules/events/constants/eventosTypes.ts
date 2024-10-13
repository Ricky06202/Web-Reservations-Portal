export interface Evento {
  id?: number;
  nombre: string;
  fecha: string;
  asientos?: number;
}

export interface EventoAPI {
  id_event?: number;
  name_event: string;
  fecha: string;
  cantidad_puestos?: number;
}
