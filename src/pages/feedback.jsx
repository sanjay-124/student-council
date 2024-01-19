/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Header from "../component/Header";
import firebase from "firebase/compat/app";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_vwtx1Vv819PBY1QV2QpdD9ahRxYMpnk",
  authDomain: "student-council-dc47b.firebaseapp.com",
  projectId: "student-council-dc47b",
  storageBucket: "student-council-dc47b.appspot.com",
  messagingSenderId: "969649927286",
  appId: "1:969649927286:web:58f5dce8e76e01ef885b57",
};
firebase.initializeApp(firebaseConfig);

function Feedback() {
  const firestore = firebase.firestore();

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    grade: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const docRef = await firestore.collection("feedback").add({
        ...formData,
        timestamp,
      });

      console.log("Document written with ID: ", docRef.id);
      const name = formData.name;
      toast.info(`Thank you ${name} for your feedback!`);
      toast.success("We will get back to you soon!");
      setFormData({
        name: "",
        email: "",
        grade: "",
        message: "",
      });
    } catch (err) {
      console.error("Error adding document: ", err);
      toast.error(err.message);
    }
  };

  return (
    <div>
      {/* //In a component for a regular user page */}
      <Header activePage="feedback"/>
      <div className="overflow-hidden py-16 px-6 lg:px-8 lg:py-10">
        <div className="relative mx-auto max-w-xl">
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <div className="text-center ">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Feedback!
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              We value your opinion! Your feedback is crucial in shaping the
              Student Council&apos;s actions.
            </p>
          </div>
          <div className="mt-12 border-gray-300 bg-gray-50 rounded-xl p-6 shadow-lg">
            <form
              className="text-left grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              onSubmit={handleSubmit}
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
                    required
                    placeholder="Your Name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-gray-700 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    value={formData.name}
                    onChange={handleChange}
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
                    required
                    autoComplete="email"
                    placeholder="xyz@gmail.com"
                    className="block w-full rounded-md border-gray-700 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    value={formData.email}
                    onChange={handleChange}
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
                  required
                  className="h-full rounded-lg shadow-sm border-gray-700 py-1 px-4 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                  value={formData.grade}
                  onChange={handleChange}
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
                    required
                    className="block w-full rounded-lg border-gray-700 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    value={formData.message}
                    onChange={handleChange}
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
