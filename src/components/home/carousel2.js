import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png",
];

function Carousel2() {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  const autoslide = true;
  const interval = 3000;

  useEffect(() => {
    if (autoslide) {
      const timer = setInterval(next, interval);
      return () => clearInterval(timer);
    }
  }, []);

  return (
    <div className="App bg-blue-500">
      <div className="max-w-lg mx-auto">
        <div className="relative overflow-hidden" style={{ width: "300px", height: "400px" }}>
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${curr * 100}%)`, width: "100%", height: "100%" }}
          >
            {/* Render the images */}
            {slides.map((s, index) => (
              <img
                key={index}
                src={s}
                alt="carousel"
                className="object-cover"
                style={{ width: "100%", height: "100%" }}
              />
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={prev}
              className="p-1 shadow bg-white/80 text-gray-800 rounded-full hover:bg-white z-10"
            >
              <ChevronLeft size={30} />
            </button>
            <button
              onClick={next}
              className="p-1 shadow bg-white/80 text-gray-800 rounded-full hover:bg-white z-10"
            >
              <ChevronRight size={30} />
            </button>
          </div>

          <div className="bottom-4 absolute left-0 right-0">
            <div className="flex justify-center items-center gap-2">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`transition-all w-4 h-4 rounded-full shadow bg-white ${
                    curr === index ? "p-3" : "bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel2;
