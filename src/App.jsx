import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"; // Include the firestore module

const config = {
  apiKey: import.meta.env.REACT_APP_APIKEY,
  authDomain: import.meta.env.REACT_APP_AUTHDOMAIN,
  projectId: import.meta.env.REACT_APP_PROJECTID,
  storageBucket: import.meta.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: import.meta.env.REACT_APP_MESSAGINGSENDERID,
  appId: import.meta.env.REACT_APP_APPID,
};

firebase.initializeApp(config);
const db = firebase.firestore(); // Initialize Firestore

function App() {
  // ... existing code ...
return (
  <div>
  <div className="isolate bg-white">
    <div className="absolute top-[-10rem] max-w-xl max-h-12 -z-20 blur-3xl sm:top-[-20rem]">
      <img
        src="https://th.bing.com/th/id/OIP.jIxObj_JUxLMVzukQw3E-wHaG7?pid=ImgDet&rs=1"
        alt=""
      />
    </div>
    <div className="sticky -z-9999 top-0 left-0">
      <div className="p-6 lg:px-8">
        <nav
          className="flex items-center justify-between"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">HOME PAGE</span>
              <img className="h-14" src="favicon.png" alt="" />
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="/feedback"
              className="text-lg font-semibold leading-6 text-gray-900 hover:-translate-y-0.5"
            >
              Feedback
            </a>
            <a
              href="/contact"
              className="text-lg font-semibold leading-6 text-gray-900 hover:-translate-y-0.5"
            >
              Contact
            </a>
            <a
              href="/login"
              className="text-lg font-semibold leading-6 text-gray-900 hover:-translate-y-0.5"
            >
              Sign Up <span aria-hidden="true"></span>
            </a>
          </div>
        </nav>
      </div>
      <nav>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-center">
            <div className="flex">
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a
                  href="/announcements"
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-xl font-medium text-gray-900 hover:border-indigo-500"
                >
                  EVENTS / ANNOUNCEMENTS
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <main>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-28 sm:py-28 lg:py-28">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Student Council
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              We are delighted to introduce you to the vibrant and dynamic
              world of the Student Council.
            </p>
            <div className="pt-5">
              <a
                href="/about-us"
                className="font-semibold text-indigo-600 text-xl"
              >
                <span aria-hidden="true"></span>Learn more... <span aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[calc(100%-13rem)] right-0 max-w-3xl max-h-28 overflow-hidden blur-3xl sm:top-[calc(100%-13rem)]">
        <img
          src="https://th.bing.com/th/id/OIP.jIxObj_JUxLMVzukQw3E-wHaG7?pid=ImgDet&rs=1"
          alt=""
        />
      </div>
    </main>
  </div>
</div>
  );
}

export default App;
