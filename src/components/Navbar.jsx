import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className=" w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className=" flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className=" text-white text-[18px] font-bold cursor-pointer flex ">
            Aniket &nbsp;
            <span className=" sm:block hidden"> Tyagi</span>
          </p>
          &nbsp;
          <img
            className="w-7 h-7 flex-row "
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/anikettyagi-/"
              );
            }}
            src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png"
            alt=""
          />
          &nbsp;
          <img
            className="w-7 h-7 rounded-xl flex-row gap-10  "
            onClick={() => {
              window.open("https://github.com/Anikettyagi007");
            }}
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt=""
          />
          &nbsp;
          <img
            className="w-7 h-7 rounded-xl flex-row gap-10  "
            onClick={() => {
              window.open("https://leetcode.com/Aniket_Tyagi_/");
            }}
            src="https://camo.githubusercontent.com/d7ddc9e6d6ac3920413af4a96199dd4d3cf99fe1906de047904189675cf94f6e/68747470733a2f2f63646e2e69636f6e73636f75742e636f6d2f69636f6e2f667265652f706e672d3531322f6c656574636f64652d333632383838352d333033303032352e706e67"
            alt=""
          />
          {/* <Link onClick={()=>{
        window.open("https://www.linkedin.com/in/aniket-tyagi-252015212/")
       }}> lin</Link> */}
          {/* <Link onClick={()=>{
        window.open("https://leetcode.com/Aniket_Tyagi_/")
       }}> lC</Link> */}
          {/* <Link onClick={()=>{
        window.open("https://github.com/Anikettyagi007/Fogon")
       }}> gh</Link> */}
        </Link>
        <ul className=" list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] cursor-pointer font-medium`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className=" sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className=" w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className=" list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
