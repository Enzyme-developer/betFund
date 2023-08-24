import React from "react";
import Input from "./Input";
import Button from "./Button";
import ModalTitle from "./ModalTitle";
import useModalStore from "../store/modalStore";
import ModalText from "./ModalText";

const Countdown = () => {
  const closeSignupModal = useModalStore((state) => state.closeSignupModal);

  return (
    <div
      className={
        "w-4/5 md:w-[500px] bg-black flex flex-col justify-center items-center pb-4"
      }
    >
      <ModalTitle title="Try again later" handleClose={closeSignupModal} />

      <div className="w-3/5 px-6 py-8 bg-black flex flex-col justify-center items-center mb-1 ">
        <ModalText heading="" body="You can place bet between:" />

        <div className="mb-3 flex space-x-6 justify-between w-full">
          <Input
            type="text"
            name="start"
            label="Start time"
            value="8:00am"
            bgColor="#FFCA55B0"
            labelColor="#ffffff"
          />

          <Input
            type="text"
            name="stop"
            label="Stop time"
            value="10:00pm"
            bgColor="#FFCA55B0"
            labelColor="#ffffff"
          />
        </div>
      </div>

      <p className="text-lg font-semibold text-center text-white">
        Betting starts in
      </p>

      <div className="my-4 w-3/5 bg-[#FFCA55B0] text-white py-2 px-4 flex space-x-2 items-center justify-center">
        {/* <p>{remainingTime.hours.toString().padStart(2, "0")}</p>:
        <p>{remainingTime.minutes.toString().padStart(2, "0")}</p>:
        <p>{remainingTime.seconds.toString().padStart(2, "0")}</p> */}
        <p className="text-hite font-semibold text-center text-lg">3:</p>
        <p className="text-hite font-semibold text-center text-lg">30:</p>
        <p className="text-hite font-semibold text-center text-lg">33</p>
      </div>

      <Button name="Close" onClick={() => closeSignupModal(true)} />
    </div>
  );
};

export default Countdown;
