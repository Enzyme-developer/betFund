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

const Verification = () => {
  const { formData, setFormData, setStep } = useFormStore();

  const formSchema = z.object({
    otp: z.string().min(4).max(4),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: formData?.otp,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setFormData({
      ...formData,
      otp: values.otp,
    });
    setStep(3);
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
        <Button className="mr-4" onClick={() => setStep(1)}>
          Previous
        </Button>
        <Button type="submit">Next</Button>
      </form>
    </Form>
  );
};

export default Verification;
