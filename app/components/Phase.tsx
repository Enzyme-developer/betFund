import { nunito } from "../utils/fonts";
import { cn } from "@/lib/utils";

type phaseProp = {
  title: string;
};

const Phase = ({ title }: phaseProp) => {
  return (
    <div
      className={cn(
        "mt-12 flex flex-col justify-center items-center",
        nunito.className
      )}
    >
      <h2 className={cn("font-black text-3xl uppercase text-center mb-4 px-4")}>
        {title}
      </h2>
      <div className="w-4/5 h-72 max-w-[840px] px-16 py-6 bg-white bg-locked rounded-[14px] flex items-center justify-center">
        <p className="text-2xl font-bold text-center uppercase">
          KINDLY PASS THE TEST GAME ABOVE BEFORE LIVE GAME IS ACTIVATED
        </p>
      </div>
    </div>
  );
};

export default Phase;
