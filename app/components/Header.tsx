import React from "react";
import Sidebar from "./Sidebar";
import { cn } from "@/lib/utils";
import { nova } from "../utils/fonts";
import Link from "next/link";
import Image from "next/image";
import support from "../assets/support.svg";
import coin from "../assets/coin.svg";

const Header = ({ reward }: { reward?: boolean }) => {
  return (
    <div className="full flex justify-between items-center">
      <div className="flex items-center space-x-6">
        <Sidebar />
        <h1
          className={cn(
            "text-2xl sm:text-[40px] text-black font-normal",
            nova.className
          )}
        >
          MyBetFund
        </h1>
      </div>

      <div className="flex space-x-4 items-center">
        <div className="flex bg-white space-x-2 items-center p-3 rounded-[33px]">
          <Image src={coin} alt="coin" className="" />
          <div className="">
            <p className="font-black text-lg">$12300</p>
            <p className="font-semibold text-baes">cash reward</p>
          </div>
        </div>

        <Link href="/">
          <Image alt="support" src={support} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
