"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from "@heroicons/react/24/outline";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { siteUrls } from "@/config";
import {
  Breadcrumbs,
  BreadcrumbItem,
  Button,
  Input,
  Textarea
} from "@nextui-org/react";

const contactSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Required")
});
interface IContactValues {
  name?: string;
  email?: string;
  message?: string;
}
const ContactPage = () => {
  const [initialValues] = React.useState<IContactValues>({
    name: "",
    email: "",
    message: ""
  });
  const mapContainerStyle = {
    width: "100%",
    height: "400px"
  };

  const center = {
    lat: 40.7128, // Replace with your location
    lng: -74.006 // Replace with your location
  };

  return (
    <>
      <div className="bg-[#4B8957]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 flex items-center justify-between">
          <h1 className="text-[24px] lg:text-[28px] font-semibold text-white">
            Contact us
          </h1>
          <Breadcrumbs
            underline="hover"
            classNames={{
              list: "bg-transparent"
            }}
            itemClasses={{
              item: "text-white/60 data-[current=true]:text-white",
              separator: "text-white/40"
            }}
            variant="solid">
            <BreadcrumbItem href={siteUrls.home}>Home</BreadcrumbItem>
            <BreadcrumbItem href="#">Contact us</BreadcrumbItem>
          </Breadcrumbs>
        </div>
      </div>
      <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <PhoneIcon className="h-6 w-6 text-app_green mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="h-6 w-6 text-app_green mr-2" />
                  <span>contact@example.com</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="h-6 w-6 text-app_green mr-2" />
                  <span>123 Main St, New York, NY 10001</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Send us a Message
              </h2>

              <Formik
                initialValues={initialValues}
                validationSchema={contactSchema}
                onSubmit={(values: IContactValues) => {
                  console.log(values);
                }}>
                {({
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit
                }) => (
                  <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <Input
                      isRequired
                      name="name"
                      label="Name"
                      labelPlacement={"outside"}
                      placeholder="Enter your name"
                      type="text"
                      size="lg"
                      radius={"sm"}
                      isInvalid={Boolean(errors.name) && touched.name}
                      errorMessage={errors.name}
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
                    <Textarea
                      isRequired
                      name="message"
                      label="Message"
                      labelPlacement={"outside"}
                      placeholder="Enter message"
                      type={"text"}
                      size="lg"
                      radius={"sm"}
                      isInvalid={Boolean(errors.message) && touched.message}
                      errorMessage={errors.message}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />

                    <div className="flex gap-2 justify-end mt-6">
                      <Button
                        type="submit"
                        fullWidth
                        className="!rounded-[8px] !bg-app_green !text-white !py-3">
                        Send message
                      </Button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Location
            </h2>
            <div className="shadow-lg rounded-lg overflow-hidden">
              <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={center}
                  zoom={14}>
                  <Marker position={center} />
                </GoogleMap>
              </LoadScript>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
