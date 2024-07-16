"use client";

import { usePathname } from "next/navigation";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  RadioGroup,
  Radio
} from "@nextui-org/react";

export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <section>
      <div className="bg-[#f6f7f8] w-full h-full">
        <div className="container mx-auto py-10">
          <div className="px-4 flex-1">
            <div className="w-full max-w-[560px] mx-auto bg-white p-4 lg:p-[3rem] shadow-[3px_0px_50px_-35px_rgba(0,0,0,0.4)] rounded-[4px]">
              <Tabs
                fullWidth
                aria-label="Options"
                selectedKey={pathname}
                variant="underlined"
                size="lg"
                classNames={{
                  tabList:
                    "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                  cursor: "w-full bg-app_green",
                  tab: "px-0 h-12 !flex-1",
                  tabContent:
                    "text-base group-data-[selected=true]:text-app_black"
                }}
                className="!w-full">
                <Tab key="/auth/login" title="Login" href="/auth/login" />
                <Tab key="/auth/sign-up" title="Sign up" href="/auth/sign-up" />
              </Tabs>
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
