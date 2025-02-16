import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import pic from "../../public/ankur.jpg";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Education" },
    { id: 4, text: "Projects" },
    { id: 5, text: "Skills" },
    { id: 6, text: "Contact" },
  ];

  return (
    <>
      {/* Navbar Container */}
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-md transition-all duration-300">
        <div className="flex justify-between items-center h-16">

          {/* Logo & Profile */}
          <div className="flex space-x-2">
            <img
              src={pic}
              className="h-12 w-12 rounded-full border-2 border-gray-200 shadow-lg transition-transform duration-300 hover:scale-110"
              alt="Profile"
            />
            <h1 className="font-semibold text-xl cursor-pointer">
              Ankur Mishra
              <p className="text-sm text-gray-600">FullStack Developer</p>
            </h1>
          </div>

          {/* Desktop Navbar */}
          <div>
            <ul className="hidden md:flex space-x-8 cursor-pointer">
              {navItems.map(({ id, text }) => (
                <li key={id} className="group relative">
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    className="hover:text-blue-600 transition-all duration-300"
                  >
                    {text}
                  </Link>
                  <div className="absolute w-0 h-[2px] bg-blue-600 left-1/2 bottom-0 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer transition-transform duration-300 hover:scale-110">
            {menu ? <IoCloseSharp size={26} /> : <AiOutlineMenu size={26} />}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-white shadow-md transform transition-all duration-300 ${
          menu ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="flex flex-col h-screen items-center justify-center space-y-3 text-xl">
          {navItems.map(({ id, text }) => (
            <li key={id} className="hover:scale-110 font-semibold duration-300 cursor-pointer">
              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                onClick={() => setMenu(false)}
                className="hover:text-blue-600 transition-all duration-300"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
