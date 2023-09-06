import { create } from "zustand";

type userType = {
  token: string;
  user: {
    name: string;
    email: string;
    phone_number: string;
    state: string;
  };
};

interface AuthState {
  user: userType | null;
  setUser: (data: userType) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth") || "{}")
    : null,
  setUser: (data: userType) => set({ user: data }),
}));

export default useAuthStore;
