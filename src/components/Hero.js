import React from "react";
import Header from "./Header";

export default function Hero() {
  return (
    <section>
      <Header className="" />
      <div className="relative">
        <div
          id="carouselExampleCaptions"
          className="carousel slide relative"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active relative float-left w-full">
              <img
                src="https://thefinancialexpress.com.bd/uploads/1504605140.jpg"
                className="block w-full object-contain"
                alt="..."
              />
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src="https://i.redd.it/go8033yr62t31.jpg"
                className="block w-full object-contain"
                alt="..."
              />
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src="https://cdni0.trtworld.com/w960/h540/q75/64848_AP_18362485377045_1571577100235.jpg"
                className="block w-full object-contain"
                alt="..."
              />
            </div>
            <div className="carousel-caption flex justify-between items-center absolute top-1/2 font-bold">
              {/* caption */}
              <div className="text-left space-y-2 lg:space-y-6 lg:text-5xl ">
                <h4>দুর্বার</h4>
                <h4>নির্ভীক</h4>
                <h4>অতন্দ্র প্রহরী</h4>
              </div>
              {/* button */}
            </div>
          </div>

          {/* buttons for carousel */}
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
