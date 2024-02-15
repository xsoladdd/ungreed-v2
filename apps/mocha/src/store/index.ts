import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension";
import { BearSlice } from "./slices/bearSlice";
import { createBearSlice } from "./slices/bearSlice";
import { createSessionSlice } from "./slices/sessionSlice";
import { SessionSlice } from "./slices/sessionSlice";
import { DashboardSlice, createDashboardSlice } from "./slices/dashboardSlice";
import { FilterSlice, createFilterSlice } from "./slices/filterSlice";
import { createRefetchSlice, RefetchSlice } from "./slices/refetchSlice";

interface ZustandStore
  extends BearSlice,
    SessionSlice,
    DashboardSlice,
    FilterSlice,
    RefetchSlice {}

export const useZustand = create<ZustandStore>()(
  devtools(
    persist(
      (...a) => ({
        ...createBearSlice(...a),
        ...createSessionSlice(...a),
        ...createDashboardSlice(...a),
        ...createFilterSlice(...a),
        ...createRefetchSlice(...a),
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
