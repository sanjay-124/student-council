import React from 'react';

const Header = ({activePage}) => {
  return (
    <div className="p-6 sticky -z-9999">
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">HOME PAGE</span>
            <img className="h-14" src="/favicon.png" alt="" />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
        <a
            href="/"
            className={`text-lg font-semibold leading-6 ${
              activePage === '/' ? 'border-indigo-500 border-b-2 text-gray-900' : 'text-gray-900'
            } hover:-translate-y-0.5`}
          >
            Home
            </a>
        <a
            href="/feedback"
            className={`text-lg font-semibold leading-6 ${
              activePage === 'feedback' ? 'border-indigo-500 border-b-2 text-gray-900' : 'text-gray-900'
            } hover:-translate-y-0.5`}
          >
            Feedback
          </a>
          <a
            href="/contact"
            className={`text-lg font-semibold leading-6 ${
                activePage === 'contact' ? 'border-indigo-500 border-b-2 text-gray-900' : 'text-gray-900'
             } hover:-translate-y-0.5`}
          >
            Contact
          </a>
          <a
            href="/signup"
            className={`text-lg font-semibold leading-6 ${
                activePage === 'signup' ? 'border-indigo-500 border-b-2 text-gray-900' : 'text-gray-900'
             } hover:-translate-y-0.5`}
          >
            Sign Up <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
