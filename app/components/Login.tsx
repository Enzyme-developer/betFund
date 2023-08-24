"use client";
import React, { useState } from "react";
import { handleLoginValidation } from "../utils/handleStepValidation";
import ModalTitle from "./ModalTitle";
import { initialErrorState, initialState } from "../utils/constants";
import LoginForm from "./LoginForm";
import useModalStore from "../store/modalStore";

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
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

  const handleSubmit = () => {
    const stepErrors = handleLoginValidation(formData, phoneNumber);
    if (Object.keys(stepErrors).length === 0) {
      //form submission to the backend API
      console.log("Form submitted");
    } else {
      setErrors(stepErrors);
    }
  };

  const closeLoginModal = useModalStore((state) => state.closeLoginModal);

  return (
    <div
      className={
        "w-3/5 md:w-2/5 bg-black flex flex-col justify-center items-center"
      }
    >
      <ModalTitle title="Login" handleClose={closeLoginModal} />
      <div>
        <LoginForm
          formData={formData}
          handleSubmit={handleSubmit}
          onChange={onChange}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          errors={errors}
        />
      </div>
    </div>
  );
};

export default Login;
