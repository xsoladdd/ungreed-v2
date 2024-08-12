import type {} from "@redux-devtools/extension";
import { create } from "zustand";
import { GlobalAlertP } from "./GlobalAlert";

interface useGlobalAlertContextT {
  count: number;
  props: GlobalAlertP;
  inc: () => void;
  setProps: (key: keyof GlobalAlertP, value: any) => void;
  createAlert: (v: GlobalAlertP) => void;
  resetProps: () => void;
}
const defaultProps = {
  isOpen: false,
  isLoading: false,
};

export const useGlobalAlertContext = create<useGlobalAlertContextT>((set) => ({
  count: 1,
  props: { ...defaultProps },
  inc: () => set((state) => ({ count: state.count + 1 })),
  setProps: (key, val) =>
    set((state) => {
      return {
        ...state,
        props: {
          ...(key === "isOpen" && val === false ? state.props : defaultProps),
          [key]: val,
        },
      };
    }),
  createAlert: (v) =>
    set((state) => ({
      ...state,
      props: {
        ...state.props,
        ...v,
      },
    })),
  resetProps: () =>
    set((state) => ({
      ...state,
      props: {
        ...defaultProps,
      },
    })),
}));
