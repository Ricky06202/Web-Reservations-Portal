import type { Asiento } from "@reservations/constants/reservasTypes";
import { useState } from "react";

export function useFiltroEstado(asientos: Asiento[] | null | undefined) {
  const [filtro, setFiltro] = useState<"todos" | "disponibles" | "ocupados">(
    "todos",
  );
  const asientosFiltrados = asientos?.filter((asiento) => {
    if (filtro === "todos") return true;
    if (filtro === "disponibles") return !asiento.ocupado;
    if (filtro === "ocupados") return asiento.ocupado;
    return true;
  });
  return { filtro, setFiltro, asientosFiltrados };
}
