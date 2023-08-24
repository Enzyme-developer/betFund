import React from "react";
import Input from "./Input";
import Button from "./Button";
import { errorType, formType } from "../types/formType";
import ModalText from "./ModalText";
import Select from "./Select";

type SubmitProp = {
  handlePrev: () => void;
  handleSubmit: () => void;
//   onChange: ChangeEventHandler<HTMLInputElement> |  React.ChangeEventHandler<HTMLSelectElement>;
  onChange: any;
  formData: formType;
  errors: errorType;
};

const SubmitForm = ({
  formData,
  onChange,
  errors,
  handlePrev,
  handleSubmit,
}: SubmitProp) => {
  return (
    <div
      className={
        "w-full px-6 py-4 bg-black flex flex-col justify-center items-center"
      }
    >
      <ModalText heading="Final Step" body="" />
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
          type="email"
          name="email"
          label="Valid Email"
          value={formData?.email}
          onChange={onChange}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        <Select
          name="state"
          label="Select State"
          value={formData?.state}
          onChange={onChange}
        />
        {errors.state && <p className="text-red-500">{errors.state}</p>}
        <div className="flex space-x-4 ">
          <Button name="Previous" onClick={handlePrev} />
          <Button name="Submit" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SubmitForm;
