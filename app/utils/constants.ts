"use client";
import * as z from "zod";
import { bankErrorType, errorType, formType } from "../types/formType";

export const formSchema = z.object({
  password: z
    .string()
    .min(2, { message: "Password must be at least 4 characters." })
    .max(50),
  mobile: z.string().min(2, { message: "Mobile Number is Required" }),
});


export const initialState: formType = {
    password: "",
    name: "",
    email: "",
    state: "",
  };

  export  const initialErrorState: errorType = {
    password: "",
    otp: "",
    phoneNumber: "",
    name: "",
    email: "",
    state: "",
  };


  export  const initialBankErrorState: bankErrorType = {
    name: "",
    otp: "",
    accountNumber: "",
    bankName: "",
  };