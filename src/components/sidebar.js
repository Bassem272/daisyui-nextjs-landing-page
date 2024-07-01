// // components/Sidebar.js
// import Link from 'next/link';
// import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
// import Lottie from 'react-lottie';
// import whatsappAnimation from '../animations/whatsapp.json';

// const Sidebar = () => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: whatsappAnimation,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice',
//     },
//   };

//   return (
//     <div className="fixed left-0 top-72 h-2/5 w-16 md:w-9 flex flex-col bg-transparent shadow-lg bg-green-500">
//       <Link href="https://www.facebook.com">
//         <div className="text-white p-4 hover:bg-fuchsia-400">
//           <FaFacebook size="24" />
//         </div>
//       </Link>
//       <Link href="https://www.twitter.com">
//         <div className="text-white p-4 hover:bg-fuchsia-400">
//           <FaTwitter size="24" />
//         </div>
//       </Link>
//       <Link href="https://www.instagram.com">
//         <div className="text-white p-4 hover:bg-fuchsia-400">
//           <FaInstagram size="24" />
//         </div>
//       </Link>
//       {/* <Link href="https://www.whatsapp.com">
//         <div className="p-4 hover:bg-fuchsia-400">
//           <Lottie options={defaultOptions} height={50} width={50} />
//         </div>
//       </Link> */}
//     </div>
//   );
// };

// export default Sidebar;
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Lottie from 'react-lottie';
import whatsappAnimation from '../animations/whatsapp.json'; // Ensure this path is correct
import { FaWhatsapp } from 'react-icons/fa6';

const Sidebar = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: whatsappAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="fixed left-0 top-1/3  md:top-1/4   md:h-auto  md:w-16 lg:w-14 flex flex-col items-center bg-green-500 shadow-lg z-50 ">
      <Link href="https://www.facebook.com">
        <div className="w-full p-2 md:p-3 lg:p-2 hover:bg-blue-500 flex justify-center">
          <FaFacebook className="text-white w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
        </div>
      </Link>
      <Link href="https://www.twitter.com">
        <div className="w-full p-2 md:p-3 lg:p-2 hover:bg-blue-500 flex justify-center">
          <FaTwitter className="text-white w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
        </div>
      </Link>
      <Link href="https://www.instagram.com">
        <div className="w-full p-2 md:p-3 lg:p-2 hover:bg-blue-500 flex justify-center">
          <FaInstagram className="text-white w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
        </div>
      </Link>
      <Link href="https://www.whatsapp.com">
        <div className="w-full p-2 md:p-1 lg:p-2 hover:bg-blue-500 flex justify-center">
          {/* <Lottie options={defaultOptions} height={40} width={40} /> */}
          <FaWhatsapp className="text-white w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />

        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
