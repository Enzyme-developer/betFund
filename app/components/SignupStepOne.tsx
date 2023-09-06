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
import { ApiResponse } from "apisauce";
import { toast } from "react-hot-toast";
import { api } from "../utils/api";
import Loader from "../reusables/Loader";

const SignupStepOne = () => {
  const { formData, setFormData, setStep } = useFormStore();

  const formSchema = z.object({
    password: z.string().min(4),
    phoneNumber: z.string().min(2, { message: "Mobile Number is Required" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: formData?.password,
      phoneNumber: formData?.phoneNumber,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setFormData({
      ...formData,
      phoneNumber: values.phoneNumber,
      password: values.password,
    });

    const data = {
      phone_number: `+${values?.phoneNumber}`,
      password: values?.password,
    };

    try {
      const response: ApiResponse<any, any> = await api.post("auth/get-otp", data);
      if (response.ok) {
        toast.success(response.data.message);
        setStep(2);
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      toast.error(error?.response.data.message);
    }
  }
  const isSubmitting= form.formState.isSubmitting;
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="******" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mr-4" onClick={() => setStep(2)}>
          Next
        </Button>
        <Button type="submit">Get OTP</Button>
      </form>
      {isSubmitting && <Loader />}
    </Form>
  );
};

export default SignupStepOne;
