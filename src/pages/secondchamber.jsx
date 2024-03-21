import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import React, { useState, useEffect } from "react";
import { firebaseConfig } from "../fireconfig";
import SecondHeader from "../component/SecondHeader";
import ChatRoom from "../component/Chatroom";

firebase.initializeApp(firebaseConfig);

function SecondChamber() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  console.log(user);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        navigate("/usersignin");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (!user) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-purple-100 to-pink-100 min-h-screen">
      <SecondHeader isSecond={true}/>
      <div>
        <nav>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-center">
              <div className="flex">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-20">
                  <a
                    href="/secondannouncement"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-2xl font-medium text-gray-900 hover:border-indigo-500"
                  >
                    Announcements
                  </a>
                  <a
                    href="/secondevents"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-2xl font-medium text-gray-900 hover:border-indigo-500"
                  >
                  Events
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main>
          <div className="mx-auto max-w-lg justify-center">
            <h2 className="text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-800 text-center pt-[8rem] mt-6">
              WELCOME BACK!
            </h2>
            <p className="mt-1 text-3xl text-indigo-600 text-center pb-[6rem] font-semibold">
              STUDENT COUNCIL TEAM
            </p>
          </div>
          <ChatRoom />
        </main>
      </div>
    </div>
  );
};

export default SecondChamber;
