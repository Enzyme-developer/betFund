import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { nunito } from "../utils/fonts";

type prop = {
  src: string;
  phase: string;
  price: string;
};

const Plan = ({ src, phase, price }: prop) => {
  return (
    <div className="w-[250px] px-4 py-2 flex space-x-7 items-center border-[1px] border-black rounded-xl">
      <Image alt="phase" src={src} />
      <div className="flex flex-col">
        <p className={cn("text-lg font-bold", nunito.className)}>{phase}</p>
        <p className={cn("text-3xl font-extrabold", nunito.className)}>
          {price}
        </p>
      </div>
    </div>
  );
};

export default Plan;
