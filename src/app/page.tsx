"use client";

import * as React from "react";
import Image from "next/image";
import { FaApple, FaGooglePlay, FaMobile, FaTrain } from "react-icons/fa";
import mockup from "@/assets/images/app-mobile-2.png";
import { FaUserPlus, FaShareAlt, FaMoneyBillWave } from "react-icons/fa";
import {
  Button,
  Input,
  Tabs,
  Tab,
  Tooltip,
  Select,
  SelectItem
} from "@nextui-org/react";
import { MdElectricBolt, MdMonitor, MdWaterDrop } from "react-icons/md";
import { TbGasStation } from "react-icons/tb";
import { IoWifi } from "react-icons/io5";
import { gender, discos, states, siteUrls } from "@/config";
import * as Yup from "yup";
import { Formik } from "formik";
import { useAuth } from "@/context";
import { useRouter } from "next/navigation";
import banner1 from "@/assets/images/banner-1.jpg";
import banner2 from "@/assets/images/banner-2.jpg";
import banner3 from "@/assets/images/banner-3.jpg";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchBillersByCategory, validateCustomer } from "@/services/biller";
import toast from "react-hot-toast";

interface IBillDetails {
  billerCode?: string;
  state?: string;
  serviceNumber?: string;
  amount?: string;
  paymentItemCode?: string;
}

const validationSchema = Yup.object().shape({
  billerCode: Yup.string().required("Choose your operator"),
  // state: Yup.string().required("Last name is required"),
  customerId: Yup.string().required("Customer ID is required"),
  amount: Yup.string().required("Amount is required"),
  paymentItemCode: Yup.string().required("Enter payment item code")
});

