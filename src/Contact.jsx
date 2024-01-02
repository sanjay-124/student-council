import React, { Component } from "react";
import Header from "./Components/Header";
import Footer from "./components/Footer";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="flex min-h-full flex-col bg-white lg:relative">
          <div className="flex flex-grow flex-col">
            <main className="flex flex-grow flex-col bg-white">
              <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col px-6 lg:px-8">
                <div className="my-auto flex-shrink-0 py-16 sm:py-32">
                  <p className="text-base font-semibold text-indigo-600">
                    Student Council
                  </p>
                  <h1 className="mt-2 text-lg font-bold tracking-tight text-gray-900 sm:text-2xl">
                    Contact details
                  </h1>
                  <p className="mt-2 text-base text-gray-500">
                    #4 & 20 Manchenahalli, <br />
                    Yelahanka Bangalore - 560064, INDIA <br />
                    info@cisb.org.in/enroll@cisb.org.in <br />
                    +918067594444 | +91 9845150395.
                  </p>
                  <div className="mt-6">
                    <a
                      href="/"
                      className="text-base font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Go back home
                      <span aria-hidden="true"></span>
                    </a>
                  </div>
                </div>
              </div>
            </main>
            <footer className="flex-shrink-0 bg-gray-50">
              <div className="mx-auto w-full max-w-7xl py-16 px-6 lg:px-8">
                <nav className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/canadianinternationalschoolbangalore/"
                    className="text-sm font-medium text-gray-500 hover:text-gray-600"
                  >
                    Facebook
                  </a>
                  <span
                    className="inline-block border-l border-gray-300"
                    aria-hidden="true"
                  ></span>
                  <a
                    href="https://www.instagram.com/cisbangalore/"
                    className="text-sm font-medium text-gray-500 hover:text-gray-600"
                  >
                    Instagram
                  </a>
                  <span
                    className="inline-block border-l border-gray-300"
                    aria-hidden="true"
                  ></span>
                  <a
                    href="https://twitter.com/cisblearns"
                    className="text-sm font-medium text-gray-500 hover:text-gray-600"
                  >
                    Twitter
                  </a>
                </nav>
              </div>
            </footer>
          </div>
          <div className="hidden lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-1/2">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://wallpaper.dog/large/11032627.png"
              alt=""
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
