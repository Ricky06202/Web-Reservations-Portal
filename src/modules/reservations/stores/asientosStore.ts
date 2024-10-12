import type { Asiento } from "@reservations/constants/reservasTypes";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AsientosState {
  asientos: Asiento[] | null;
  setAsientos: (asientos: Asiento[] | null) => void;
}
export const useAsientosStore = create<AsientosState>()(
  persist(
    (set) => ({
      asientos: null,
      setAsientos: (asientos) => {
        set({ asientos });
      },
    }),
    { name: "asientos-store" },
  ),
);
