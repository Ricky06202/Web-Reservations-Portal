import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthState {
  token: string | null;
  username: string | null;
  email: string | null;
  id: number | null;
  setUser: (
    token: string | null,
    id: number | null,
    username: string | null,
    email: string | null,
  ) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      username: null,
      email: null,
      id: null,
      setUser: (token, id, username, email) =>
        set({ token, id, username, email }),
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
