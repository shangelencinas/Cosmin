import React from 'react';
import logoImg from '../assets/images/Logo_removebg2_bco.webp';

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        id="cosmin-brand-logo"
        src={logoImg}
        alt="COSMIN Consultoría y Servicios Integrales"
        className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200"
        loading="eager"
      />
    </div>
  );
}

export default Logo;
