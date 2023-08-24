import { bankType, bookingType, formType } from "../types/formType";
import { isValidEmail } from "./emailValidation";

export const handleStepValidation = (
  formData: formType,
  phoneNumber: string,
  otp: string,
  step: number
) => {
  const stepErrors: any = {};
  const { name, email, password, state } = formData;
  if (step === 1) {
    if (!phoneNumber) {
      stepErrors.phoneNumber = "Phone Number is required";
    }
    if (!password) {
      stepErrors.password = "Password is required";
    }
  } else if (step === 2) {
    if (!otp) {
      stepErrors.otp = "OTP is required";
    }
  } else if (step === 3) {
    if (!name) {
      stepErrors.name = "Name is required";
    }
    if (!email) {
      stepErrors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      stepErrors.email = "Invalid email format";
    } else if (!state) {
      stepErrors.state = "State is required";
    }
  }
  return stepErrors;
};

export const handleLoginValidation = (
  formData: formType,
  phoneNumber: string
) => {
  const stepErrors: any = {};
  const { password } = formData;
  if (!phoneNumber) {
    stepErrors.phoneNumber = "Phone Number is required";
  }
  if (!password) {
    stepErrors.password = "Password is required";
  }

  return stepErrors;
};

export const handleCashoutValidation = (
  formData: bankType,
  otp: string,
  step: number
) => {
  const stepErrors: any = {};
  const { name, bankName, accountNumber } = formData;
  if (step === 1) {
    if (!name) {
      stepErrors.name = "Name is required";
    }
    if (!bankName) {
      stepErrors.bankName = "Bank name is required";
    }
    if (!accountNumber) {
      stepErrors.accountNumber = "Account Number is required";
    }
  } else if (step === 2) {
    if (!otp) {
      stepErrors.otp = "OTP is required";
    }
  }
  return stepErrors;
};

export const handleBetValidation = (formData: bookingType) => {
  const stepErrors: any = {};
  const { bookingNumber, odds } = formData;
  if (!bookingNumber) {
    stepErrors.bookingNumber = "Booking number is required";
  }
  if (!odds || Number(odds) < 10) {
    stepErrors.odds = "Odds is required and must be more than 10";
  }
  return stepErrors;
};
