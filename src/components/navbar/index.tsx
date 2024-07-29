import React, { useState } from "react";

import { Link } from "react-router-dom";

interface NavbarProps {
  backgroundColor?: string;
  shadow?: string;
  maxWidth?: string;
  logoIcon?: React.ReactNode;
  logoText?: string;
  links?: { path: string; label: string }[];
  linksPosition?: "left" | "center" | "right";
  position?: "fixed" | "sticky";
}

const Navbar: React.FC<NavbarProps> = ({
  backgroundColor = "bg-white",
  shadow = "shadow-sm",
  maxWidth = "max-w-7xl",
  logoIcon,
  logoText = "",
  links,
  linksPosition = "left",
  position,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getLinksPositionClasses = () => {
    switch (linksPosition) {
      case "center":
        return "justify-center";
      case "right":
        return "justify-end";
      default:
        return "justify-start";
    }
  };

  const positionClass =
    position === "fixed"
      ? "fixed top-0 left-0 w-full z-50"
      : "sticky top-0 z-50";

  return (
    <nav
      className={`${backgroundColor} ${shadow} ${
        position ? positionClass : ""
      }`}
    >
      <div className={`w-full ${maxWidth} mx-auto px-4`}>
        <div className="flex justify-between h-14 items-center">
          {logoIcon && (
            <Link to={"/"} className="flex items-center gap-2">
              {logoIcon}
              <div className="flex flex-col uppercase text-indigo">
                <span className="text-sm">BBWS Sumatera VIII</span>
                <span className="text-xs">
                  Kementerian Pekerjaan Umum dan Perumahan Rakyat
                </span>
              </div>
            </Link>
          )}
          <span className="text-indigo uppercase">{logoText}</span>
          {links && (
            <>
              <nav
                className={`hidden md:flex gap-4 flex-1 ${getLinksPositionClasses()} ml-4`}
              >
                {links.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="font-medium flex items-center text-sm transition-colors hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      {links && menuOpen && (
        <div
          className={`md:hidden px-2 pb-3 fixed ${backgroundColor} ${shadow} w-full`}
        >
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
