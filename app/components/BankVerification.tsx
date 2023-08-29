import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import useFormStore from "../store/formStore";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import OTPInput from "react-otp-input";

const BankVerification = () => {
  const { cashoutData, setCashoutData, setCashoutStep } = useFormStore();

  const formSchema = z.object({
    otp: z.string().min(4).max(4),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: cashoutData?.otp,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setCashoutData({
      ...cashoutData,
      otp: values.otp,
    });
    //make api call
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-4">OTP</FormLabel>
              <FormControl>
                <OTPInput
                  {...field}
                  numInputs={4}
                  inputType="number"
                  renderSeparator={<span></span>}
                  renderInput={(props) => <input {...props} />}
                  inputStyle="inputStyle"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mr-4" onClick={() => setCashoutStep(1)}>
          Previous
        </Button>
        <Button type="submit">Submit</Button>
        <div className="mt-4 flex flex-col text-center text-sm">
          <span>Name: {cashoutData?.name}</span>
          <span>Bank Name: {cashoutData?.bankName}</span>
          <span>Account Number: {cashoutData?.accountNumber}</span>
        </div>
      </form>
    </Form>
  );
};

export default BankVerification;
