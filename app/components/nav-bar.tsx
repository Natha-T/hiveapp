"use client";

import Link from "next/link";
import Image from "next/image";
import { Route } from "next";

import { useState } from "react";

const links = [
  { href: "/talents", label: "Talent" },
  { href: "/companies", label: "Companies" },
  { href: "/about", label: "About Us" },
];

export const NavBar = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  return (
    <>
      <header aria-label="Site Header" className="bg-black ">
        <div className="flex items-center h-16 gap-8 px-4 mx-auto sm:px-6 lg:px-8">
          <a className="block" href="/">
            <span className="sr-only">Home</span>
            <Image
              src="/img/goodhive_light_logo.png"
              alt="GoodHive Logo"
              width={192}
              height={47}
            />
          </a>

          <div className="flex items-center justify-end flex-1 md:justify-between">
            <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {links.map(({ href, label }) => (
                  <li key={`${href}${label}`}>
                    <Link
                      href={href as Route}
                      className="text-white transition hover:text-yellow-500"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="block rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                  href="/"
                >
                  Metamask
                </a>
              </div>

              <button
                onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isOpenMobileMenu && (
          <div>
            <nav aria-label="Site Nav" className="block md:hidden">
              <ul className="flex flex-col items-center justify-center gap-6 text-sm">
                {links.map(({ href, label }) => (
                  <li key={`${href}${label}`}>
                    <Link
                      href={href as Route}
                      className="text-white transition hover:text-yellow-500"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </header>

      <div className="sticky top-0 flex flex-wrap items-center justify-between w-full px-5 py-2 bg-black">
        <div className="flex flex-wrap items-center justify-between w-full px-5 py-2 text-lg text-white capitalize container-fluid">
          <img
            className="ml-2"
            src="/img/goodhive_light_logo.png"
            alt="Goodhive"
          />
          <Link href="/">Home</Link>
          <Link href="/design">Design System</Link>
          <Link href="/looking-for-talent">Looking for talent</Link>
          <span className="flex items-center mr-10 space-x-2">
            <img src="/img/user_icon.png" alt="user" />
            <p>John Doe</p>
            <img src="/img/notification_icon.png" alt="notification" />
            <img src="/img/metamask_icon.png" alt="metamask" />
          </span>
        </div>
      </div>
    </>
  );
};
