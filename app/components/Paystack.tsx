import React from "react";
import { PaystackButton } from "react-paystack";

const config = {
  reference: new Date().getTime().toString(),
  email: "user@example.com",
  amount: 20000, // Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY as string,
};

const Paystack: React.FC = () => {
  const handlePaystackSuccessAction = (reference: string) => {
    console.log(reference);
  };

  const handlePaystackCloseAction = () => {
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Make Payment",
    className:"bg-primary px-3 py-2 my-3 rounded-lg font-semibold dark:text-gray-800",
    onSuccess: (reference: string) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };
  return (
    <div className="">
      <PaystackButton
        {...componentProps}
        
      />
    </div>
  );
};

export default Paystack;