import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { nunito } from "../utils/fonts";

const BottomNav = () => {
  return (
    <div
      className={cn(
        "bg-black flex self-center mx-auto items-center justify-around w-full max-w-[840px] px-4 py-2 mt-10 mb-6 text-white rounded-[14px]",
        nunito.className
      )}
    >
      <Link className="text-lg font-black" href="/">
        How it works
      </Link>
      <Link className="text-lg font-black" href="/">
        FAQ
      </Link>
      <Link className="text-lg font-black" href="/">
        Contact us
      </Link>
    </div>
  );
};

export default BottomNav;
