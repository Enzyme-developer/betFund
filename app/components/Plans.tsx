import { cn } from "@/lib/utils";
import React from "react";
import { nunito } from "../utils/fonts";
import Plan from "./Plan";
import phase2 from "../assets/phase2.svg";
import phase3 from "../assets/phase3.svg";
import phase4 from "../assets/phase4.svg";

const Plans = () => {
  return (
    <div className="mt-8 mb-16 flex justify-center flex-col items-center">
      <h3
        className={cn("text-3xl text-center font-black mb-4", nunito.className)}
      >
        Automatic upgrade
      </h3>
      <div className="flex space-x-4 items-center flex-wrap">
        <Plan phase="phase 2" price="₦90,000‎" src={phase2} />
        <Plan phase="phase 3" price="₦270,000‎" src={phase3} />
        <Plan phase="phase 4" price="₦810,000‎" src={phase4} />
      </div>
    </div>
  );
};

export default Plans;
