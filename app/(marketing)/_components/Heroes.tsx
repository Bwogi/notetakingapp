"use client";

import { Button } from "@/components/ui/button";

export default function Heroes() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <img className="h-28" src="/light_logo.jpg" alt="Your Company" />
            <div className="hidden sm:mt-32 sm:flex lg:mt-16">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Another successful experiment from Odelabs.{" "}
                <a
                  href="#"
                  className="whitespace-nowrap font-semibold text-indigo-600"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Accurate Shipping & Distribution Data.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              An intuitive app designed to streamline the process of capturing
              crutial information such as container & trailer numbers, seal
              numbers and freight bills, providing businesses with real-tiem
              insights and precise documentation for efficient shipping and
              distribution operations.
            </p>
            <div className="mt-10 flex justify-center items-center gap-x-6">
              <Button>Enter NoteX</Button>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="/container.jpg"
            alt="container"
          />
        </div>
      </div>
    </div>
  );
}