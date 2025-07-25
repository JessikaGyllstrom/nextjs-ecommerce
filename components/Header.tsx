"use client";

import React from "react";
import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";
import useBasketStore from "@/app/(store)/store";

function Header() {
  const { user } = useUser();
  const itemCount = useBasketStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  const createClerkPasskey = async () => {
    try {
      const response = await user?.createPasskey();

      console.log("Passkey created:", response);
    } catch (error) {
      console.error("Error creating passkey:", JSON.stringify(error, null, 2));
    }
  };

  return (
    <header className="flex justify-between items-center px-6 py-2 shadow-lg">
      <div className="flex flex-wrap md:flex-nowrap w-full justify-between items-center gap-4">
        <Link
          href="/"
          className="text-2xl font-bold text-zinc-900 hover:text-sage-500 cursor-pointer mx-auto sm:mx-0"
        >
          <div className="flex items-center space-x-2">
            <svg
              fill="#000000"
              width="64px"
              height="64px"
              viewBox="0 0 512 512"
              data-name="Layer 1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title></title>
                <path d="M495.86,304.11c-35.34-19.48-67.76-21.74-75.38-22,10.85-67.12-25.6-129.93-27.42-133a6,6,0,0,0-7.28-2.51c-39.41,15.31-58.66,28.94-67.72,37.25-23.09-58.56-55.62-93.78-57.73-96a6.18,6.18,0,0,0-8.66,0c-2.11,2.24-34.64,37.46-57.73,96-9.06-8.31-28.31-21.94-67.72-37.25a6,6,0,0,0-7.28,2.51c-1.82,3.05-38.27,65.86-27.43,133-7.64.26-40.05,2.53-75.37,22a5.94,5.94,0,0,0-3,6.43c.26,1.28,25.94,115.4,184.08,115.38a394.93,394.93,0,0,0,58.74-4.7,394.83,394.83,0,0,0,58.74,4.7c158.1,0,183.82-114.1,184.08-115.38A5.94,5.94,0,0,0,495.86,304.11ZM385.22,159.66c9.39,18,41.6,87.74,15.07,150.5-15.94,37.72-50.43,66.38-102.2,85.85,13.51-11.75,27.2-28.12,35.36-50.26,24.64-34.4,37.93-98.06,38.48-100.77a6,6,0,0,0-11.67-2.39c-.1.45-7,33.51-19.55,64,.05-1.48.25-2.85.25-4.37A320.32,320.32,0,0,0,322.7,196.11C327.44,190.9,343.19,176.58,385.22,159.66Zm-258.44,0c42,16.91,57.76,31.22,62.52,36.45A320.32,320.32,0,0,0,171,302.25c0,1.53.21,2.91.25,4.41-12.52-30.54-19.45-63.62-19.55-64.07A6,6,0,1,0,140.07,245c.55,2.71,13.84,66.42,38.49,100.81,8.17,22.12,21.84,38.47,35.35,50.22-51.75-19.46-86.23-48.1-102.17-85.77C85.19,247.55,117.39,177.71,126.78,159.66ZM26,312.38C61.11,294.28,93,294,93.33,294a4.89,4.89,0,0,0,.64-.14,138.52,138.52,0,0,0,6.74,20.95q12.14,28.71,36.85,50.87c-48.64-20-68.74-39.33-69-39.56a6,6,0,0,0-8.38,8.47c1.3,1.29,33,32,114.76,57.05a290.25,290.25,0,0,0,50.21,21.14C68.78,425.59,32.3,333.89,26,312.38Zm230-114.9a6,6,0,0,0-6,6V406.07C230.77,396.58,183,366.55,183,302.25c0-105.58,56.72-181.54,73-201.21,16.32,19.67,73,95.63,73,201.21,0,65.09-47.75,94.63-67.08,103.92V203.44A6,6,0,0,0,256,197.48Zm30.82,215.3A291.59,291.59,0,0,0,337,391.64c81.82-25,113.49-55.77,114.79-57.06a6,6,0,0,0-8.38-8.47c-.24.23-20.34,19.52-69,39.57q24.68-22.15,36.85-50.88A137.46,137.46,0,0,0,418,293.85a5,5,0,0,0,.65.14c.33,0,32,.21,67.3,18.35C479.36,333.4,441.42,425.27,286.82,412.78Z"></path>
              </g>
            </svg>
            <span>Bare Botanics</span>
          </div>
        </Link>
        <div className="flex w-full md:w-lg">
          <Form
            action="/search"
            className="relative w-full mx-auto mt-2 md:mt-0"
          >
            {/* Search Icon */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm8-2l4 4"
                />
              </svg>
            </div>
            {/* Input Field */}
            <input
              type="text"
              name="query"
              placeholder="Search for products"
              className="
        bg-gray-100 text-gray-700 pl-10 pr-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-sage-300 focus:ring-opacity-50 border w-full"
            />
          </Form>
        </div>
        <div className="flex justify-center items-center space-x-12 mt-4 sm-mt-0 flex-1 md:flex-none md:space-x-4">
          {user && (
            <div className="relative group">
              <Link href="/cart" className="">
                <TrolleyIcon className="w-8 h-8 text-zinc-900 hover:text-sage-400" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-sage-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {itemCount}
                  </span>
                )}
              </Link>

              <div
                className="z-50 absolute left-1/2 -translate-x-1/2 top-full mb-2 hidden group-hover:block bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap"
                role="tooltip"
              >
                Go to Cart
                {/* Tooltip Arrow */}
                <div className="absolute w-3 h-3 bg-gray-900 rotate-45 -top-1 left-1/2 -translate-x-1/2"></div>
              </div>
            </div>
          )}

          <ClerkLoaded>
            {user && (
              <div className="relative group">
                <Link href="/orders" aria-label="View Orders">
                  <PackageIcon className="w-8 h-8 text-zinc-900 hover:text-sage-400" />
                </Link>
                <div
                  className="z-50 absolute left-1/2 -translate-x-1/2 top-full mb-2 hidden group-hover:block bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap"
                  role="tooltip"
                >
                  View Orders
                  <div className="absolute w-3 h-3 bg-gray-900 rotate-45 -top-1 left-1/2 -translate-x-1/2"></div>
                </div>
              </div>
            )}
            {user ? (
              <div className="flex items-center space-x-2">
                <UserButton />
                <div className="hidden sm:block">
                  <p className="text-gray-600">Welcome back</p>
                  <p className="font-bold">{user.fullName}!</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal">
                <button className="font-normal text-lg bg-blush-400 hover:bg-blush-500 cursor-pointer animate-pulser text-black py-2 px-6 shadow-lg mb-4 md:mb-0 ">
                  Sign In
                </button>
              </SignInButton>
            )}
            {user?.passkeys.length === 0 && (
              <button
                onClick={createClerkPasskey}
                className="bg-white hover:bg-blue-700 hover:text-white animate-pulser text-blue-500 py-2 px-4 rounded border-blue-300 border"
              >
                Create a passkey
              </button>
            )}
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
}

export default Header;
