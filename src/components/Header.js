import React from "react";

export default function Header() {
  return (
    <section className="absolute top-0 left-0 z-10 w-full font-display px-6 h-32 flex justify-around items-center bg-green-800 opacity-75">
      {/* div for RAB logo and Headline */}
      <div className="flex justify-between py-10">
        <div className="h-24 w-24">
          <img src={require("../images/logo.png")} alt="rab" />
        </div>
        <div className="text-left text-white pl-5 md:pt-4 lg:pt-4 pt-2">
          <h2 className="lg:text-4xl md:text-3xl text-xl font-bold tracking-wide">
            RAPID ACTION BATTALION
          </h2>
          <h5 className="tracking-widest lg:text-xl md:text-md text-sm pt-1 font-semibold">
            fight against terror
          </h5>
        </div>
      </div>
      {/* div for govt logo  */}
      <div className="h-20 w-20">
        <img src={require("../images/gov.png")} alt="bangladesh" />
      </div>
    </section>
  );
}
