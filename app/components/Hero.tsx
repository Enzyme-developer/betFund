import { cn } from "@/lib/utils";
import { goldman, nova } from "../utils/fonts";
import Cta from "./Cta";

const Hero = () => {
  return (
    <div className="justify-center items-center flex flex-col my-6">
      <div className="flex flex-col space-y-1">
        <p className={cn("text-xl md:text-3xl font-normal text-center", nova.className)}>
          We Fund. You Bet. We Pay You
        </p>
        <h1
          className={cn("text- md:text-[64px] font-bold text-center", goldman.className)}
        >
          UP TO ₦‎801,000
        </h1>
        <p
          className={cn(
            "text-3xl font-normal text-center uppercase",
            nova.className
          )}
        >
          Free betting money
        </p>
      </div>
      <Cta />
    </div>
  );
};

export default Hero;
