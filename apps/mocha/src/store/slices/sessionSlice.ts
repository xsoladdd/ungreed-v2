import { StateCreator } from "zustand";

export type SessionUser = {
  email: string;
  id: string;
};

export type SessionSlice = {
  user: SessionUser;
  setUser: (user: SessionUser) => void;
  resetUser: () => void;
};
export const createSessionSlice: StateCreator<
  SessionSlice,
  [],
  [],
  SessionSlice
> = (set) => ({
  user: { email: "", id: "" },
  setUser: (user) => set(() => ({ user })),
  resetUser: () => set(() => ({ user: { email: "", id: "" } })),
});
