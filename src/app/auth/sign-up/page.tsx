"use client";

import React from "react";
import { Checkbox, Input, Link, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const SignUp = () => {
  const router = useRouter();

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="py-6">
      <form className="flex flex-col gap-6">
        <Input
          isRequired
          label="Email"
          labelPlacement={"outside"}
          placeholder="Enter your email"
          type="email"
          size="lg"
          radius={"sm"}
        />
        <Input
          isRequired
          label="Password"
          labelPlacement={"outside"}
          placeholder="Enter your password"
          type={isVisible ? "text" : "password"}
          size="lg"
          radius={"sm"}
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}>
              {isVisible ? (
                <EyeSlashIcon className="text-2xl w-5 text-default-400 pointer-events-none" />
              ) : (
                <EyeIcon className="text-2xl w-5 text-default-400 pointer-events-none" />
              )}
            </button>
          }
        />
        <div className="flex items-center justify-between gap-8 flex-wrap">
          <Checkbox defaultSelected color="primary">
            Remember me
          </Checkbox>
          <Link href="#" className="!text-app_green !font-semibold">
            Forgot password?
          </Link>
        </div>

        <div className="flex gap-2 justify-end mt-10">
          <Button
            fullWidth
            className="!rounded-[8px] !bg-app_green !text-white !py-3">
            Login
          </Button>
        </div>
        <p className="text-center text-small text-gray-400">
          Don&apos;t have an account?{" "}
          <Link
            size="sm"
            className="!font-semibold !text-app_green !cursor-pointer"
            onPress={() => router.push("/auth/sign-up")}>
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
