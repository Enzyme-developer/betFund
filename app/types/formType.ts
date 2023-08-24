export type formType = {
  password: string;
  name: string;
  email: string;
  state: string;
};

export type errorType = {
  password: "",
  otp: "",
  phoneNumber: "",
  name: "",
  email: "",
  state: ""
}

export type bankType = {
  bankName: string;
  accountNumber: string;
  name: string;
};

export type bankErrorType = {
  name: "",
  otp: "",
  accountNumber: "",
  bankName: "",
}

export type bookingType = {
  bookingNumber: string,
  odds: string,
}