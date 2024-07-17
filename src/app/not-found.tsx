"use client";

import React from "react";
import { Breadcrumbs, BreadcrumbItem, Button, Link } from "@nextui-org/react";
import { siteUrls } from "@/config";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="bg-[#f6f7f8]">
      <div className="bg-[#4B8957]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 flex items-center justify-between">
          <h1 className="text-[24px] lg:text-[28px] font-semibold text-white">
            404
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
            <BreadcrumbItem href="#">Page not found</BreadcrumbItem>
          </Breadcrumbs>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12 w-full max-w-[600px] mx-auto text-center">
          <div className="flex flex-col">
            <p className="text-app_green font-bold text-[72px] lg:text-[144px] mb-0">
              404
            </p>
            <p className="text-app_green font-bold text-[24px] mb-2">
              oops! The page you requested was not found!
            </p>
            <p className="text-base lg:text-[18px] text-gray-500 font-normal">
              The page you are looking for was moved, removed, renamed or might
              never existed.
            </p>
            <div className="flex gap-4 items-center justify-center mt-10">
              <Button
                href={siteUrls.home}
                as={Link}
                color="primary"
                variant="solid"
                className="!px-10">
                Home
              </Button>
              <Button
                onClick={() => router.back()}
                color="primary"
                variant="flat"
                className="!px-10">
                Back
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NotFound;
