"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import BankVerification from "./BankVerification";
import BankDetails from "./BankDetails";
import useFormStore from "../store/formStore";
import useModalStore from "../store/modalStore";

export function CashOut() {
  const { cashoutStep } = useFormStore();
  const cashoutModal = useModalStore((state) => state.cashoutModal);
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);

  return (
    <div className="flex flex-col p-8">
      <p onClick={() => openModal('cashoutModal')}>Opennnnn</p>
      {cashoutModal && <Dialog open={cashoutModal} onOpenChange={()=> closeModal('cashoutModal')}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Cash Out</DialogTitle>
            <DialogDescription>
              <h3 className="font-bold text-lg">$130,000</h3>
              <p>50% profit split applied</p>
            </DialogDescription>
          </DialogHeader>
          {cashoutStep === 1 && (
            <div>
              <BankDetails />
            </div>
          )}
          {cashoutStep === 2 && (
            <div>
              <BankVerification />
            </div>
          )}
        </DialogContent>
      </Dialog>}
    </div> 
  );
}
