import React from "react";

export default function Navbar() {
  return (
    <header className="text-bodyText font-semibold body-font mb-10 bg-cardVariantPrimary">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex justify-center md:mr-auto md:ml-4 md:py-1 md:pl-4 	flex-wrap items-center text-base">
          <a
            href="/"
            className="mr-5 hover:text-primary md:border-r md:border-bodyText"
          >
            হোম
          </a>
          <a
            href="/"
            className="mr-5 hover:text-primary md:border-bodyText md:border-r"
          >
            আমাদের জানুন
          </a>
          <a
            href="/"
            className="mr-5 hover:text-primary md:border-bodyText md:border-r"
          >
            হেডকোয়াটার্স
          </a>
          <a
            href="/"
            className="mr-5 hover:text-primary md:border-bodyText md:border-r"
          >
            বার্তা
          </a>
          <a
            href="/"
            className="mr-5 hover:text-primary md:border-bodyText md:border-r"
          >
            দরপত্র
          </a>
          <a
            href="/"
            className="mr-5 hover:text-primary md:border-bodyText md:border-r"
          >
            আর্কাইভ
          </a>
          <a href="/" className="mr-5 hover:text-primary">
            যোগাযোগ
          </a>
        </nav>
      </div>
    </header>
  );
}
