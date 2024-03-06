/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const Header = ({ activePage, isAdmin }) => {
  if (isAdmin) {
    return (
      <div className="p-6 lg:px-10">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/admin" className="-m-1.5 p-1.5">
              <span className="sr-only">HOME PAGE</span>
              <img className="h-14" src="favicon.png" alt="" />
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
          <a
              href="/admin"
              className={`text-lg font-semibold leading-6 ${
                activePage === "admin"
                  ? "border-indigo-500 border-b-2 text-gray-900"
                  : "text-gray-900"
              } hover:-translate-y-0.5 hover:bg-fuchsia-50 hover:rounded-lg p-2`}>
              Home
            </a>
            <a
              href="/adminfeedback"
              className={`text-lg font-semibold leading-6 ${
                activePage === "adminfeedback"
                  ? "border-indigo-500 border-b-2 text-gray-900"
                  : "text-gray-900"
              } hover:-translate-y-0.5 hover:bg-fuchsia-50 hover:rounded-lg p-2`}>
              Feedback
            </a>
            <a
              href="/signup"
              className="text-lg font-semibold leading-6 text-gray-900 hover:-translate-y-0.5 hover:bg-fuchsia-50 hover:rounded-lg p-2"
            >
              Logout <span aria-hidden="true"></span>
            </a>
          </div>
        </nav>
      </div>
    );
  }

  // Non-admin header
  const headerLinks = [
    { href: "/", label: "Home" },
    { href: "feedback", label: "Feedback" },
    { href: "contact", label: "Contact" },
    { href: "signup", label: "Sign Up" },
  ];

  return (
    <div className="p-6 px-10 sticky -z-9999">
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">HOME PAGE</span>
            <img className="h-16" src="/favicon.png" alt="" />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {headerLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`text-xl font-semibold leading-6 ${
                activePage === href
                  ? "border-purple-600 border-b-2 text-gray-900"
                  : "text-gray-900"
              } hover:rounded-lg p-2 hover:bg-fuchsia-50 hover:text-black`}              
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

Header.propTypes = {
  activePage: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool,
};

export default Header;
