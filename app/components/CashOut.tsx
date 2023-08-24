"use client";
import React, { useState } from "react";
import { handleCashoutValidation } from "../utils/handleStepValidation";
import ModalTitle from "./ModalTitle";
import { initialBankErrorState } from "../utils/constants";
import useModalStore from "../store/modalStore";
import BankDetails from "./BankDetails";
import BankVerification from "./BankVerification";

const CashOut = () => {
  const initialState = {
    name: "",
    bankName: "",
    accountNumber: "",
  };

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialState);
  const [otp, setOtp] = useState<string>("");
  const [errors, setErrors] = useState(initialBankErrorState);

  const onChange = (
    // e:
    //   | React.ChangeEvent<HTMLInputElement>
    //   | React.ChangeEventHandler<HTMLSelectElement>
    e: any
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleNext = () => {
    const stepErrors = handleCashoutValidation(formData, otp, step);
    if (Object.keys(stepErrors).length === 0) {
      setErrors(initialBankErrorState);
      setStep(step + 1);
    } else {
      setErrors(stepErrors);
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    const stepErrors = handleCashoutValidation(formData, otp, step);
    if (Object.keys(stepErrors).length === 0) {
      //form submission to the backend API
      console.log("Form submitted");
    } else {
      setErrors(stepErrors);
    }
  };

  const closeSignupModal = useModalStore((state) => state.closeSignupModal);

  return (
    <div
      className={
        "w-3/5 md:w-2/5 bg-black flex flex-col justify-center items-center"
      }
    >
      <ModalTitle title="Cash out" handleClose={closeSignupModal} />
      {step === 1 && (
        <div>
          <BankDetails
            formData={formData}
            handleNext={handleNext}
            onChange={onChange}
            errors={errors}
          />
        </div>
      )}
      {step === 2 && (
        <div>
          <BankVerification
            otp={otp}
            setOtp={setOtp}
            handleSubmit={handleSubmit}
            handlePrev={handlePrev}
            formData={formData}
          />
          {errors.otp && <p className="text-red-500 py-3">{errors.otp}</p>}
        </div>
      )}
    </div>
  );
};

export default CashOut;
