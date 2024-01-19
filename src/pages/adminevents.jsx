import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "firebase/compat/firestore";
import Header from "../component/Header";
import Calender from "../component/Calender";

const firebaseConfig = {
  apiKey: "AIzaSyD_vwtx1Vv819PBY1QV2QpdD9ahRxYMpnk",
  authDomain: "student-council-dc47b.firebaseapp.com",
  projectId: "student-council-dc47b",
  storageBucket: "student-council-dc47b.appspot.com",
  messagingSenderId: "969649927286",
  appId: "1:969649927286:web:58f5dce8e76e01ef885b57",
};
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

function AdminEvents() {
  return (
    <div className="lg:flex lg:h-full lg:flex-col">
      <Header activePage="adminevents" isAdmin={true} />
      <Calender />
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
      <div className="space-y-4 max-w-[100px]"></div>
    </div>
  );
}

export default AdminEvents;
