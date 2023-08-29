import { create } from "zustand";

interface FormState {
  formData: any;
  cashoutData: any;
  setFormData: (data: FormData) => void;
  setCashoutData: (data: FormData) => void;
  step: number;
  setStep: (step: number) => void;
  cashoutStep: number;
  setCashoutStep: (step: number) => void;
}

const useFormStore = create<FormState>((set) => ({
  formData: {
    password: "",
    otp: "",
    phoneNumber: "",
    name: "",
    email: "",
    state: "",
  },
  setFormData: (data: FormData) => set({ formData: data }),
  cashoutData: {
    name: "",
    bankName: "",
    accountNumber: "",
    otp: ""
  },
  setCashoutData: (data: FormData) => set({ cashoutData: data }),
  step: 1,
  setStep: (step: number) => set({ step: step }),
  cashoutStep: 1,
  setCashoutStep: (step: number) => set({ cashoutStep: step }),
}));

export default useFormStore;
