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
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function PlaceBet() {
  const betModal = useModalStore((state) => state.betModal);
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);

  const formSchema = z.object({
    betId: z.string().min(2),
    odds: z.string().min(1),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      betId: "",
      odds: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    //api call
  }

  return (
    <div className="flex flex-col p-8">
      <p onClick={() => openModal("betModal")}>Opennnnn</p>
      {betModal && (
        <Dialog open={betModal} onOpenChange={() => closeModal("betModal")}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Place Bet</DialogTitle>
            </DialogHeader>
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="betId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bet9ja Booking Id</FormLabel>
                        <FormControl>
                          <Input placeholder="NBCGHDIXXHJ55374" {...field} />
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
                          <Input placeholder="odds" type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <DialogDescription>
                    <p className="font-normal text-center">
                      Pick your games on Bet9ja platform then copy the booking
                      number.
                    </p>
                    <p className="text-center mt-4">
                      Bets with less than{" "} <strong >10 Odds </strong>{" "} will be rejected
                    </p>
                  </DialogDescription>
                  <Button type="submit">Submit</Button>
                </form>
              </Form>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
