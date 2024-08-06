import type {} from "@redux-devtools/extension";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { SessionSlice, createSessionSlice } from "./slices/sessionSlice";

interface ZustandStore extends SessionSlice {}

export const useZustand = create<ZustandStore>()(
  devtools(
    persist(
      (...a) => ({
        ...createSessionSlice(...a),
      }),
      {
        name: "bearStore",
        partialize: (state) => ({
          user: state.user,
        }),
      }
    )
  )
);
