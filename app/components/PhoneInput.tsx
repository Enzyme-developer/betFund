"use client";
import { Dispatch, SetStateAction } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

type PhoneProp = {
  name: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

const CustomPhoneInput: any = ({ value, setValue, name }: PhoneProp) => {
  return (
    <PhoneInput
      country={"ng"}
      value={value}
      onChange={(phone: string) => setValue(phone)}
      inputStyle={{ border: "none", height: "32px", textAlign: "left" }}
      containerStyle={{
        backgroundColor: "white",
        borderRadius: "8px",
        paddingLeft: "0px",
      }}
      buttonStyle={{ background: "none" }}
      dropdownStyle={{ zIndex: "10" }}
    />
  );
};

export default CustomPhoneInput;
