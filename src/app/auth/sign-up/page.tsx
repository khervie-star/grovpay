"use client";

import React from "react";
import { Input, Link, Button, Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import * as Yup from "yup";
import { Formik } from "formik";
import { userRegistration } from "@/services";
import { useAuth, useUser } from "@/context";
import { gender, siteUrls } from "@/config";

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

type PasswordVisibility = {
  password: boolean;
  confirmPassword: boolean;
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().required("Email is required"),
  gender: Yup.string().required("Gender is required"),
  phone: Yup.string()
    .matches(/^[0-9]{11,15}$/, "Phone number must be between 11 and 15 digits.")
    .required("Phone number is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Password must match")
});

const SignUp = () => {
  const router = useRouter();
  const { setUser } = useUser();
  const { setToken } = useAuth();

  const [showPassword, setShowPassword] = React.useState<PasswordVisibility>({
    password: false,
    confirmPassword: false
  });
  const [initialValues] = React.useState({
    firstName: "",
    middleName: "string",
    lastName: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const onRegisterUser = useMutation({
    mutationKey: ["userRegistration"],
    mutationFn: userRegistration,
    onSuccess(data) {
      console.log(data);
      setUser(data?.user);
      localStorage.setItem("Us_d", JSON.stringify(data?.user));
      const jwtToken = data?.jwt?.token;
      console.log(jwtToken);
      setToken(jwtToken);
      toast.success("Account created successfully!");
      router.push(siteUrls.home);
    },
    onError(error: any) {
      console.log(error);
      toast.error(error?.response?.data?.responseMessage);
    }
  });

  const handleRegisterUer = (values: IUserIdentityDetails) => {
    const payload = { ...values, username: values.email };
    const formattedPayload = { ...payload };
    onRegisterUser.mutate(formattedPayload);
  };

  const togglePassword = (name: keyof PasswordVisibility) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [name]: !prevState[name]
    }));
  };

  return (
    <div className="py-6">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: IUserIdentityDetails) => {
          handleRegisterUer(values);
        }}>
        {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <Input
              isRequired
              name="firstName"
              label="First name"
              labelPlacement={"outside"}
              placeholder="Enter your first name"
              type="text"
              size="lg"
              radius={"sm"}
              isInvalid={Boolean(errors.firstName) && touched.firstName}
              errorMessage={errors.firstName}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <Input
              isRequired
              name="lastName"
              label="Last name"
              labelPlacement={"outside"}
              placeholder="Enter your last name"
              type="text"
              size="lg"
              radius={"sm"}
              isInvalid={Boolean(errors.lastName) && touched.lastName}
              errorMessage={errors.lastName}
              onBlur={handleBlur}
              onChange={handleChange}
            />
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
              name="phone"
              type="number"
              label="Phone number"
              placeholder="Enter your phone number"
              labelPlacement="outside"
              size="lg"
              radius={"sm"}
              isInvalid={Boolean(errors.phone) && touched.phone}
              errorMessage={errors.phone}
              onBlur={handleBlur}
              onChange={handleChange}
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">+234</span>
                </div>
              }
            />
            <Select
              name="gender"
              label="Gender"
              labelPlacement={"outside"}
              placeholder="Select gender"
              size="lg"
              radius={"sm"}
              isInvalid={Boolean(errors.gender) && touched.gender}
              errorMessage={errors.gender}
              onBlur={handleBlur}
              onChange={handleChange}>
              {gender.map((gender) => (
                <SelectItem key={gender.key}>{gender.label}</SelectItem>
              ))}
            </Select>
            <Input
              isRequired
              name="password"
              label="Password"
              labelPlacement={"outside"}
              placeholder="Enter your password"
              type={showPassword.password ? "text" : "password"}
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
                  onClick={() => togglePassword("password")}>
                  {showPassword.password ? (
                    <EyeSlashIcon className="text-2xl w-5 text-default-400 pointer-events-none" />
                  ) : (
                    <EyeIcon className="text-2xl w-5 text-default-400 pointer-events-none" />
                  )}
                </button>
              }
            />
            <Input
              isRequired
              name="confirmPassword"
              label="Confirm password"
              labelPlacement={"outside"}
              placeholder="Enter your password again"
              type={showPassword.confirmPassword ? "text" : "password"}
              size="lg"
              radius={"sm"}
              isInvalid={
                Boolean(errors.confirmPassword) && touched.confirmPassword
              }
              errorMessage={errors.confirmPassword}
              onBlur={handleBlur}
              onChange={handleChange}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={() => togglePassword("confirmPassword")}>
                  {showPassword.confirmPassword ? (
                    <EyeSlashIcon className="text-2xl w-5 text-default-400 pointer-events-none" />
                  ) : (
                    <EyeIcon className="text-2xl w-5 text-default-400 pointer-events-none" />
                  )}
                </button>
              }
            />

            <div className="flex gap-2 justify-end mt-10">
              <Button
                isDisabled={onRegisterUser.isPending}
                isLoading={onRegisterUser.isPending}
                type="submit"
                fullWidth
                className="!rounded-[8px] !bg-app_green !text-white !py-3">
                Sign up
              </Button>
            </div>
            <p className="text-center text-small text-gray-400">
              Have an account already?{" "}
              <Link
                size="sm"
                className="!font-semibold !text-app_green !cursor-pointer"
                onPress={() => router.push(siteUrls.login)}>
                Login
              </Link>
            </p>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