export default function Home() {
  // const [selected, setSelected] = React.useState("mobile");
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  const [initialValues] = React.useState({
    billerCode: "",
    state: "",
    customerId: "",
    amount: "",
    paymentItemCode: ""
  });

  const { data: electricityBiller } = useQuery({
    queryKey: ["fetchBillersByCategory"],
    queryFn: () => fetchBillersByCategory({ categoryId: "ELECTRICITY" })
  });

  const onValidateCustomer = useMutation({
    mutationKey: ["validateCustomer"],
    mutationFn: validateCustomer,
    onSuccess() {
      toast.success("Successful");
    },
    onError(error: any) {
      console.log(error);
      toast.error(error?.response?.data?.responseMessage);
    }
  });

  const steps = [
    {
      icon: <FaUserPlus />,
      title: "Invite Friends",
      description: "Share your referral link with friends and family."
    },
    {
      icon: <FaShareAlt />,
      title: "Friend Joins",
      description: "Your friend signs up using your unique referral link."
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Earn Rewards",
      description: "Both you and your friend receive rewards when they join."
    }
  ];

  console.log(electricityBiller);

  return (
    <main className="">
      {/* <section>
        <Accordion variant="shadow">
          <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </section> */}

      <section>
        <div className="w-full bg-gray-100">
          <div className="container mx-auto p-6 lg:py-10">
            <div className="flex flex-col lg:flex-row gap-8 items-start w-full">
              <div className="w-full hidden lg:block lg:w-1/5">
                <Tabs
                  fullWidth
                  // selectedKey={selected}
                  // onSelectionChange={setSelected}
                  aria-label="Options"
                  color="primary"
                  variant="solid"
                  size="lg"
                  isVertical
                  classNames={{
                    tabList:
                      "gap-4 w-full relative p-0 !items-start !justify-start",
                    cursor: "w-full",
                    tab: "py-5",
                    tabContent: "text-base"
                  }}>
                  <Tab
                    key="mobile"
                    title={
                      <div className="flex items-center space-x-2">
                        <FaMobile />
                        <span>Mobile</span>
                      </div>
                    }
                  />
                  <Tab
                    key="photo"
                    title={
                      <div className="flex items-center space-x-2">
                        <IoWifi />
                        <span>Broadband</span>
                      </div>
                    }
                  />
                  <Tab
                    key="electricity"
                    title={
                      <div className="flex items-center space-x-2">
                        <MdElectricBolt />
                        <span>Electricity</span>
                      </div>
                    }
                  />
                  <Tab
                    key="cableTV"
                    title={
                      <div className="flex items-center space-x-2">
                        <MdMonitor />
                        <span>Cable TV</span>
                      </div>
                    }
                  />
                  <Tab
                    key="metro"
                    title={
                      <div className="flex items-center space-x-2">
                        <FaTrain />
                        <span>Metro</span>
                      </div>
                    }
                  />
                  <Tab
                    key="gas"
                    title={
                      <div className="flex items-center space-x-2">
                        <TbGasStation />
                        <span>Gas</span>
                      </div>
                    }
                  />
                  <Tab
                    key="water"
                    title={
                      <div className="flex items-center space-x-2">
                        <MdWaterDrop />
                        <span>Water</span>
                      </div>
                    }
                  />
                </Tabs>
              </div>
              <div className="w-full block lg:hidden overflow-auto">
                <Tabs
                  // selectedKey={selected}
                  // onSelectionChange={setSelected}
                  aria-label="Options"
                  color="primary"
                  variant="bordered"
                  size="lg"
                  classNames={{
                    tabList:
                      "gap-4 w-full relative p-0 !items-start !justify-start",
                    cursor: "w-full",
                    tab: "py-5",
                    tabContent: "text-base"
                  }}>
                  <Tab
                    key="electricity"
                    title={
                      <div className="flex items-center space-x-2">
                        <MdElectricBolt />
                        <span>Electricity</span>
                      </div>
                    }
                  />
                  <Tab
                    key="mobile"
                    title={
                      <div className="flex items-center space-x-2">
                        <FaMobile />
                        <span>Mobile</span>
                      </div>
                    }
                  />
                  <Tab
                    key="photo"
                    title={
                      <div className="flex items-center space-x-2">
                        <IoWifi />
                        <span>Broadband</span>
                      </div>
                    }
                  />

                  <Tab
                    key="cableTV"
                    title={
                      <div className="flex items-center space-x-2">
                        <MdMonitor />
                        <span>Cable TV</span>
                      </div>
                    }
                  />
                  <Tab
                    key="metro"
                    title={
                      <div className="flex items-center space-x-2">
                        <FaTrain />
                        <span>Metro</span>
                      </div>
                    }
                  />
                  <Tab
                    key="gas"
                    title={
                      <div className="flex items-center space-x-2">
                        <TbGasStation />
                        <span>Gas</span>
                      </div>
                    }
                  />
                  <Tab
                    key="water"
                    title={
                      <div className="flex items-center space-x-2">
                        <MdWaterDrop />
                        <span>Water</span>
                      </div>
                    }
                  />
                </Tabs>
              </div>
              <div className="p-5 lg:p-8 shadow border-md bg-white w-full lg:w-1/2">
                <p className="text-[24px] font-bold mb-6">
                  Pay your electricity bill
                </p>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={(values: IBillDetails) => {
                    console.log(values);
                    onValidateCustomer.mutate(values);
                  }}>
                  {({
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit
                  }) => (
                    <form
                      className="flex flex-col gap-6"
                      onSubmit={handleSubmit}>
                      <div className="flex flex-col gap-6">
                        <Select
                          name="billerCode"
                          label="Operator"
                          labelPlacement={"outside"}
                          placeholder="Choose your operator"
                          size="lg"
                          radius={"sm"}
                          isInvalid={
                            Boolean(errors.billerCode) && touched.billerCode
                          }
                          errorMessage={errors.billerCode}
                          onBlur={handleBlur}
                          onChange={handleChange}>
                          {electricityBiller
                            ? electricityBiller.map((biller: any) => (
                                <SelectItem key={biller.billerCode}>
                                  {biller.name}
                                </SelectItem>
                              ))
                            : []}
                        </Select>
                        {/* <Select
                          name="state"
                          label="Your state"
                          labelPlacement={"outside"}
                          placeholder="Choose your state"
                          size="lg"
                          radius={"sm"}
                          isInvalid={Boolean(errors.state) && touched.state}
                          errorMessage={errors.state}
                          onBlur={handleBlur}
                          onChange={handleChange}>
                          {states.map((state) => (
                            <SelectItem key={state}>{state}</SelectItem>
                          ))}
                        </Select> */}
                        <Input
                          name="customerId"
                          type="number"
                          label={
                            <div className="flex gap-2 items-center cursor-pointer">
                              Customer Id
                              <Tooltip
                                showArrow={true}
                                content="This can be your meter number, phone number, email address or account number">
                                <QuestionMarkCircleIcon className="w-4 h-4 text-gray-500" />
                              </Tooltip>
                            </div>
                          }
                          placeholder="Enter customer Id"
                          labelPlacement="outside"
                          size="lg"
                          radius={"sm"}
                          isInvalid={
                            Boolean(errors.serviceNumber) &&
                            touched.serviceNumber
                          }
                          errorMessage={errors.serviceNumber}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                        <Input
                          name="amount"
                          type="number"
                          label="Amount"
                          placeholder="Enter amount"
                          labelPlacement="outside"
                          size="lg"
                          radius={"sm"}
                          isInvalid={Boolean(errors.amount) && touched.amount}
                          errorMessage={errors.amount}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          startContent={
                            <div className="pointer-events-none flex items-center">
                              <span className="text-default-400 text-small">
                                ₦
                              </span>
                            </div>
                          }
                        />
                        <Input
                          name="paymentItemCode"
                          type="number"
                          label="Payment item code"
                          placeholder="Enter amount"
                          labelPlacement="outside"
                          size="lg"
                          radius={"sm"}
                          isInvalid={
                            Boolean(errors.paymentItemCode) &&
                            touched.paymentItemCode
                          }
                          errorMessage={errors.paymentItemCode}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                        {isLoggedIn ? (
                          <Button
                            isDisabled={onValidateCustomer.isPending}
                            isLoading={onValidateCustomer.isPending}
                            type="submit"
                            fullWidth
                            className="!rounded-[8px] !bg-app_green !text-white !py-3">
                            Continue
                          </Button>
                        ) : (
                          <Button
                            onClick={() => router.push(siteUrls.login)}
                            type="button"
                            fullWidth
                            className="!rounded-[8px] !bg-app_green !text-white !py-3">
                            Login to continue
                          </Button>
                        )}
                      </div>
                    </form>
                  )}
                </Formik>
              </div>{" "}
              <div className="p-5 lg:p-8 shadow border-md bg-white w-full lg:w-[30%]">
                <div className="flex flex-col gap-4">
                  <img
                    src={banner1.src}
                    className="w-full h-[150px] object-cover"
                    alt=""
                  />
                  <img
                    src={banner2.src}
                    className="w-full h-[150px] object-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white shadow-lg">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="">
            <h2 className="text-3xl font-bold text-center mb-2 text_app_green">
              Refer & Earn
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Refer your friends and earn up to $20.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-app_green rounded-full flex items-center justify-center text-white text-4xl mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="px-8 py-3 border-2 border-app_green text-app_green font-semibold rounded-lg hover:bg-app_green  hover:text-white transition duration-300">
                Get Started and Earn
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto max-w-[80%]">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left column: Mobile mockup */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <img
                src={mockup.src}
                alt="Mobile App Mockup"
                className="mx-auto max-w-full h-auto"
              />
            </div>

            {/* Right column: Text and download buttons */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-app_green">
                Download Our GroPay Mobile App Now
              </h2>
              <p className="text-lg mb-8">
                Download our app for the fastest, most convenient way to
                Recharge & Bill Payment, Booking and more....
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300">
                  <FaApple className="mr-2 text-2xl" />
                  <span>App Store</span>
                </button>
                <button className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300">
                  <FaGooglePlay className="mr-2 text-2xl" />
                  <span>Google Play</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
