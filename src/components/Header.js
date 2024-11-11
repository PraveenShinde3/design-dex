import Image from "next/image";
import React from "react";
import logo from "../../public/logo.svg";

const Header = () => {
  return (
    <div className="p-2 ">
      <div className="flex gap-1 items-center">
        <Image src={logo} alt="logo" className="w-5 h-auto" />
        <p className="font-bold">DesignDex</p>
      </div>
    </div>
  );
};

export default Header;
