import React from 'react';
import Image from 'next/image';

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
        <Image src={logoUrl} alt="Logo" width={64} height={64} className="w-16 h-16 object-contain z-20" />
      </div>
    </div>
  );
};

export default GradientCard;
