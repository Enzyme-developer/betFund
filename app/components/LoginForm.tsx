import React, { ChangeEventHandler } from "react";
import Input from "./Input";
import Button from "./Button";
import CustomPhoneInput from "./PhoneInput";
import { errorType, formType } from "../types/formType";
import ModalTitle from "./ModalTitle";
import ModalText from "./ModalText";

type LoginFormProp = {
  handleSubmit: () => void;
  onChange: ChangeEventHandler<HTMLInputElement>;
  formData: formType;
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  errors: errorType;
};

const LoginForm = ({
  onChange,
  handleSubmit,
  formData,
  phoneNumber,
  setPhoneNumber,
  errors,
}: LoginFormProp) => {
  return (
    <div
      className={
        "w-full px-6 py-4 bg-black flex flex-col justify-center items-center"
      }
    >
      <ModalText
        heading="welcome to mybetfunds"
        body=""
      />
      <div className="flex flex-col items-center space-y-4 w-3/5">
        <div className="flex flex-col space-y-2">
          <label className="text-primary text-lg text-center">
            Mobile Number
          </label>
          <CustomPhoneInput
            value={phoneNumber}
            setValue={setPhoneNumber}
            name="phoneNumber"
          />
          {errors.phoneNumber && (
            <p className="text-red-500">{errors.phoneNumber}</p>
          )}
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <Input
            name="password"
            type="password"
            onChange={onChange}
            value={formData?.password}
            label="Password"
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
        <Button name="Next" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default LoginForm;