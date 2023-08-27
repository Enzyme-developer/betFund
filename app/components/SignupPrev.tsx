"use client";
import React, { useState } from "react";
import { errorType, formType } from "../types/formType";
import { handleStepValidation } from "../utils/handleStepValidation";
import ModalTitle from "./ModalTitle";
import Verification from "./Verification";
import Register from "./SignupStepOne";
import SubmitForm from "./CreateAccount";
import { initialErrorState, initialState } from "../utils/constants";
import useModalStore from "../store/modalStore";

const MultiStepSignupForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialState);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [errors, setErrors] = useState(initialErrorState);

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
    const stepErrors = handleStepValidation(formData, phoneNumber, otp, step);
    if (Object.keys(stepErrors).length === 0) {
      setErrors(initialErrorState);
      setStep(step + 1);
    } else {
      setErrors(stepErrors);
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    const stepErrors = handleStepValidation(formData, phoneNumber, otp, step);
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
      <ModalTitle title="Signup" handleClose={closeSignupModal} />
      {step === 1 && (
        <div>
          <Register
            formData={formData}
            handleNext={handleNext}
            onChange={onChange}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            errors={errors}
          />
        </div>
      )}
      {step === 2 && (
        <div>
          <Verification
            otp={otp}
            setOtp={setOtp}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
          {errors.otp && <p className="text-red-500 py-3">{errors.otp}</p>}
        </div>
      )}
      {step === 3 && (
        <div>
          <SubmitForm
            formData={formData}
            handlePrev={handlePrev}
            handleSubmit={handleSubmit}
            onChange={onChange}
            errors={errors}
          />
        </div>
      )}
    </div>
  );
};

export default MultiStepSignupForm;
