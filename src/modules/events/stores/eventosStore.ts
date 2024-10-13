import type { Evento } from "@events/constants/eventosTypes";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface EventosState {
  eventos: Evento[] | null;
  setEventos: (eventos: Evento[] | null) => void;
}

export const useEventosStore = create<EventosState>()(
  persist(
    (set) => ({
      eventos: null,
      setEventos: (eventos) => set({ eventos }),
    }),
    { name: "eventos-store" },
  ),
);
