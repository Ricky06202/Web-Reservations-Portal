export interface Asiento {
  id?: number;
  idEvento: number;
  idUsuario: number;
  usuario?: string;
  asiento: number;
  ocupado: boolean;
}

export interface Reserva {
  id_reserva?: number;
  id_event: number;
  id_user: number;
  user?: string;
  numero_asiento: number;
  asiento_ocupado: boolean;
}
