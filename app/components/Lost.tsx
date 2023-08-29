"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useModalStore from "../store/modalStore";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

export function Lost() {
  const lostModal = useModalStore((state) => state.lostModal);
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);

  const form = useForm({
    defaultValues: {
      betId: "",
      odds: "",
    },
  });

  return (
    <div className="flex flex-col p-8">
      <p onClick={() => openModal("lostModal")}>Opennnnn</p>
      {lostModal && (
        <Dialog open={lostModal} onOpenChange={() => closeModal("lostModal")}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Lost</DialogTitle>
            </DialogHeader>
            <div>
              <Form {...form}>
                <form className="space-y-8">
                  <FormField
                    control={form.control}
                    name="betId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bet9ja Id</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Jbbfjf638489BBH"
                            value={"674cnfmjffNJDKJDJ"}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="odds"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Game Odds</FormLabel>
                        <FormControl>
                          <Input placeholder="11.5" value={"11.5"} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <DialogDescription>
                    <p className="font-normal text-center">
                      To confirm your bet result, Kindly copy the Bet ID above to bet9ja website for check up
                    </p>
                  </DialogDescription>
                  <Button onClick={() => closeModal("lostModal")}>Close</Button>
                </form>
              </Form>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
