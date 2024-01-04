import { useNavigate, Routes, Route } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';

const firebaseConfig = {
  apiKey: "AIzaSyD_vwtx1Vv819PBY1QV2QpdD9ahRxYMpnk",
  authDomain: "student-council-dc47b.firebaseapp.com",
  projectId: "student-council-dc47b",
  storageBucket: "student-council-dc47b.appspot.com",
  messagingSenderId: "969649927286",
  appId: "1:969649927286:web:58f5dce8e76e01ef885b57",
};
firebase.initializeApp(firebaseConfig);

const SecondChamber = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in
        setUser(authUser);
      } else {
        // User is signed out
        navigate('/signup'); // Redirect to the signup page if not signed in
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (!user) {
    return null; // Display loading state or redirect to login
  }

  // Render your admin page content here

  return (
      <div>
        <Header activePage="admin" isAdmin={true} />
        <div>
        <nav>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-center">
            <div className="flex">
              <div className="hidden sm:ml-6 sm:flex sm:space-x-20">
                <a href="/finance" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-2xl font-medium text-gray-900 hover:border-indigo-500">Finance</a>
                <a href="/announcements" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-2xl font-medium text-gray-900 hover:border-indigo-500">Announcements / Events</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div className="mx-auto max-w-lg justify-center">
          <h2 className="text-8xl font-medium text-gray-600 text-center pt-[4rem] mt-6">WELCOME BACK!</h2>
          <p className="mt-1 text-3xl text-indigo-600 text-center pb-[6rem] font-semibold">STUDENT COUNCIL TEAM</p>
        </div>
      </main>

    </div>
      </div>
  );
};

export default SecondChamber;
