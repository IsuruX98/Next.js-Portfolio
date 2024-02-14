import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="sm:mr-0 mr-[-80px]">
      <div className="flex md:justify-between flex-col items-center gap-4 justify-center xl:px-36 lg:px-20 px-12 py-20">
        <div>Copyright © 2024 - All right reserved</div>
        <div className="flex gap-4">
          <FaFacebook className="text-lg" />
          <FaLinkedin className="text-lg" />
          <FaInstagram className="text-lg" />
          <FaGithub className="text-lg" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
