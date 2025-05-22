'use client';

import { useState, useEffect } from 'react';

export default function HeaderNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'technologies','projects', 'contact'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;  // Adjust threshold if necessary
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Offset scroll by header height
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust this based on your header height
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950 bg-opacity-90 backdrop-blur-md shadow-lg">
      <ul className="flex justify-center space-x-12 py-4">
        {['Home', 'Technologies', 'Projects',  'Contact'].map((item) => (
          <li key={item}>
            <button
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-sm font-semibold tracking-wide transition-colors duration-300 ${
                activeSection === item.toLowerCase()
                  ? 'text-orange-400'
                  : 'text-gray-300 hover:text-orange-400'
              }`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
