import React, { Component } from "react";
import Header from "./components/Header";
function Feedback() {
  return (
    <div>
      <div>
        <div>
          <Header activePage="feedback" />
          <div className="overflow-hidden py-16 px-6 lg:px-8 lg:py-10">
            <div className="relative mx-auto max-w-xl">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Feedback!
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-500">
                  We value your opinion! Your feedback is crucial in shaping the
                  Student Council's actions.
                </p>
              </div>
              <div className="mt-12 border-gray-300 bg-gray-50 rounded-xl p-6">
                <form
                  action="#"
                  method="POST"
                  className="text-left grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-gray-700 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="xyz@gmail.com"
                        className="block w-full rounded-md border-gray-700 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="grade"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Grade
                    </label>
                    <select
                      id="grade"
                      name="grade"
                      className="h-full rounded-lg shadow-sm border-gray-700 py-1 px-4 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    >
                      <option>Grade 9</option>
                      <option>Grade 10</option>
                      <option>IB 1</option>
                      <option>IB 2</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm pt-4 font-medium text-gray-700"
                    >
                      Write here
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="block w-full rounded-lg border-gray-700 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      ></textarea>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Submit
                    </button>
                    <p className="text-[#a7a7a7] text-sm pt-3">
                      We will get back to you soon!
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-[calc(100%-13rem)] -z-20 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-20rem)] max-w-4xl max-h-32"></div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;