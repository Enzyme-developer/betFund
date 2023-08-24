import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import ModalTitle from "./ModalTitle";
import useModalStore from "../store/modalStore";
import { handleBetValidation } from "../utils/handleStepValidation";
import { bookingType } from "../types/formType";

const PlaceBet = () => {
  const initialState = {
    bookingNumber: "",
    odds: "",
  };

  const initialErrorState = {
    bookingNumber: "",
    odds: "",
  };

  const [formData, setFormData] = useState<bookingType>(initialState);
  const [errors, setErrors] = useState(initialErrorState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const stepErrors = handleBetValidation(formData);
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
      <ModalTitle title="Place Bet" handleClose={closeSignupModal} />
      <div className=" w-3/5 px-6 py-8 bg-black flex flex-col justify-center items-center space-y-4 ">
        <Input
          type="text"
          name="bookingNumber"
          label="booking Number"
          value={formData?.bookingNumber}
          onChange={onChange}
        />
        {errors.bookingNumber && (
          <p className="text-red-500">{errors.bookingNumber}</p>
        )}
        <Input
          type="text"
          name="odds"
          label="Odds"
          value={formData?.odds}
          onChange={onChange}
        />
        {errors.odds && <p className="text-red-500">{errors.odds}</p>}

        <p className="font-medium text-lg text-center text-white">
          Pick your games on Bet9ja platform then copy the booking number.
        </p>

        <p className="font-medium text-lg text-center mt-4 text-white">
          Bets with less than <span className="text-primary">10 odds</span> will
          be rejected
        </p>

        <Button name="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default PlaceBet;
