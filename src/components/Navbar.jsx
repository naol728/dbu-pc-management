import React from "react";
import Logo from "./Logo";
import { ImBrightnessContrast } from "react-icons/im";
export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 w-full text-white bg-[#2e2d2d] shadow-xl ">
      <div>
        <Logo />
      </div>
      <div className="p-4 text-xl font-bold cursor-pointer">
        <ImBrightnessContrast />
      </div>
    </div>
  );
}
