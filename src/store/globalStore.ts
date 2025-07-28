import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface GlobalState {
  // User Data
  user: null | {
    id: string;
    email: string;
  };

  setUser: (user: GlobalState["user"]) => void;
  clearUser: () => void;

  // Reset store
  reset: () => void;
}

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: null,
};

export const useGlobalStore = create<GlobalState>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,

        setUser: (user) => set({ user }, false, "setUser"),

        clearUser: () => set({ user: null }, false, "clearUser"),

        reset: () => set({ ...initialState }, false, "reset"),
      }),
      {
        name: "global-store", // localStorage key
      }
    ),
    {
      name: "global-store",
    }
  )
);
