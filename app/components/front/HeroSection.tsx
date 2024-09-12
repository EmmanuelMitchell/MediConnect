import Link from "next/link";
import React from "react";
import SearchInput from "./Search";
import AnimatedText from "./AnimaTedText";

export default function Hero() {
  return (
    <>
      <div className="bg-gray-900 px-4 pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px] ">
        <div className="max-w-6xl mx-auto ">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                {/* <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                  Book Your Therapist Sess
                  <ion Now
                </h1> */}
                <h2 className="text-white lg:text-xl font-mono m-1">
                  <AnimatedText />
                  {/* <span className="">Book Your Therapist Session Now </span> */}
                </h2>
                <p className="mb-8 max-w-[480px] text-base text-gray-50 dark:text-dark-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Assumenda tempore reiciendis alias numquam illum! Eius
                  obcaecati soluta aut officia vitae.
                </p>
                <div>
                  {/* <input
                    placeholder="Search"
                    type="text"
                    className="border border-gray-300 rounded-md py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  /> */}
                  <SearchInput />
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-4">
                  <button className="bg-white text-xs py-2 px-4 rounded-md">
                    Need Doctoer Urgently
                  </button>
                  <Link
                    href=""
                    className="flex gap-2 items-center bg-white py-2 px-4 rounded-md outline-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-download"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                    Download App
                  </Link>
                </div>
                {/* Count Num */}
                <div className="flex gap-4 text-white p-4">
                  <span>
                    <h1 className="text-center text-3xl">600K</h1>
                    <p className="text-sm">Lorem ipsum dolor sit.</p>
                  </span>
                  <span>
                    <h1 className="text-center text-3xl">600K</h1>
                    <p className="text-sm">Lorem ipsum dolor sit.</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src="https://www.ebony.com/wp-content/uploads/2023/03/25/GettyImages-1400102237-1.jpg"
                    alt="hero"
                    className="max-w-full lg:ml-auto"
                  />
                  <span className="absolute -bottom-8 -left-8 z-[-1]"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
