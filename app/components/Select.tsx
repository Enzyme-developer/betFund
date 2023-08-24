import React from "react";

type SelectProp = {
  value: string;
  name: string;
  label?: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

const Select = ({
  value,
  onChange,
  name,
  label,
}: SelectProp) => {
  return (
    <div className=" w-full flex flex-col justify-center items-center space-y-4">
      {label && (
        <label className="text-primary text-lg text-center">{label}</label>
      )}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="rounded-lg bg-white border-none outline-none h-8 pl-2 w-full focus-visible:ring-0"
      >
        <option>Lagos</option>
        <option>Rivers</option>
        <option>Oyo</option>
      </select>
    </div>
  );
};

export default Select;
