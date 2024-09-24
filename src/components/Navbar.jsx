import React from 'react';
import logo from "../assets/kevinRushProfile1.jpg";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6"> 
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl"> 
        <a 
          href="https://www.linkedin.com/in/sai-chary-810828287/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-[#0077B5] active:rotate-180 transition-transform duration-300"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/pagidimarri-sai" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-white active:rotate-180 transition-transform duration-300"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.instagram.com/yourProfile" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-[#E1306C] active:rotate-180 transition-transform duration-300"
        >
          <FaInstagram />
        </a>
        <a 
          href="https://x.com/home" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-[#1DA1F2] active:rotate-180 transition-transform duration-300"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
