import { create } from "zustand";

type userType = {
  name: string;
  email: string;
  phone_number: string;
  state: string;
};

interface AuthState {
  user: userType;
  setUser: (data: userType) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth") || "{}").user
    : null,
  setUser: (data) => set({ user: data }),
}));

export default useAuthStore;
