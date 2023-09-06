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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useFormStore from "../store/formStore";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ApiResponse, create } from "apisauce";
import { states } from "../utils/states";
import { toast } from "react-hot-toast";
import { api } from "../utils/api";
import Loader from "../reusables/Loader";

const CreateAccount = () => {
  const { formData, setFormData, setStep } = useFormStore();

  const formSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    state: z.string().nonempty(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: formData?.email,
      name: formData?.name,
      state: formData?.state,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setFormData({
      ...formData,
      email: values.email,
      name: values.name,
      state: values.state,
    });

    const data = {
      phone_number: `+${formData?.phoneNumber}`,
      password: formData?.password,
      otp_code: formData?.otp,
      state: "Lagos",
      name: values?.name,
      email: values?.email,
    };

    try {
      const response: ApiResponse<any, any> = await api.post("auth/register", data);
      if (response.ok) {
        toast.success(response?.data.message);
        localStorage.setItem("auth", JSON.stringify(response.data));
      } else {
        toast.error(response?.data.message);
      }
    } catch (error: any) {
      toast.error(error?.response.data.message);
    } finally {
      form.reset()
    }
  }
  const isSubmitting= form.formState.isSubmitting;
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="John@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a state" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="h-40 overflow-y-scroll">
                  {states.map((state: string) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mr-4" onClick={() => setStep(2)}>
          Previous
        </Button>
        <Button type="submit">Signup</Button>
      </form>
      {isSubmitting && <Loader />}
    </Form>
  );
};

export default CreateAccount;
