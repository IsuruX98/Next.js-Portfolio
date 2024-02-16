import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="sm:mr-0 mr-[-80px]">
      <div className="flex md:justify-between flex-col items-center gap-4 justify-center xl:px-36 lg:px-20 px-12 py-20">
        <div>Copyright © 2024 - All right reserved</div>
        <div className="flex gap-4">
          <Link href="https://www.facebook.com/isuru.madusanka.1806/" passHref>
            <FaFacebook className="text-lg" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/isuru-madusanka-1b9210218/"
            passHref
          >
            <FaLinkedin className="text-lg" />
          </Link>
          <Link href="https://www.instagram.com/izu._x/" passHref>
            <FaInstagram className="text-lg" />
          </Link>
          <Link href="https://github.com/IsuruX98" passHref>
            <FaGithub className="text-lg" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
