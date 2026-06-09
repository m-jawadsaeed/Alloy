import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, type LoginSchema } from "@/schemas/auth.schema";

import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

import { useLogin } from "@/hooks/useLogin";

export default function LoginPage() {
  const loginMutation = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (values: LoginSchema) => {
    loginMutation.mutate(values);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-4 rounded-xl border p-8"
      >
        <h1 className="text-2xl font-bold">Login</h1>

        <Input placeholder="Email" {...register("email")} />

        {errors.email && <p>{errors.email.message}</p>}

        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
        />

        {errors.password && <p>{errors.password.message}</p>}

        <Button loading={loginMutation.isPending} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
