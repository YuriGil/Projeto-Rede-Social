import React from "react";


interface LogoProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const Logo: React.FC<LogoProps> = ({ src, alt, onClick }) => {
  return <img src={src} alt={alt} onClick={onClick} />;
};

export { Logo };
