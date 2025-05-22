'use client';

import { useState, useEffect } from "react";

interface PreloaderProps {
  children: React.ReactNode;
}

const Preloader = ({ children }: PreloaderProps) => {
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) =>
        counter < 100
          ? counter + 1
          : (clearInterval(count), setCounter(100), setTimeout(() => setLoading(false), 1000))
      );
    }, 25);

    return () => clearInterval(count);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 bg-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-300 ease-out"
                style={{ width: `${counter}%` }}
              />
            </div>
            <div className="mt-4 text-center text-white">
              Loading... {counter}%
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default Preloader; 