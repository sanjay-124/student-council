import { useNavigate, Routes, Route } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const firebaseConfig = {
  apiKey: "AIzaSyD_vwtx1Vv819PBY1QV2QpdD9ahRxYMpnk",
  authDomain: "student-council-dc47b.firebaseapp.com",
  projectId: "student-council-dc47b",
  storageBucket: "student-council-dc47b.appspot.com",
  messagingSenderId: "969649927286",
  appId: "1:969649927286:web:58f5dce8e76e01ef885b57",
};
firebase.initializeApp(firebaseConfig);

const Admin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in
        setUser(authUser);
      } else {
        // User is signed out
        navigate("/signup"); // Redirect to the signup page if not signed in
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (!user) {
    return null; // Display loading state or redirect to login
  }

  const toggleAnnouncements = () => {
    var AnnouncementsContainer = document.getElementById("AnnouncementsContainer");
    AnnouncementsContainer.style.display = "block";
  };

  const closeAnnouncements = () => {
    const iframeContainer = document.getElementById("AnnouncementsContainer");
    iframeContainer.style.display = "none";
  };

  return (
    <div>
      <Header activePage="admin" isAdmin={true} />
      <div>
        {/* <nav>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-center">
            <div className="flex">
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="/finance" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-2xl font-medium text-gray-900 hover:border-indigo-500">Finance</a>
              </div>
            </div>
          </div>
        </div>
      </nav> */}
        <main>
          <div className="mx-auto max-w-lg justify-center">
            <h2 className="text-6xl font-medium text-gray-600 text-center pt-[4rem] mt-6">
              WELCOME BACK EXECUTIVES!
            </h2>
            <p className="mt-1 text-2xl text-indigo-600 text-center pb-[2rem] font-semibold">
              STUDENT COUNCIL TEAM
            </p>
            <ul
              role="list"
              className="mt-6 divide-y divide-gray-200 border-t border-b border-gray-200"
            >
              <li>
                <div className="group relative flex items-start space-x-3 py-4">
                  <span className="text-3xl">&#128276;</span>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-gray-900">
                      <button onClick={toggleAnnouncements}>
                        Announcements
                      </button>
                    </div>
                    <div
                      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 hidden"
                      id="AnnouncementsContainer"
                    >
                      <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/4 h-4/5 bg-white shadow-lg rounded-xl overflow-hidden"
                      >
                        <iframe
                          className="w-full h-full border-none"
                          src="/adminannouncements"
                        ></iframe>
                        <button
                          className="absolute top-4 left-4"
                          onClick={closeAnnouncements}
                        >
                          <span className="text-xl">&#x2573;</span>
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">
                      Share important updates
                    </p>
                  </div>
                  <div className="flex-shrink-0 self-center">
                    <svg
                      className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
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
                  </div>
                </div>
              </li>
              <li>
                <div className="group relative flex items-start space-x-3 py-4">
                  <span className="text-3xl">&#128197;</span>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-gray-900">
                      <a href="/adminevents">
                        <button>Events</button>
                      </a>
                    </div>
                    <p className="text-sm text-gray-500">
                      Stay informed about Events
                    </p>
                  </div>
                  <div className="flex-shrink-0 self-center">
                    <svg
                      className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
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
                  </div>
                </div>
              </li>
              <li>
                <div className="group relative flex items-start space-x-3 py-4">
                  <span className="text-3xl">&#128181;</span>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-gray-900">
                      <button onClick={() => openEvents()}>Finance</button>
                    </div>
                    <div
                      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 hidden"
                      id="EventsContainer"
                    >
                      <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-white shadow-lg rounded-xl overflow-hidden"
                        id="iframeWrapper"
                      >
                        <iframe
                          className="w-full h-full border-none"
                          src="eventsAdmin.html"
                        ></iframe>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">
                      Manage financial transactions
                    </p>
                  </div>
                  <div className="flex-shrink-0 self-center">
                    {/* <a href="/finance "> */}
                    <svg
                      className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
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
                    {/* </a> */}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;
