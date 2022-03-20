import React from "react";

export default function ContentContainer({ children }) {
  return (
    <section className="container text-left flex justify-center">
      <div className="p-5 md:flex-col md:max-w-xl rounded-xl bg-white shadow-md">
        {children}
      </div>
    </section>
  );
}
