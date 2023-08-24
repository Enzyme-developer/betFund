import React from "react";
import Input from "./Input";
import Button from "./Button";
import ModalTitle from "./ModalTitle";
import useModalStore from "../store/modalStore";
import ModalText from "./ModalText";
import Level from "./Level";

type accountProp = { email: string; name: string; phoneNumber: string };

const Account = ({ name, email, phoneNumber }: accountProp) => {
  const handleSubmit = () => {
    //form submission to the backend API
    console.log("Form submitted");
  };

  const closeSignupModal = useModalStore((state) => state.closeSignupModal);

  return (
    <div
      className={
        "w-4/5 md:w-[500px] bg-black flex flex-col justify-center items-center"
      }
    >
      <ModalTitle title="Place Bet" handleClose={closeSignupModal} />

      <div className=" w-3/5 px-6 py-8 bg-black flex flex-col justify-center items-center mb-1 ">
        <ModalText heading="Total Cash Out: ₦‎94,500" body="" />

        <div className="mb-6  w-full">
          <Input
            type="text"
            name="name"
            label="Name"
            value={name}
            bgColor="#FFCA55B0"
          />

          <Input
            type="tel"
            name="phoneNumber"
            label="Odds"
            value={phoneNumber}
            bgColor="#FFCA55B0"
          />

          <Input
            type="email"
            name="email"
            label="Email"
            value={email}
            bgColor="#FFCA55B0"
          />
        </div>

        <Button name="Change Password" onClick={handleSubmit} />
      </div>

      <p className="font-medium text-lg text-center text-white my-4">
          Game Status
        </p>
        <div className="flex space-x-2 items-center justify-center mb-3">
          <Level level="test" price="#30,000" status="passed" />
          <Level level="phase 1" price="#30,000" status="passed" />
          <Level level="phase 2" price="#90,000" status="active" />
          <Level level="phase 3" price="#270,000" status="locked" />
          <Level level="phase 4" price="#810,000" status="locked" />
        </div>
    </div>
  );
};

export default Account;
