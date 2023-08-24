import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="w-[400px] sm:w-[540px]">
        Nav Items
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
