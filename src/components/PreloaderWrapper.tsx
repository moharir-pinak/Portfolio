'use client';

import Preloader from './Preloader';

export default function PreloaderWrapper({ children }: { children: React.ReactNode }) {
  return <Preloader>{children}</Preloader>;
} 