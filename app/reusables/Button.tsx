import Link from "next/link";
import React, { ReactNode } from "react";

interface SlotComponentProps {
  style: string;
  href: string;
  children: ReactNode;
}

const BaseButton: React.FC<SlotComponentProps> = ({ style, href, children }) => {
  return (
    <Link
      href={href || "/"}
      className={`text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 ${style}`}
    >
      {children}
    </Link>
  );
};

export default BaseButton;
