import React from 'react';

const Header = () => {
  return (
    <div className="p-6">
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">HOME PAGE</span>
            <img className="h-14" src="/public/favicon.png" alt="" />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a
            href="/feedback"
            className="text-base font-semibold leading-6 text-gray-900 hover:-translate-y-0.5"
          >
            Feedback
          </a>

          <a
            href="/contact"
            className="text-base font-semibold leading-6 text-gray-900 hover:-translate-y-0.5"
          >
            Contact
          </a>
          <a
            href="/sign-up"
            className="text-base font-semibold leading-6 text-gray-900 hover:-translate-y-0.5"
          >
            Sign Up <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
