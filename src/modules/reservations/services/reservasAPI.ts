import type { Asiento } from "@reservations/constants/reservasTypes";

export function getAsientos(): Promise<Asiento[] | null> {
  return fetch("http://localhost:8000/api/reservas/")
    .then((res) => res.json())
    .then((data) =>
      data.map((asiento: any) => ({
        id: asiento.id_reserva,
        idEvento: asiento.id_event,
        idUsuario: asiento.id_user,
        usuario: asiento.user,
        asiento: asiento.numero_asiento,
        ocupado: asiento.asiento_ocupado,
      })),
    )
    .catch((error) => {
      console.error(error);
      return null;
    });
}
