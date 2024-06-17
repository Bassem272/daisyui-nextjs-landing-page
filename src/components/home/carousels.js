// import React from 'react'
// import { ChevronLeft, ChevronRight } from "react-feather";
// import { useState , useEffect} from "react";
// function Carousels() {
//     const [curr, setCurr] = useState(0);

//     const prev = () =>
//       setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
//     const next = () =>
//       setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  
//     const autoslide = true;
//     const interval = 3000;
//     useEffect(() => {
//         if (autoslide) {
//           const timer = setInterval(next, interval);
//           return () => clearInterval(timer);
//         }
//       }, []);
 
//     return (
//         <>

//     <div className="carousel carousel-center p-4 space-x-4 bg-neutral   ">
//   <div className="carousel-item">
//     <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" />
//   </div> 
//   <div className="carousel-item">
//     <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box" />
//   </div> 
//   <div className="carousel-item">
//     <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" />
//   </div> 
//   <div className="carousel-item">
//     <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box" />
//   </div> 
//   <div className="carousel-item">
//     <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box" />
//   </div> 
//   <div className="carousel-item">
//     <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box" />
//   </div> 
//   <div className="carousel-item">
//     <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" />
//   </div>
//   <div className="carousel-item">
//     <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" />
//   </div>
//   <div className="carousel-item">
//     <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" />
//   </div>
//   <div className="carousel-item">
//     <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" />
//   </div>
//   <div className="carousel-item">
//     <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" />
//   </div>
//   <div className="carousel-item">
//     <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" />
//   </div>
//   <div className="absolute inset-0 flex items-center justify-between p-4">
//             <button
//               onClick={prev}
//               className="p-1 shadow bg-white/80 text-gray-800 rounded-full hover:bg-white z-10"
//             >
//               <ChevronLeft size={30} />
//             </button>
//             <button
//               onClick={next}
//               className="p-1 shadow bg-white/80 text-gray-800 rounded-full hover:bg-white z-10"
//             >
//               <ChevronRight size={30} />
//             </button>
//           </div>
// </div>
//         </>

//   )
// }

// export default Carousels
// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'react-feather';

// function Carousels() {
//   const slides = [
//     "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
//     "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
//     "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
//     "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
//     "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
//     "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
//     "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
//     "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
//     "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
//     "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
//     "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg",
//     "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
//     "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg",
//     "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
//   ];

//   const [curr, setCurr] = useState(0);

//   const prev = () =>
//     setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
//   const next = () =>
//     setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

//   const autoslide = true;
//   const interval = 3000;

//   useEffect(() => {
//     if (autoslide) {
//       const timer = setInterval(next, interval);
//       return () => clearInterval(timer);
//     }
//   }, [next]);

//   return (
//     <div className="relative w-full">
//       <div className="carousel carousel-center p-4 space-x-4 bg-neutral">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`carousel-item ${index === curr ? 'block' : 'hidden'}`}
//           >
//             <img src={slide} className="rounded-box" />
//           </div>
//         ))}
//         <div className="absolute inset-0 flex items-center justify-between p-4">
//           <button
//             onClick={prev}
//             className="p-1 shadow bg-white/80 text-gray-800 rounded-full hover:bg-white z-10"
//           >
//             <ChevronLeft size={30} />
//           </button>
//           <button
//             onClick={next}
//             className="p-1 shadow bg-white/80 text-gray-800 rounded-full hover:bg-white z-10"
//           >
//             <ChevronRight size={30} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Carousels;


// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'react-feather';

// function Carousels() {
//   const slides = [
//     "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
//     "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
//     "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
//     "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg",
//     "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
//     "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg",
//     "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
//   ];

//   const [curr, setCurr] = useState(0);
//   const itemsToShow = 4; // Number of items to show at once
//   const itemWidth = 100 / itemsToShow; // Width of each item as a percentage

//   const prev = () =>
//     setCurr((curr) => (curr === 0 ? slides.length - itemsToShow : curr - 1));
//   const next = () =>
//     setCurr((curr) => (curr === slides.length - itemsToShow ? 0 : curr + 1));

//   const autoslide = true;
//   const interval = 3000;

//   useEffect(() => {
//     if (autoslide) {
//       const timer = setInterval(next, interval);
//       return () => clearInterval(timer);
//     }
//   }, [next]);

//   return (
//     <div className="relative w-full overflow-hidden p-4 space-x-4 bg-neutral rounded-box ">
//       <div
//         className="flex transition-transform ease-in-out duration-500 p-4 space-x-4 bg-neutral rounded-box  "
//         style={{ transform: `translateX(-${curr * itemWidth}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 rounded-box"
//             style={{ width: `${itemWidth}%` }}
//           >
//             <img src={slide} className="w-full object-cover" />
//           </div>
//         ))}
//       </div>
//       <div className="absolute inset-0 flex items-center justify-between p-4">
//         <button
//           onClick={prev}
//           className="p-1 shadow bg-white/80 text-gray-800 rounded-full hover:bg-white z-10"
//         >
//           <ChevronLeft size={30} />
//         </button>
//         <button
//           onClick={next}
//           className="p-1 shadow bg-white/80 text-gray-800 rounded-full hover:bg-white z-10"
//         >
//           <ChevronRight size={30} />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Carousels;
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

function Carousels() {
  const slides = [
    "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
    "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
    "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
    "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg",
    "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
    "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg",
    "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
  ];

  const [curr, setCurr] = useState(0);
  const itemsToShow = 4; // Number of items to show at once
  const itemWidth = 100 / itemsToShow; // Width of each item as a percentage

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - itemsToShow : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - itemsToShow ? 0 : curr + 1));

  const autoslide = true;
  const interval = 8000;

  useEffect(() => {
    if (autoslide) {
      const timer = setInterval(next, interval);
      return () => clearInterval(timer);
    }
  }, [next]);

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-gray-800 via-blue-700 to-gray-900 p-5 space-x-7">
      <div
        className="flex transition-transform ease-in-out duration-1000"
        style={{ transform: `translateX(-${curr * itemWidth}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-2"
            style={{ width: `${itemWidth}%` }}
          >
            <img src={slide} className="w-full object-cover rounded-lg" />
          </div>
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
    </div>
  );
}

export default Carousels;
