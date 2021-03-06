import React from "react";

export default function ContentContainer({ children }) {
  return (
    <section className="container text-left flex justify-center">
      <div className="xl:p-5 lg:p-5 p-6 md:max-w-xl rounded-xl shadow-md bg-white">
        {children}
      </div>
    </section>
  );
}
