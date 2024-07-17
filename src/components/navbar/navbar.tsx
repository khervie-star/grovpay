"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel
} from "@headlessui/react";
import {
  ArrowLeftStartOnRectangleIcon,
  ArrowPathIcon,
  Bars3BottomRightIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon
} from "@heroicons/react/20/solid";
import logo from "@/assets/logo.png";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User
} from "@nextui-org/react";
import { siteUrls } from "@/config";
import Link from "next/link";
import { useAuth, useUser } from "@/context";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon
  }
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon }
];

export const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const pathname = usePathname();
  const { user } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  console.log(pathname, siteUrls.about);

  return (
    <header className="bg-white text-gray-600 border-b">
      <div className="container mx-auto">
        <nav
          aria-label="Global"
          className="mx-auto flex w-full items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link
              href={siteUrls.home}
              className="-m-1.5 p-1.5 flex items-center gap-2">
              <span className="sr-only">GrovPay</span>
              <img alt="GrovPay" src={logo.src} className="h-11 w-auto" />
              <p className="font-semibold text-base text-primary-500">
                GrovPay
              </p>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Open main menu</span>
              <Bars3BottomRightIcon aria-hidden="true" className="h-8 w-8" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex items-center lg:gap-x-8">
            <Link
              href={siteUrls.home}
              className={`text-[14px] leading-6 hover:bg-gray-50 ${pathname == siteUrls.home && "font-semibold text-app_green text-base"} `}>
              Home
            </Link>
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-[14px] leading-6">
                Recharge & Bill payment
                <ChevronDownIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-none"
                />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-base leading-6 hover:bg-gray-50">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          aria-hidden="true"
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block  text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-base  leading-6 text-gray-900 hover:bg-gray-100">
                      <item.icon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none text-gray-400"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-[14px] leading-6">
                Booking
                <ChevronDownIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-none"
                />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-base leading-6 hover:bg-gray-50">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          aria-hidden="true"
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block  text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-base  leading-6 text-gray-900 hover:bg-gray-100">
                      <item.icon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none text-gray-400"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
            <Link
              href={siteUrls.about}
              className={`text-[14px] leading-6 hover:bg-gray-50 ${pathname == siteUrls.about && "font-semibold text-app_green text-base"} `}>
              About us
            </Link>
            <Link
              href={siteUrls.blog}
              className={`text-[14px] leading-6 hover:bg-gray-50 ${pathname == siteUrls.blog && "font-semibold text-app_green text-base"} `}>
              Blog
            </Link>
            <Link
              href={siteUrls.contact}
              className={`text-[14px] leading-6 hover:bg-gray-50 ${pathname == siteUrls.contact && "font-semibold text-app_green text-base"} `}>
              Contact us
            </Link>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-2">
              {isLoggedIn ? (
                <div className="flex items-center gap-3">
                  <Dropdown placement="bottom-start">
                    <DropdownTrigger>
                      <User
                        as="button"
                        avatarProps={{
                          isBordered: true,
                          src: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        }}
                        className="transition-transform"
                        description={user?.email}
                        name={user?.fullName}
                      />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="User Actions" variant="flat">
                      <DropdownItem key="profile" className="h-14 gap-2">
                        <p className="font-bold">Signed in as</p>
                        <p className="font-bold">{user?.email}</p>
                      </DropdownItem>
                      <DropdownItem key="settings">My Account</DropdownItem>
                      <DropdownItem key="team_settings">Favorites</DropdownItem>
                      <DropdownItem key="analytics">Payments</DropdownItem>
                      <DropdownItem key="system">Order history</DropdownItem>
                      <DropdownItem key="system">Notifications</DropdownItem>
                      <DropdownItem key="configurations">Security</DropdownItem>
                      <DropdownItem key="help_and_feedback">
                        Help & Feedback
                      </DropdownItem>
                      <DropdownItem key="logout" color="danger">
                        Log Out
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Button
                    href={siteUrls.login}
                    as={Link}
                    color="primary"
                    variant="flat">
                    Login
                  </Button>
                  <Button
                    href={siteUrls.signUp}
                    as={Link}
                    color="primary"
                    variant="solid">
                    Sign up
                  </Button>
                </div>
              )}
            </div>
          </PopoverGroup>
        </nav>
      </div>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-all duration-400">
          <div className="flex items-center justify-between">
            <Link href={siteUrls.home} className="-m-1.5 p-1.5">
              <span className="sr-only">GrovPay</span>
              <img alt="GrovPay" src={logo.src} className="h-11 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href={siteUrls.home}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 ${pathname == "siteUrls.about" ? "font-semibold text-app_green" : "text-gray-900"} `}>
                  Home
                </Link>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Recharge & Bill payment
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        onClick={() => setMobileMenuOpen(false)}
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Bookings
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        onClick={() => setMobileMenuOpen(false)}
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href={siteUrls.about}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 ${pathname == "siteUrls.about" ? "font-semibold text-app_green" : "text-gray-900"} `}>
                  About us
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href={siteUrls.blog}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 ${pathname == "siteUrls.about" ? "font-semibold text-app_green" : "text-gray-900"} `}>
                  Blog
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href={siteUrls.contact}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 ${pathname == "siteUrls.about" ? "font-semibold text-app_green" : "text-gray-900"} `}>
                  Contact us
                </Link>

                {isLoggedIn && (
                  <div
                    className="-mx-3 flex items-center gap-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-danger-500 hover:bg-gray-50"
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}>
                    <span>Logout</span>{" "}
                    <ArrowLeftStartOnRectangleIcon className="w-6" />
                  </div>
                )}
              </div>
              <div className="py-6 flex items-center gap-2">
                {isLoggedIn ? (
                  <div className="flex gap-3 items-center">
                    <Dropdown placement="bottom-start">
                      <DropdownTrigger>
                        <User
                          as="button"
                          avatarProps={{
                            isBordered: true,
                            src: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
                          }}
                          className="transition-transform"
                          description={user?.email}
                          name={user?.fullName}
                        />
                      </DropdownTrigger>
                      <DropdownMenu aria-label="User Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                          <p className="font-bold">Signed in as</p>
                          <p className="font-bold">{user?.email}</p>
                        </DropdownItem>
                        <DropdownItem key="settings">My Account</DropdownItem>
                        <DropdownItem key="team_settings">
                          Favorites
                        </DropdownItem>
                        <DropdownItem key="analytics">Payments</DropdownItem>
                        <DropdownItem key="system">Order history</DropdownItem>
                        <DropdownItem key="system">Notifications</DropdownItem>
                        <DropdownItem key="configurations">
                          Security
                        </DropdownItem>
                        <DropdownItem key="help_and_feedback">
                          Help & Feedback
                        </DropdownItem>
                        <DropdownItem key="logout" color="danger">
                          Log Out
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 !w-full">
                    <Button
                      onClick={() => setMobileMenuOpen(false)}
                      fullWidth
                      href={siteUrls.login}
                      as={Link}
                      color="primary"
                      variant="flat">
                      Login
                    </Button>
                    <Button
                      onClick={() => setMobileMenuOpen(false)}
                      fullWidth
                      href={siteUrls.signUp}
                      as={Link}
                      color="primary"
                      variant="solid">
                      Sign up
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
