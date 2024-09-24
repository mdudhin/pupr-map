import { ControllerRenderProps, useForm } from "react-hook-form";
import { CustomFormField, Form } from "../../../components/form";
import { LoginSchema, loginSchema } from "../../../services/auth/form";

import { Button } from "../../../components/button";
import { Input } from "../../../components/input";
import logo from "../../../assets/logo.png";
import { postLogin } from "../../../services/auth";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../../hooks/useToken";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginPage = () => {
  const navigate = useNavigate();
  const { changeToken } = useToken();
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      const result = await postLogin(data);

      changeToken(result.token);
      navigate("/admin");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-36" />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <Form {...form}>
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <CustomFormField
              control={form.control}
              name="username"
              label="Username"
            >
              {(field) => (
                <Input
                  {...field}
                  placeholder="Input username"
                  type="text"
                  disabled={isSubmitting}
                  aria-disabled={isSubmitting}
                />
              )}
            </CustomFormField>
            <CustomFormField
              control={form.control}
              name="password"
              label="Password"
            >
              {(field) => (
                <Input
                  {...field}
                  placeholder="Input Password"
                  type="password"
                  disabled={isSubmitting}
                  aria-disabled={isSubmitting}
                />
              )}
            </CustomFormField>

            <Button
              type="submit"
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
              className="bg-indigo hover:bg-indigo"
            >
              {isSubmitting ? "Login..." : "Login"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
