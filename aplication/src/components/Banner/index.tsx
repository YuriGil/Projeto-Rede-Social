import React from "react";
import { BannerImage } from "../../pages/home/styles";
import capivaraLogo from "../../assets/capivaraLogo.png";

const Banner: React.FC = () => {
  return <BannerImage img={capivaraLogo} />;
};

export { Banner };
