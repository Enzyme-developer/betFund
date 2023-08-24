import React from "react";

const ModalTitle = ({
  title,
  handleClose,
}: {
  title: string;
  handleClose: (by: boolean) => void;
}) => {
  return (
    <div className="bg-primary items-center justify-center  flex h-24 w-full p-4">
      <div className="w-full">
        <p className="text-center uppercase text-xl font-bold">{title}</p>
      </div>

      <p
        className="h-fit flex justify-self-end"
        onClick={() => handleClose(true)}
      >
        X
      </p>
    </div>
  );
};

export default ModalTitle;
