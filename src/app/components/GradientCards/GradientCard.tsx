'use client';

import Image from 'next/image';

interface GradientCardProps {
  name: string;
  icon: string;
}

export default function GradientCard({ name, icon }: GradientCardProps) {
  return (
    <div className="w-[190px] h-[254px] rounded-[20px] bg-gradient-to-tr from-[#00ff75] to-[#3700ff] p-[1px] transition-all duration-300 hover:shadow-[0px_0px_30px_1px_rgba(0,255,117,0.30)]">
      <div className="w-full h-full bg-[#1a1a1a] rounded-[20px] transition-all duration-200 hover:scale-[0.98] flex flex-col items-center justify-center">
        {/* Logo */}
        <Image src={icon} alt={name} width={48} height={48} />
        <p className="mt-4 text-white text-center">{name}</p>
      </div>
    </div>
  )
}

