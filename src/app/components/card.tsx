import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  onClick: () => void;
}

export default function Card({ title, subtitle, description, image, onClick }: CardProps) {
  return (
    <article
      onClick={onClick}
      className="relative w-72 h-72 text-gray-800 bg-gray-950 overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group cursor-pointer"
    >
      {/* Project Image */}
      {image && (
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          style={{ zIndex: 0 }}
        />
      )}

      {/* Overlay for title */}
      <div className="absolute top-4 left-4 font-bold text-lg text-white z-10 drop-shadow-lg">
        {title}
      </div>

      {/* Hidden content that slides up on hover */}
      <div className="card_content absolute left-0 bottom-2 h-44 w-full p-4 bg-gray-200 bg-opacity-90 rounded-t-2xl transform translate-y-36 transition-transform duration-500 group-hover:translate-y-0 z-10">
        <span className="card_title font-bold text-lg text-gray-900">{subtitle}</span>
        {/* Description and button fade in only on hover */}
        <p className="card_description text-sm text-gray-800 opacity-0 transition-opacity duration-500 group-hover:opacity-100 delay-150">
          {description}
        </p>
      </div>

      {/* View Details Button */}
      <button
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-orange-600 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
        onClick={(e) => {
          e.stopPropagation(); // Prevent click from triggering card's onClick event
          onClick();
        }}
      >
        View Details
      </button>
    </article>
  );
}
