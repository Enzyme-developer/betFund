import React from "react";
import Input from "./Input";
import Button from "./Button";
import ModalTitle from "./ModalTitle";
import useModalStore from "../store/modalStore";

type Prop = {
  //   handleNext: () => void;
  odds: string;
  betId: string;
};

const Lost = ({ odds, betId }: Prop) => {
  const closeSignupModal = useModalStore((state) => state.closeSignupModal);

  return (
    <div
      className={
        "w-3/5 md:w-2/5 bg-black flex flex-col justify-center items-center"
      }
    >
      <ModalTitle title="Lost" handleClose={closeSignupModal} />
      <div
        className={
          "w-3/5 px-6 py-4 bg-black flex flex-col justify-center items-center"
        }
      >
        <div className="flex flex-col items-center space-y-6 w-full">
          <Input type="text" name="betId" label="Bet Naija ID" value={betId} bgColor="#FFCA55B0" />

          <Input type="number" name="gameOdds" label="Odds" value={odds} bgColor="#FFCA55B0" />

          <p className="font-medium text-lg text-center text-white">
            To confirm your bet result, Kindly copy the Bet ID above to bet9ja
            website for check up
          </p>

          <Button name="Close" />
        </div>
      </div>
    </div>
  );
};

export default Lost;
