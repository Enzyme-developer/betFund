import React from "react";

interface props {
  level: string;
  price: string;
  status: string;
}

const Level = ({ level, price, status }: props) => {
  return (
    <div className="w-fit flex flex-col space-y-2 border-[3px] border-primary p-1">
      <p className="text-base font-medium text-white text-center uppercase">
        {level}
      </p>
      <p className="text-lg font-medium text-white text-center uppercase">
        {price}
      </p>
      <div
        className={`p-1 text-center text-base uppercase ${
          status == "active"
            ? "text-primary"
            : status == "passed"
            ? "bg-primary"
            : "border-[1px] border-primary text-primary"
        }`}
      >
        {status}
      </div>
    </div>
  );
};

export default Level;
