import Otp from "./Otp";
import ModalText from "./ModalText";
import ModalTitle from "./ModalTitle";
import { cn } from "@/lib/utils";
import Button from "./Button";

type otpProp = {
  otp: string;
  setOtp: React.Dispatch<React.SetStateAction<string>>
  handleNext: () => void;
  handlePrev: () => void;
};

const Verification = ({ handleNext, handlePrev, otp, setOtp }: otpProp) => {
  return (
    <div
      className={cn(
        "w-full px-6 py-4 bg-black flex flex-col justify-center items-center"
      )}
    >
      <ModalText
        heading="Check your sms for code"
        body="Note: 080123456789 will be used for withdrawal verification"
      />

      <div className="w-3/5 flex flex-col space-y-4 justify-center items-center mb-6">
        <Otp otp={otp} setOtp={setOtp}  />
      </div>

      <div className="flex space-x-4 mb-4">
        <Button name="Previous" onClick={handlePrev} />
        <Button name="Next" onClick={handleNext} />
      </div>
    </div>
  );
};

export default Verification;
