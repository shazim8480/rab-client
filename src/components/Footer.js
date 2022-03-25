import React from "react";

import footerData from "../data/home/footerData";

export default function Footer() {
  return (
    <footer className="bg-footer w-full bg-center bg-contain relative z-10">
      <div className="text-white bg-green-700 bg-opacity-80 top-0 left-0 z-20">
        <div className="container px-5 py-10 mx-auto z-30">
          <div className="flex flex-wrap md:text-left text-left order-first ml-4 first:ml-0">
            {footerData.map((footerData, index) => {
              return (
                <div
                  key={index}
                  className="lg:w-1/3 md:w-1/2 w-full px-4  mb-8 lg:mb-0"
                >
                  <h4 className="text-green-50 font-semibold tracking-widest text-lg mb-2  ">
                    {footerData.title}
                  </h4>
                  <div className="mb-4 border-b-2 border-solid border-b-green-800"></div>
                  {footerData.image ? (
                    <div className="flex justify center lg:justify-start w-[90%]">
                      <img src={footerData.image} alt="facebook-page" />
                    </div>
                  ) : (
                    <nav className="list-none">
                      {footerData.items.map((item, index) => (
                        <li key={index} className="mb-3">
                          <a href="/">{item}</a>
                        </li>
                      ))}
                    </nav>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* lower section */}
      <div className="bg-green-900 text-green-50 bg-opacity-95 bottom-0 left-0 w-full">
        <div className="px-5 py-5 flex items-center justify-between flex-row ">
          <p className="text-sm ml-6">
            © all rights reserved Comm & MIS Wing,
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="ml-1"
              target="_blank"
            >
              RAB HQ
            </a>
          </p>
          <div className="flex lg:justify-center justify-start">
            <a href="/">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="/" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="/" className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a href="/" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
