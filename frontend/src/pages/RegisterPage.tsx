import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  registerSchema,
  type RegisterSchema,
} from "@/schemas/auth.schema";

import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

import { useRegister } from "@/hooks/useRegister";

export default function RegisterPage() {
  const registerMutation = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (values: RegisterSchema) => {
    registerMutation.mutate(values);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Side */}

        <div className="hidden flex-col justify-between bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 p-12 text-white lg:flex">
          <div>
            <h1 className="text-4xl font-bold">
              Alloy
            </h1>

            <p className="mt-3 text-lg text-indigo-100">
              Real-time collaboration platform
              for teams.
            </p>
          </div>

          <div>
            <h2 className="max-w-md text-4xl font-bold leading-tight">
              Create your workspace and start
              collaborating with your team in
              real time.
            </h2>
          </div>

          <div className="text-sm text-indigo-200">
            © 2026 Alloy Inc.
          </div>
        </div>

        {/* Right Side */}

        <div className="flex items-center justify-center px-6">
          <div className="w-full max-w-md">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white">
                  Create Account
                </h2>

                <p className="mt-2 text-slate-400">
                  Join Alloy and start building
                  with your team today.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Full Name
                  </label>

                  <Input
                    placeholder="John Doe"
                    {...register("name")}
                  />

                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Email Address
                  </label>

                  <Input
                    placeholder="john@example.com"
                    {...register("email")}
                  />

                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Password
                  </label>

                  <Input
                    type="password"
                    placeholder="••••••••"
                    {...register("password")}
                  />

                  {errors.password && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Confirm Password
                  </label>

                  <Input
                    type="password"
                    placeholder="••••••••"
                    {...register("confirmPassword")}
                  />

                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  loading={registerMutation.isPending}
                  className="w-full"
                >
                  Create Account
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-slate-400">
                  Already have an account?
                </p>

                <Link
                  to="/login"
                  className="font-medium text-indigo-400 hover:text-indigo-300"
                >
                  Sign In
                </Link>
              </div>

              <div className="mt-8 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
                Secure registration powered by
                JWT & Refresh Token Rotation
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}