import Otp from "./Otp";
import ModalText from "./ModalText";
import ModalTitle from "./ModalTitle";
import { cn } from "@/lib/utils";
import Button from "./Button";
import { bankType } from "../types/formType";

type otpProp = {
  otp: string;
  setOtp: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
  handlePrev: () => void;
  formData: bankType
};

const BankVerification = ({
  handleSubmit,
  handlePrev,
  formData,
  otp,
  setOtp,
}: otpProp) => {
  return (
    <div
      className={cn(
        "w-full px-6 py-4 bg-black flex flex-col justify-center items-center"
      )}
    >
      <ModalText
        heading="#125,000"
        body="Check mobile number 080123456789 for verification code"
      />

      <div className="w-3/5 flex flex-col space-y-4 justify-center items-center mb-6">
        <Otp otp={otp} setOtp={setOtp} />
      </div>

      <div className="flex flex-col text-center mb-4 space-y-2 text-lg text-primary">
        <p>Bank Name: {formData?.bankName}</p>
        <p>Account Name: {formData?.name}</p>
        <p>Account Number: {formData?.accountNumber}</p>
      </div>

      <div className="flex space-x-4 mb-4">
        <Button name="Previous" onClick={handlePrev} />
        <Button name="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default BankVerification;
