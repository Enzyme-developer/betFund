import React from "react";

type inputProp = {
  value: string;
  name: string;
  type: string;
  placeholder?: string;
  label?: string;
  bgColor?: string;
  labelColor?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const Input = ({
  value,
  onChange,
  name,
  type,
  placeholder,
  label,
  bgColor,
  labelColor,
}: inputProp) => {
  return (
    <div className="w-full flex flex-col justify-center items-center space-y-4">
      {label && (
        <label
          style={{ color: labelColor ? labelColor : "" }}
          className="text-primary text-lg text-center"
        >
          {label}
        </label>
      )}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ backgroundColor: bgColor }}
        className="bg-white border-none outline-none font-medium h-8 pl-2 w-full focus-visible:ring-0 text-center"
      />
    </div>
  );
};

export default Input;
