import type { Reserva } from "@reservations/constants/reservasTypes";
import { reservaToAsiento } from "@reservations/logic/typesConversion";
import { getAsientos } from "@reservations/services/reservasAPI";
import { connectWebSocket } from "@reservations/services/webSocket";
import { useAsientosStore } from "@reservations/stores/asientosStore";
import { useEffect, useState } from "react";

export function useAsientos() {
  const setAsientos = useAsientosStore((state) => state.setAsientos);
  const asientos = useAsientosStore((state) => state.asientos);
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socketInstance = connectWebSocket();
    setSocket(socketInstance);
  }, []);

  if (socket) {
    socket.onmessage = (event) => {
      const asientos = JSON.parse(event.data).map((asiento: Reserva) =>
        reservaToAsiento(asiento),
      );
      setAsientos(asientos);
    };
  }

  return asientos;
}
