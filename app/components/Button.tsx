import { cn } from "@/lib/utils";
import { nunito } from "../utils/fonts";

const Button = ({ onClick, name }: { onClick?: () => void; name: string }) => {
  return (
    <button
      className={cn(
        "border-0 outline-0 py-2 px-4 rounded-[14px] font-extrabold text-lg text-black bg-primary w-fit",
        nunito.className
      )}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
