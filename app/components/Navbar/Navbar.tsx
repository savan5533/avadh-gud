import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Image from "next/image";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "#home-section", current: false },
  { name: "About us", href: "#about-section", current: false },
  { name: "Products", href: "#product-slider-section", current: false },
  { name: "Why Choose Us", href: "#why-choose-us-section", current: false },
  { name: "Certificates", href: "#certified-section", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="text-white  py-2 bg-shadered flex justify-center items-center">
          <h2 className="font-normal text-xs lg:text-md text-center">
            We are available on Amazon
            <Link href="https://amzn.in/d/9XuhKD1" className="text-white font-bold underline mx-2">
              Explore Now
            </Link>
          </h2>
        </div>

        <div className="mx-auto max-w-7xl p-3 md:p-6 lg:px-8 lg:py-0">
          <div className="relative flex h-12 sm:h-20 items-center">
            <div className="flex flex-1 items-center sm:justify-between">
              {/* LOGO */}

              <div className="flex sm:hidden flex-shrink-0 items-center border-right">
                  <Image
                    src="/public/images/Logo/avadh-desi-gud-logo.png"
                    alt="Avadh Desi Gud"
                    width={120}
                    height={120}
                  />
              </div>
              <div className="hidden sm:flex flex-shrink-0 items-center border-right">
                <Image
                  src="/public/images/Logo/avadh-desi-gud-logo.png"
                  alt="Avadh Desi Gud"
                  width={150}
                  height={150}
                />
              </div>

              {/* LINKS */}

              <div className="hidden lg:flex items-center border-right ">
                <div className="flex justify-end space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-black"
                          : "navlinks hover:opacity-100",
                        "px-3 py-4 rounded-md text-lg font-normal opacity-50 hover:text-black space-links"
                      )}
                      aria-current={item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="gap-6 hidden lg:flex">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/images/Navbar/phone.svg"}
                    alt="phone-image"
                    width={19}
                    height={19}
                  />
                  <p className="text-lg font-medium">
                    <a
                      href="tel:+919099947166"
                      className="text-blue-600 hover:underline"
                    >
                      +91 9099947166
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* DRAWER FOR MOBILE VIEW */}

            {/* DRAWER ICON */}

            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-6 w-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* DRAWER LINKS DATA */}

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
