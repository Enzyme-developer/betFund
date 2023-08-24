import { cn } from "@/lib/utils";
import React from "react";
import { nunito } from "../utils/fonts";
import { Button } from "@/components/ui/button";

const How = () => {
  return (
    <div className={cn("w-full md:w-[576px] flex flex-col justify-self-center mx-auto self-center bg-yellow-700 mb-10 rounded-lg p-4 border-[1px] border-black", nunito.className)}>
      <h1 className="text-3xl font-black text-center mb-2">How it works</h1>
      <p className="text-2xl font-bold text-center">
        Pass the free test by winning 2 out of 3 bets to get funded instantly.
        You will be paid 50% of your earning then moved to higher stages. <br />{" "}
        <strong>All losses are on us.</strong>
      </p>
      <div className="flex items-center justify-center space-x-4 mt-4">
        <Button
          className={cn(
            "rounded-[14px] font-extrabold text-lg text-primary bg-black",
            nunito.className
          )}
        >
          Sign up
        </Button>
        <Button
          className={cn(
            "rounded-[14px] font-extrabold text-lg text-primary bg-black",
            nunito.className
          )}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default How;
