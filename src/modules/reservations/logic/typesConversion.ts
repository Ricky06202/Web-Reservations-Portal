import type { Asiento, Reserva } from "@reservations/constants/reservasTypes";

export function reservaToAsiento(reserva: Reserva): Asiento {
  return {
    id: reserva.id_reserva,
    idEvento: reserva.id_event,
    idUsuario: reserva.id_user,
    usuario: reserva.user,
    asiento: reserva.numero_asiento,
    ocupado: reserva.asiento_ocupado,
  };
}

export function asientoToReserva(asiento: Asiento): Reserva {
  return {
    id_reserva: asiento.id,
    id_event: asiento.idEvento,
    id_user: asiento.idUsuario,
    user: asiento.usuario,
    numero_asiento: asiento.asiento,
    asiento_ocupado: asiento.ocupado,
  };
}
