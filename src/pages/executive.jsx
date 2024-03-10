import { useNavigate, Routes, Route } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import React, { useState, useEffect } from "react";
import ExecutiveHeader from "../component/ExecutiveHeader";
import { firebaseConfig } from "../fireconfig";
import ChatRoom from "../component/Chatroom";

firebase.initializeApp(firebaseConfig);

function Executive() {
  const [showChat, setShowChat] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  console.log(user);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        navigate("/usersignup"); // Redirect to the signup page if not signed in
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (!user) {
    return null; // Display loading state or redirect to login
  }

  const toggleChat = () => setShowChat(!showChat);

  const toggleAnnouncements = () => {
    var AnnouncementsContainer = document.getElementById(
      "AnnouncementsContainer"
    );
    AnnouncementsContainer.style.display = "block";
  };

  const closeAnnouncements = () => {
    const iframeContainer = document.getElementById("AnnouncementsContainer");
    iframeContainer.style.display = "none";
  };

  return (
    <div className="bg-gradient-to-r from-purple-100 to-pink-100 min-h-screen">
      <ExecutiveHeader activePage="executive" isAdmin={true} />
      <div>
        <main>
          <div className="mx-auto max-w-lg justify-center">
            <h2 className="text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-800 text-center pt-[4rem] mt-6">
              WELCOME BACK EXECUTIVES!
            </h2>
            <p className="mt-1 text-2xl text-black text-center pb-[2rem] font-semibold">
              STUDENT COUNCIL TEAM
            </p>
            <ul
              role="list"
              className="mt-6 divide-y divide-gray-200 border-t border-b border-gray-200 rounded-lg shadow-md bg-white"
            >
              <li>
                <div className="group relative flex items-start space-x-3 py-4 px-4">
                  <span className="text-3xl text-purple-500">&#128276;</span>
                  <div className="min-w-0 flex-1">
                    <div className="text-xl font-medium text-gray-900">
                      <button
                        onClick={toggleAnnouncements}
                        className="hover:text-purple-600 transition-colors duration-300"
                      >
                        Announcements
                      </button>
                    </div>
                    <div
                      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 hidden"
                      id="AnnouncementsContainer"
                    >
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/4 h-4/5 bg-white shadow-lg rounded-xl overflow-hidden">
                        <iframe
                          className="w-full h-full border-none"
                          src="/executiveannouncements"
                        ></iframe>
                        <button
                          className="absolute top-4 left-4 text-gray-600 hover:text-gray-800 transition-colors duration-300"
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
                      className="h-5 w-5 text-gray-400 group-hover:text-purple-500 transition-colors duration-300"
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
                <div className="group relative flex items-start space-x-3 py-4 px-4">
                  <span className="text-3xl text-purple-500">&#128197;</span>
                  <div className="min-w-0 flex-1">
                    <div className="text-xl font-medium text-gray-900">
                      <a href="/executiveevents">
                        <button className="hover:text-purple-600 transition-colors duration-300">
                          Events
                        </button>
                      </a>
                    </div>
                    <p className="text-sm text-gray-500">
                      Stay informed about Events
                    </p>
                  </div>
                  <div className="flex-shrink-0 self-center">
                    <svg
                      className="h-5 w-5 text-gray-400 group-hover:text-purple-500 transition-colors duration-300"
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
                <div className="group relative flex items-start space-x-3 py-4 px-4">
                  <span className="text-3xl text-purple-500">&#128172;</span>
                  <div className="min-w-0 flex-1">
                    <div className="text-xl font-medium text-gray-900">
                        <button onClick={toggleChat} className="hover:text-purple-600 transition-colors duration-300">
                          {showChat ? "Close Chat" : "Open Chat"}
                        </button>
                    </div>
                    <p className="text-sm text-gray-500">
                      Communicate with the team
                    </p>
                  </div>
                  <div className="flex-shrink-0 self-center">
                    <svg
                      className="h-5 w-5 text-gray-400 group-hover:text-purple-500 transition-colors duration-300"
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
            </ul>

            {/* Conditionally render ChatRoom as a sidebar */}
            {showChat && (
              <div className="fixed right-0 top-28 bg-fuchsia-200 border-gray-200 shadow-lg w-[450px] overflow-auto min-h-96 rounded-lg">
                <ChatRoom />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Executive;
