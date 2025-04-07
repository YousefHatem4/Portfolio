"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper function to determine if a link is active
  const isActive = (path) => {
    return pathname === path;
  };

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#161513] font-fam fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <Link
          href={"/"}
          className="self-center text-2xl whitespace-nowrap font-bold group"
        >
          <span className="bg-gradient-to-r from-[#00F5A0] via-[#00D9F5] to-[#0083F5] bg-clip-text text-transparent">
            Yousef
          </span>
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            href={"/contact"}
            type="button"
            className="text-white btn-nav text-center"
          >
            Connect With Me
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="underline-nav flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg bg-[#161513] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li className="nav-item">
              <Link
                href={"/"}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-3 rounded-sm md:p-0 ${
                  isActive("/")
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] via-[#00D9F5] to-[#0083F5]"
                    : "text-white"
                }`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={"/about"}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-3 rounded-sm md:p-0 ${
                  isActive("/about")
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] via-[#00D9F5] to-[#0083F5]"
                    : "text-white"
                }`}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={"/portfolio"}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-3 rounded-sm md:p-0 ${
                  isActive("/portfolio")
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] via-[#00D9F5] to-[#0083F5]"
                    : "text-white"
                }`}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={"/contact"}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-3 rounded-sm md:p-0 ${
                  isActive("/contact")
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] via-[#00D9F5] to-[#0083F5]"
                    : "text-white"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
