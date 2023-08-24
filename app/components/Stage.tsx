import { cn } from "@/lib/utils";
import React from "react";
import { nunito } from "../utils/fonts";

type StageProp = {
  title: string;
  body: string;
  note: string;
};

const Stage = ({ title, body, note }: StageProp) => {
  return (
    <div className="mt-12 flex flex-col justify-center items-center">
      <h2 className={cn("font-black text-3xl uppercase text-center mb-4 px-4", nunito.className)}>
        {title}
      </h2>
      <div className="w-4/5 max-w-[840px] px-16 py-6 bg-black rounded-[14px]">
        <p className="text-white text-lg font-bold text-center">{body}</p>
        <p className="text-white text-lg font-bold text-center mt-8">{note}</p>
      </div>
    </div>
  );
};

export default Stage;
