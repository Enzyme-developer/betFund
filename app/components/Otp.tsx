import OtpInput from "react-otp-input";

type otpProp = {
  otp: string;
  setOtp: React.Dispatch<React.SetStateAction<string>>
};

const Otp = ({ otp, setOtp }: otpProp) => {
  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      inputType="number"
      renderSeparator={<span></span>}
      renderInput={(props) => <input {...props} />}
      inputStyle="inputStyle"
    />
  );
};

export default Otp;
