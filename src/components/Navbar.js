import React from "react";

import navItems from "../data/home/navItems";

export default function Navbar() {
  return (
    <header className="text-bodyText font-semibold body-font mb-10 bg-gray-200">
      <div className="container mx-auto flex md:mx-auto justify-center flex-wrap p-5 flex-col md:flex-row items-center">
        {navItems.map((navItems, index) => (
          <nav key={index} className="flex flex-wrap items-center text-base">
            <a
              className="hover:text-primary hover:border-b-2 hover:border-b-primary"
              href="/"
            >
              {navItems}
            </a>
            <div className="hidden md:block lg:block xl:block mx-5 h-4 border-l-2 border-bodyText"></div>
          </nav>
        ))}
      </div>
    </header>
  );
}
