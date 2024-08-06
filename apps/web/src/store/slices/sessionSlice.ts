import { SessionUser } from "@/types/globa";
import { StateCreator } from "zustand";

export type SessionSlice = {
  user: SessionUser;
  setUser: (user: SessionUser) => void;
  resetUser: () => void;
};
const defaultUserData = { email: "", id: "", dbData: {} };
export const createSessionSlice: StateCreator<
  SessionSlice,
  [],
  [],
  SessionSlice
> = (set) => ({
  user: { ...defaultUserData },
  setUser: (user) => set((old) => ({ user: { ...old.user, ...user } })),
  resetUser: () => set((old) => ({ user: { ...old, ...defaultUserData } })),
});
