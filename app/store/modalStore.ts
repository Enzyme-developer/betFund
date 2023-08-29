import { create } from "zustand";

interface ModalState {
  cashoutModal: boolean;
  lostModal: boolean;
  betModal: boolean;
  accountModal: boolean;
  openModal: (by: string) => void;
  closeModal: (by: string) => void;
}

const useModalStore = create<ModalState>((set) => ({
  cashoutModal: false,
  lostModal: false,
  betModal: false,
  accountModal: false,
  openModal: (modalName) => set({ [modalName]: true }),
  closeModal: (modalName) => set({ [modalName]: false }),
}));

export default useModalStore;
