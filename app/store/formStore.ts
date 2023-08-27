import { create } from "zustand";

interface FormState {
  formData: any;
  setFormData: (data: FormData) => void;
  step: number;
  setStep: (step: number) => void
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
  step: 1,
  setStep: (step: number) => set({ step: step }),
}));

export default useFormStore;
