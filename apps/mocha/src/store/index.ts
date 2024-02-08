import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension";
import { BearSlice } from "./slices/bearSlice";
import { createBearSlice } from "./slices/bearSlice";
import { createSessionSlice } from "./slices/sessionSlice";
import { SessionSlice } from "./slices/sessionSlice";

export const useZustand = create<BearSlice & SessionSlice>()(
  devtools(
    persist(
      (...a) => ({
        ...createBearSlice(...a),
        ...createSessionSlice(...a),
      }),
      { name: "bearStore" }
    )
  )
);
