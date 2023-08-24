import { cn } from "@/lib/utils";
import { nunito } from "../utils/fonts";
import Image from "next/image";
import footer from '../assets/footer.svg'

const Footer = () => {
  return (
    <div
      className={cn("flex items-center flex-col space-y-3 mb-1", nunito.className)}
    >
      <p className="text-center text-xl font-bold">
        Terms and Conditions <br />
        Copyright © 2023 SportyTrader.com - All rights reserved
      </p>
      <Image alt="18+" src={footer} />
    </div>
  );
};

export default Footer;
