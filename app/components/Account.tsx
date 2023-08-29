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
import { Level } from "./Level";

export function Account() {
  const accountModal = useModalStore((state) => state.accountModal);
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);

  const form = useForm({
    defaultValues: {
      name: "",
      phoneNumber: "",
      email: "",
    },
  });

  return (
    <div className="flex flex-col p-8">
      <p onClick={() => openModal("accountModal")}>Opennnnn</p>
      {accountModal && (
        <Dialog
          open={accountModal}
          onOpenChange={() => closeModal("accountModal")}
        >
          <DialogContent className="sm:max-w-[425px] h-[400px] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Account</DialogTitle>
            </DialogHeader>
            <div>
              <Form {...form}>
                <form className="space-y-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" value={"John"} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="09063547786"
                            value={"09063543117"}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="doegmail.com"
                            value={"doegmail.com"}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <DialogDescription>
                    <p className="font-medium text-center mb-4">
                      Game Status
                    </p>
                    <div className="flex items-center justify-center flex-wrap">
                      <Level level="test" price="#30,000" status="passed" />
                      <Level level="phase 1" price="#30,000" status="passed" />
                      <Level level="phase 2" price="#90,000" status="active" />
                      <Level level="phase 3" price="#270,000" status="locked" />
                      <Level level="phase 4" price="#810,000" status="locked" />
                    </div>
                  </DialogDescription>
                  <Button onClick={() => closeModal("accountModal")}>
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
