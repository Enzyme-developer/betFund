import { create } from "zustand";

interface ModalState {
  isSignup: boolean;
  isLogin: boolean;
  openSignupModal: (by: boolean) => void;
  closeSignupModal: (by: boolean) => void;
  openLoginModal: (by: boolean) => void;
  closeLoginModal: (by: boolean) => void;
}

const useModalStore = create<ModalState>((set) => ({
  isSignup: false,
  isLogin: false,
  openSignupModal: () => set({ isSignup: true }),
  closeSignupModal: () => set({ isSignup: false }),
  openLoginModal: () => set({ isLogin: true }),
  closeLoginModal: () => set({ isLogin: false }),
}));

export default useModalStore;
