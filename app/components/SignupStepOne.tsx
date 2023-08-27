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
import useFormStore from "../store/formStore";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignupStepOne = () => {
  const { formData, setFormData, setStep } = useFormStore();

  const formSchema = z.object({
    name: z.string().min(2),
    phoneNumber: z.string().min(2, { message: "Mobile Number is Required" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: formData?.name,
      phoneNumber: formData?.phoneNumber,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setFormData({
      ...formData,
      name: values.name,
      phoneNumber: values.phoneNumber,
    });
    setStep(2);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
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
                <PhoneInput
                  country={"ng"}
                  {...field}
                  inputStyle={{
                    border: "none",
                    height: "40px",
                    textAlign: "left",
                  }}
                  containerStyle={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    paddingLeft: "0px",
                    border: "1px solid #e3e3e3",
                    width: "100%",
                  }}
                  buttonStyle={{ background: "none" }}
                  dropdownStyle={{ zIndex: "10" }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Next</Button>
      </form>
    </Form>
  );
};

export default SignupStepOne;
