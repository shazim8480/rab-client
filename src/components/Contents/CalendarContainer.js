import React from "react";

export default function CalendarContainer({ children }) {
  return (
    <div className="font-body h-24 rounded-xl w-28 relative bg-gray-200 flex justify-center items-end">
      <div className="absolute top-0 rounded-t-xl left-0 w-28 z-10 bg-green-600 h-3/4 text-green-50 flex justify-center items-start">
        <div className="">
          <h5 className="text-xl pl-1">April</h5>
          <h5 className="text-4xl font-bold">03</h5>
        </div>
      </div>
      <h5 className="text-xl font-semibold -mb-0.5 tracking-wider pl-1">
        2017
      </h5>
    </div>
  );
}
