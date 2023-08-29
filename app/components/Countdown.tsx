"use client";
import React, { useEffect, useState } from "react";
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

export function Countdown() {
  const countdownModal = useModalStore((state) => state.countdownModal);
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);

  const [remainingTime, setRemainingTime] = useState<number>(0);

  const getCurrentTime = () => {
    const now = new Date();
    return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  };

  const calculateRemainingTime = () => {
    const currentTime = getCurrentTime();
    if (currentTime >= 28800 && currentTime < 46800) {
      // Between 8:00 AM and 10:00 PM
      return 0; //
    } else if (currentTime >= 0 && currentTime < 28800) {
      // Between 12:00 AM and 8:00 AM
      return 28800 - currentTime;
    } else {
      // Past 10:00 PM
      const nextMorning = (24 - currentTime / 3600) * 3600 + 28800;
      return nextMorning;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const form = useForm({
    defaultValues: {
      startTime: "",
      stopTime: "",
    },
  });

  return (
    <div className="flex flex-col p-8">
      <p onClick={() => openModal("countdownModal")}>Opennnnn</p>
      {countdownModal && (
        <Dialog
          open={countdownModal}
          onOpenChange={() => closeModal("CountdownModal")}
        >
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Try again later</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <p className="font-normal text-center">
                You can place bets between:
              </p>
            </DialogDescription>
            <div>
              <Form {...form}>
                <form className="space-y-8">
                  <FormField
                    control={form.control}
                    name="startTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Start time</FormLabel>
                        <FormControl>
                          <Input placeholder="08: 00am" value={"08: 00am"} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="stopTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Stop time</FormLabel>
                        <FormControl>
                          <Input placeholder="10: 00pm" value={"10: 00pm"} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div>
                    {remainingTime === 0 ? null : (
                      <p>{formatTime(remainingTime)} remaining</p>
                    )}
                  </div>
                  <Button onClick={() => closeModal("CountdownModal")}>
                    Close
                  </Button>
                </form>
              </Form>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
