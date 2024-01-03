import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden py-10 px-6 sm:py-10 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          <div className="pb-6">
            <a href="/aboutus#about-us" className="text-lg leading-6 text-gray-600 hover:text-gray-900">About Us</a>
          </div>

          <div className="pb-6">
            <a href="/announcements" className="text-lg leading-6 text-gray-600 hover:text-gray-900">Announcements  /  Events</a>
          </div>
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">Student Council Team</p>
      </div>
    </footer>
  );
};

export default Footer;
