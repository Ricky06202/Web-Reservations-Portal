import { getAsientos } from "@reservations/services/reservasAPI";
import { useAsientosStore } from "@reservations/stores/asientosStore";
import { useEffect } from "react";

export function useAsientos() {
  const setAsientos = useAsientosStore((state) => state.setAsientos);
  const asientos = useAsientosStore((state) => state.asientos);

  useEffect(() => {
    getAsientos().then((data) => setAsientos(data));
  }, []);

  return asientos;
}
