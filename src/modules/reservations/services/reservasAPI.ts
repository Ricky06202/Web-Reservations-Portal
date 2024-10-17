import type { Asiento, Reserva } from "@reservations/constants/reservasTypes";
import {
  asientoToReserva,
  reservaToAsiento,
} from "@reservations/logic/typesConversion";

export function getAsientos(): Promise<Asiento[] | null> {
  return fetch("http://localhost:8000/api/reservas/")
    .then((res) => res.json())
    .then((data) => data.map((reserva: Reserva) => reservaToAsiento(reserva)))
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export function postAsiento(asiento: Asiento, token: string) {
  return fetch("http://localhost:8000/api/reservas/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${token}`,
    },
    body: JSON.stringify(asientoToReserva(asiento)),
  })
    .then((res) => res)
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export function putAsiento(asiento: Asiento, token: string) {
  return fetch(`http://localhost:8000/api/reservas/${asiento.id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${token}`,
    },
    body: JSON.stringify(asientoToReserva(asiento)),
  })
    .then((res) => res)
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export function deleteAsiento(asiento: Asiento, token: string) {
  return fetch(`http://localhost:8000/api/reservas/${asiento.id}/`, {
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

export function makeReservation(
  asiento: Asiento,
  userId: number,
  username: string,
  token: string,
) {
  const nuevoAsiento: Asiento = {
    ...asiento,
    ocupado: !asiento.ocupado,
    idUsuario: userId,
    usuario: username,
  };
  return fetch(`http://localhost:8000/api/reservas/${asiento.id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${token}`,
    },
    body: JSON.stringify(asientoToReserva(nuevoAsiento)),
  })
    .then((res) => res)
    .catch((error) => {
      console.error(error);
      return null;
    });
}
