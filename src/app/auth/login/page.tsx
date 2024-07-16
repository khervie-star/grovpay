"use client";

import { siteUrls } from "@/config";
import { useAuth, useUser } from "@/context";
import { userLogin } from "@/services";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/outline";
import { Checkbox, Button, Link, Input } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import * as Yup from "yup";
import { Formik } from "formik";

interface IUserIdentityDetails {
  firstName?: string;
  lastName?: string;
  middleName?: string;
  email?: string;
  gender?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required")
});

const Login = () => {
  const router = useRouter();
  // const searchParams = useSearchParams();
  // const redirect = searchParams.get("redirect");
  const { setUser } = useUser();
  const { setToken, isLoggedIn } = useAuth();
  const [isVisible, setIsVisible] = React.useState(false);
  const [initialValues] = React.useState<IUserIdentityDetails>({
    email: "",
    password: ""
  });

  const onLoginUser = useMutation({
    mutationKey: ["userLogin"],
    mutationFn: userLogin,
    onSuccess(data) {
      /*
       * When the login api call is successful, do the following:
       * -> Log the data
       * -> Save the data local storage and to user context
       * -> Save the token to the cookies
       * -> Save the user details to local storage/ React context so that the userId and other parameters can be retrieved and used in other api calls.
       * -> Check the response for the next registration step and redirect accordingly
       */
      console.log(data);
      setUser(data?.user);
      localStorage.setItem("Us_d", JSON.stringify(data?.user));

      const jwtToken = data?.jwt?.token;

      console.log(jwtToken);

      setToken(jwtToken);

      toast.success("Login Successful");

      // const redirectUrl = redirect
      //   ? decodeURIComponent(redirect as string)
      //   : siteUrls.home;

      router.push(siteUrls.home);
    },
    onError(error: any) {
      console.log(error);
      toast.error(error?.response?.data?.responseMessage);
    }
  });

  const handleLoginUser = (values: IUserIdentityDetails) => {
    const payload = { ...values, username: values.email };
    const formattedPayload = { ...payload };
    onLoginUser.mutate(formattedPayload);
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="py-6">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: IUserIdentityDetails) => {
          handleLoginUser(values);
        }}>
        {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <Input
              isRequired
              name="email"
              label="Email"
              labelPlacement={"outside"}
              placeholder="Enter your email"
              type="email"
              size="lg"
              radius={"sm"}
              isInvalid={Boolean(errors.email) && touched.email}
              errorMessage={errors.email}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <Input
              isRequired
              name="password"
              label="Password"
              labelPlacement={"outside"}
              placeholder="Enter your password"
              type={isVisible ? "text" : "password"}
              size="lg"
              radius={"sm"}
              isInvalid={Boolean(errors.password) && touched.password}
              errorMessage={errors.password}
              onBlur={handleBlur}
              onChange={handleChange}
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
              <Link
                href={siteUrls.forgotPassword}
                className="!text-app_green !font-semibold">
                Forgot password?
              </Link>
            </div>

            <div className="flex gap-2 justify-end mt-10">
              <Button
                isDisabled={onLoginUser.isPending}
                isLoading={onLoginUser.isPending}
                type="submit"
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
        )}
      </Formik>
    </div>
  );
};

export default Login;
