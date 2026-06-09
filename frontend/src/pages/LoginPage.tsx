import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  loginSchema,
  type LoginSchema,
} from "@/schemas/auth.schema";

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

  const onSubmit = (
    values: LoginSchema,
  ) => {
    loginMutation.mutate(values);
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
              Manage tasks, collaborate live,
              chat instantly and draw together.
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
                  Welcome Back
                </h2>

                <p className="mt-2 text-slate-400">
                  Login to continue to your
                  workspace
                </p>
              </div>

              <form
                onSubmit={handleSubmit(
                  onSubmit,
                )}
                className="space-y-5"
              >
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
                      {
                        errors.email
                          .message
                      }
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
                    {...register(
                      "password",
                    )}
                  />

                  {errors.password && (
                    <p className="mt-1 text-sm text-red-500">
                      {
                        errors.password
                          .message
                      }
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  loading={
                    loginMutation.isPending
                  }
                  className="w-full"
                >
                  Sign In
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-slate-400">
                  Don't have an account?
                </p>

                <Link
                  to="/register"
                  className="font-medium text-indigo-400 hover:text-indigo-300"
                >
                  Create Account
                </Link>
              </div>

              <div className="mt-8 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
                Secure login powered by JWT &
                Refresh Token Rotation
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}