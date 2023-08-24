import { ReactNode } from "react";
import { nunito } from "../utils/fonts";

const Modal = ({ children }: {children: ReactNode}) => {
  return (
    <div className={`${nunito.className} fixed inset-0 z-10 overflow-y-auto`}>
      <div className="p-10 min-h-full justify-center items-center flex bg-black bg-opacity-80 transition-opacity">
      <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0 ">
        {children}
      </div>
      </div>
    </div>
  );
};

export default Modal;
