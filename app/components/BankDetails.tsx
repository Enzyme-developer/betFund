import React from "react";
import Input from "./Input";
import Button from "./Button";
import { bankErrorType, bankType } from "../types/formType";
import ModalText from "./ModalText";

type SubmitProp = {
  handleNext: () => void;
  //   onChange: ChangeEventHandler<HTMLInputElement> |  React.ChangeEventHandler<HTMLSelectElement>;
  onChange: any;
  formData: bankType;
  errors: bankErrorType;
};

const BankDetails = ({
  formData,
  onChange,
  errors,
  handleNext,
}: SubmitProp) => {
  return (
    <div
      className={
        "w-full px-6 py-4 bg-black flex flex-col justify-center items-center"
      }
    >
      <ModalText heading="#125,000" body="50% Profit split will apply" />
      <div className="flex flex-col items-center space-y-4 w-full">
        <Input
          type="text"
          name="name"
          label="First and last Name"
          value={formData?.name}
          onChange={onChange}
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
        <Input
          type="text"
          name="bankName"
          label="Bank Name"
          value={formData?.bankName}
          onChange={onChange}
        />
        {errors.bankName && <p className="text-red-500">{errors.bankName}</p>}
        <Input
          type="number"
          name="accountNumber"
          label="Account Number"
          value={formData?.accountNumber}
          onChange={onChange}
        />
        {errors.accountNumber && (
          <p className="text-red-500">{errors.accountNumber}</p>
        )}

        <Button name="Next" onClick={handleNext} />
      </div>
    </div>
  );
};

export default BankDetails;
