"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { nunito } from "../utils/fonts";
import { Button } from "@/components/ui/button";
import Modal from "./Modal";
import Signup from "./Signup";
import Otp from "./Otp";
import Verification from "./Verification";
import MultiStepSignupForm from "./Signup";
import useModalStore from "../store/modalStore";

const Cta = () => {
const openSignupModal = useModalStore((state) => state.openSignupModal)
const openLoginModal = useModalStore((state) => state.openLoginModal)
  return (
    <div className="bg-black w-[365px] rounded-[14px] my-8 flex flex-col space-y-4 p-3">
      <p
        className={cn(
          "text-xl font-extrabold text-center text-primary",
          nunito.className
        )}
      >
        RECEIVE 50% PROFIT SPLIT WE COVER YOUR LOSSESGET STARTED NOW IT’S FREE
      </p>
      <div className="flex items-center justify-center space-x-4">
        <Button
          className={cn(
            "rounded-[14px] font-extrabold text-lg text-black",
            nunito.className
          )}
          onClick={() => openSignupModal(true)}
        >
          Sign up
        </Button>
        <Button
          className={cn(
            "rounded-[14px] font-extrabold text-lg text-black",
            nunito.className
          )}
          onClick={() => openLoginModal(true)}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Cta;
