import React from "react";
import PropTypes from "prop-types";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useNavigate } from "react-router-dom";

const ExecutiveHeader = ({
  activePage,
  isAdmin,
  handleAuthClick,
  handleSignoutClick,
  isGapiLoaded,
  isGisLoaded,
  isAuthorized,
  showAddEventForm,
  setShowAddEventForm,
  isSecond,
}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    firebase.auth().signOut();
    navigate("/usersignup");
  };

  if (isAdmin) {
    if (activePage === "executiveevents") {
      return (
        <div className="p-6 ">
          <nav
            className="flex items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="/executive" className="-m-1.5 p-1.5">
                <span className="sr-only">HOME PAGE</span>
                <img className="h-14" src="favicon.png" alt="" />
              </a>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <a
                href="/executive"
                className="text-lg font-semibold leading-6 text-black hover:-translate-y-0.5 hover:bg-red-100 hover:rounded-lg p-2"
              >
                Home
              </a>
              <button
                id="authorize_button"
                onClick={handleAuthClick}
                style={{
                  visibility:
                    isGapiLoaded && isGisLoaded ? "visible" : "hidden",
                }}
                className="text-lg font-semibold leading-6 text-black hover:-translate-y-0.5 hover:bg-red-100 hover:rounded-lg p-2"
              >
                {isAuthorized ? "Refresh" : "Login"}
              </button>
              <button
                id="signout_button"
                onClick={handleSignoutClick}
                style={{ visibility: isAuthorized ? "visible" : "hidden" }}
                className="text-lg font-semibold leading-6 text-black hover:-translate-y-0.5 hover:bg-red-100 hover:rounded-lg p-2"
              >
                Logout
              </button>
              <button
                onClick={() => setShowAddEventForm(!showAddEventForm)}
                className="text-lg font-semibold leading-6 text-black hover:-translate-y-0.5 hover:bg-red-100 hover:rounded-lg p-2"
              >
                Add Event
              </button>
            </div>
          </nav>
        </div>
      );
    } else if (activePage === "executivefeedback"){
      return (
        <div className="p-6">
          <nav
            className="flex items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="/executive" className="-m-1.5 p-1.5">
                <span className="sr-only">HOME PAGE</span>
                <img className="h-14" src="favicon.png" alt="" />
              </a>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <a
                href="/executive"
                className={`text-lg font-semibold leading-6 ${
                  activePage === "admin"
                    ? "border-indigo-500 border-b-2 text-gray-900"
                    : "text-gray-900"
                } hover:-translate-y-0.5 hover:bg-red-200 hover:rounded-lg p-2`}
              >
                Home
              </a>
              <a
                href="/executivefeedback"
                className={`text-lg font-semibold leading-6 ${
                  activePage === "adminfeedback"
                    ? "border-indigo-500 border-b-2 text-gray-900"
                    : "text-gray-900"
                } hover:-translate-y-0.5 hover:bg-red-200 hover:rounded-lg p-2`}
              >
                Feedback
              </a>
              <button
                onClick={handleLogout}
                className="text-lg font-semibold leading-6 text-gray-900 hover:-translate-y-0.5 hover:bg-red-200 hover:rounded-lg p-2"
              >
                Logout <span aria-hidden="true"></span>
              </button>
            </div>
          </nav>
        </div>
      );
    } else {
      return (
        <div className="p-6">
          <nav
            className="flex items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="/executive" className="-m-1.5 p-1.5">
                <span className="sr-only">HOME PAGE</span>
                <img className="h-14" src="favicon.png" alt="" />
              </a>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <a
                href="/executive"
                className={`text-lg font-semibold leading-6 ${
                  activePage === "admin"
                    ? "border-indigo-500 border-b-2 text-gray-900"
                    : "text-gray-900"
                } hover:-translate-y-0.5 hover:bg-red-200 hover:rounded-lg p-2`}
              >
                Home
              </a>
              <a
                href="/executivefeedback"
                className={`text-lg font-semibold leading-6 ${
                  activePage === "adminfeedback"
                    ? "border-indigo-500 border-b-2 text-gray-900"
                    : "text-gray-900"
                } hover:-translate-y-0.5 hover:bg-red-200 hover:rounded-lg p-2`}
              >
                Feedback
              </a>
              <button
                onClick={handleLogout}
                className="text-lg font-semibold leading-6 text-gray-900 hover:-translate-y-0.5 hover:bg-red-200 hover:rounded-lg p-2"
              >
                Logout <span aria-hidden="true"></span>
              </button>
            </div>
          </nav>
        </div>
      );
    }
  }

  // Non-admin header
  const headerLinks = [
    { href: "/", label: "Home" },
    { href: "userfeedback", label: "Feedback" },
    { href: "usercontact", label: "Contact" },
    { href: "usersignup", label: "Sign Up" },
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
              className={`text-lg font-semibold leading-6 ${
                activePage === href
                  ? "border-purple-600 border-b-2 text-gray-900"
                  : "text-gray-900"
              } hover:rounded-lg p-2 hover:bg-red-100 hover:text-black`}
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
  handleAuthClick: PropTypes.func,
  handleSignoutClick: PropTypes.func,
  isGapiLoaded: PropTypes.bool,
  isGisLoaded: PropTypes.bool,
  isAuthorized: PropTypes.bool,
  showAddEventForm: PropTypes.bool,
  setShowAddEventForm: PropTypes.func,
  isSecond: PropTypes.bool,
};

export default ExecutiveHeader;