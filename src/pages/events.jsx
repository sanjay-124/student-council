/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import Calender from "../component/Calender";
import { ToastContainer, toast } from "react-toastify";

function events() {
  const [selectedMonth, setSelectedMonth] = useState(1);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleNextMonth = () => {
    setSelectedMonth((prevMonth) => (prevMonth === 12 ? 1 : prevMonth + 1));
  };

  const handlePreviousMonth = () => {
    setSelectedMonth((prevMonth) => (prevMonth === 1 ? 12 : prevMonth - 1));
  };

  return (
    <div>
      <Header activePage="events" />
      <div>
        {/* <div className="flex h-[10px] justify-center">
          Navigation Tabs
          <div className="flex">
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <div className="hidden sm:block">
                <div>
                  <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    <a
                      href="/announcements"
                      className="border-transparent hover:border-indigo-500 group inline-flex items-center px-1 border-b-2 font-medium text-lg"
                    >
                      <span>Announcements</span>
                    </a>
                    <a
                      href="/events"
                      className="text-black-500 border-indigo-500 group inline-flex items-center px-1 border-b-2 font-medium text-lg"
                    >
                      <span>Events</span>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Header for Calendar */}
        {/* <header className="flex items-center justify-between border-b border-gray-200 py-4 px-6 lg:flex-none">
          <h1 className="text-lg font-semibold text-gray-900">
            <time dateTime="2022-01">
              {new Date(2022, selectedMonth - 1, 1).toLocaleString("default", {
                month: "long",
              })}{" "}
              2024
            </time>
          </h1>
          <div className="flex items-center">
            <div className="flex items-center rounded-md shadow-sm md:items-stretch">
              <button
                type="button"
                onClick={handlePreviousMonth}
                className="flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-white py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-indigo-200"
              >
                <span className="sr-only">Previous month</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="hidden border-t border-b border-gray-300 bg-white px-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:relative md:block"
              >
                {new Date(2022, selectedMonth - 1, 1).toLocaleString(
                  "default",
                  {
                    month: "long",
                  }
                )}
              </button>
              <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden"></span>
              <button
                type="button"
                onClick={handleNextMonth}
                className="flex items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-white py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-indigo-200"
              >
                <span className="sr-only">Next month</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header> */}

        {/* Weekday Headers */}
        {/* <div className="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
          <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
            <div className="flex justify-center bg-white py-2">
              <span className="sr-only sm:not-sr-only">Mon</span>
            </div>
            <div className="flex justify-center bg-white py-2">
              <span className="sr-only sm:not-sr-only">Tue</span>
            </div>
            <div className="flex justify-center bg-white py-2">
              <span className="sr-only sm:not-sr-only">Wed</span>
            </div>
            <div className="flex justify-center bg-white py-2">
              <span className="sr-only sm:not-sr-only">Thu</span>
            </div>
            <div className="flex justify-center bg-white py-2">
              <span className="sr-only sm:not-sr-only">Fri</span>
            </div>
            <div className="flex justify-center bg-white py-2">
              <span className="sr-only sm:not-sr-only">Sat</span>
            </div>
            <div className="flex justify-center bg-white py-2">
              <span className="sr-only sm:not-sr-only">Sun</span>
            </div>
          </div>
        </div> */}

        {/* Calendar Component */}
        <Calender />

        {/* Toast Container for Notifications */}
        <ToastContainer
          position="top-center"
          autoClose={500}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
}

export default events;
