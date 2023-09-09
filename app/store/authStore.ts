import { create } from "zustand";

type userType = {
  name: string;
  email: string;
  phone_number: string;
  state: string;
};

interface AuthState {
  user: userType | null;
  setUser: (data: userType) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (data) => set({ user: data }),
}));

export default useAuthStore;
