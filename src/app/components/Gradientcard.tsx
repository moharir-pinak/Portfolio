
// import React from 'react';
// import Image from "next/image";
// import technologiesrev from "../data/technologiesrev.json";


// interface GradientCardProps {
//   logoUrl: string;
// }

// const GradientCard: React.FC<GradientCardProps> = ({ logoUrl }) => {
//   return (
//     <div className="relative w-[190px] h-[254px] rounded-[20px] transition-all duration-300 hover:shadow-[0px_0px_30px_1px_rgba(0,255,117,0.3)] cursor-pointer overflow-hidden">
//       <div className="card2 absolute inset-0 bg-[#1a1a1a] rounded-[20px] transition-all duration-200 hover:scale-[0.98]">
//         {/* Logo inside the card */}
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//           <img src={logoUrl} alt="Logo" className="w-16 h-16 object-contain" />
//         </div>
//       </div>
//       <style jsx>{`
//         .card2 {
//           width: 100%;
//           height: 100%;
//           background: rgba(217, 217, 217, 0.58);
//           border: 1px solid white;
//           box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
//           backdrop-filter: blur(6px);
//           border-radius: 17px;
//           text-align: center;
//           transition: all 0.5s ease;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           user-select: none;
//           font-weight: bolder;
//           color: black;
//           position: relative;
//           animation: gradientAnimation 3s ease infinite;
//         }

//         @keyframes gradientAnimation {
//           0% {
//             background: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
//           }
//           50% {
//             background: linear-gradient(163deg, #ff00a2 0%, #00bfff 100%);
//           }
//           100% {
//             background: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
//           }
//         }

//         .card2:hover {
//           border: 1px solid black;
//           transform: scale(1.05);
//         }

//         .card2:active {
//           transform: scale(0.95) rotateZ(1.7deg);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default GradientCard;
import React from 'react';

interface GradientCardProps {
  logoUrl: string;
}

const GradientCard: React.FC<GradientCardProps> = ({ logoUrl }) => {
  return (
    <div className="relative w-[200px] h-[250px] rounded-[14px] flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] overflow-hidden cursor-pointer">
      {/* Animated Blob */}
      <div className="absolute top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-red-500 opacity-70 blur-[12px] animate-blob-bounce" />
      
      {/* Card Content */}
      <div className="absolute top-[5px] left-[5px] w-[190px] h-[240px] rounded-[10px] bg-white bg-opacity-95 backdrop-blur-[24px] outline outline-[2px] outline-white overflow-hidden z-10 flex items-center justify-center">
        <img src={logoUrl} alt="Logo" className="w-16 h-16 object-contain z-20" />
      </div>
    </div>
  );
};

export default GradientCard;
