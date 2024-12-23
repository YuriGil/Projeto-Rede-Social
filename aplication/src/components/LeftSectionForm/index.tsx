import React from "react";
import LogoHeader from "../../components/LogoHeaderForm";
import LoginPrompt from "../../components/LoginPrompt";
import { Left } from "./styles";

const LeftSection = () => (
  <Left>
    <LogoHeader />
    <LoginPrompt />
  </Left>
);

export default LeftSection;
