import React from 'react'
import Carousel from '../components/home/carousel'
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from "react-feather";
import { useState } from "react";
 const slides = [
    'https://i.ibb.co/ncrXc2V/1.png',
    'https://i.ibb.co/B3s7v4h/2.png',
    'https://i.ibb.co/XXR8kzF/3.png',
    'https://i.ibb.co/yg7BSdM/4.png'
      ];
      function Appo() {
        const [curr, setCurr] = useState(0);
      
        const prev = () =>
          setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
        const next = () =>
          setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
      
        return (
          <div className="Appo bg-blue-500 p-4">
            <div className="bg-red-200 max-w-lg overflow-hidden relative mx-auto">
              <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
              >
                {slides.map((s, index) => (
                  <img key={index} src={s} alt="carousel" />
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={prev}
                  className="p-1 shadow bg-white/80 text-gray-800 rounded-full hover:bg-white z-10"
                >
                  <ChevronLeft size={40} />
                </button>
                <button
                  onClick={next}
                  className="p-1 shadow bg-white/80 text-gray-800 rounded-full hover:bg-white z-10"
                >
                  <ChevronRight size={40} />
                </button>
              </div>
            </div>
          </div>
        );
      }
      
      export default Appo;
      
    