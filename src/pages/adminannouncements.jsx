import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DOMPurify from 'dompurify';
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
const firestore = firebase.firestore();

function AdminAnnouncements() {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace newlines with HTML line breaks
      const formattedDescription = formData.description.replace(/\n/g, '<br>');
  
      const docRef = await firestore.collection("announcement").add({
        ...formData,
        description: formattedDescription,
      });
  
      console.log("Document written with ID: ", docRef.id);
      toast.success("Announcement added successfully!");
      setFormData({
        title: "",
        date: "",
        description: "",
      });
    } catch (err) {
      toast.error(err.message);
    }
  };
  

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="rounded-xl p-6 max-w-md w-full">
          <form className="grid gap-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="title"
                  id="title"
                  required
                  className="block w-full rounded-md border-gray-700 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Date
              </label>
              <div className="mt-1">
                <input
                  type="date"
                  name="date"
                  id="date"
                  required
                  className="block w-full rounded-md border-gray-700 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <div className="mt-1">
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  required
                  className="block w-full rounded-lg border-gray-700 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={formData.description}
                  onChange={handleChange}
                  style={{ whiteSpace: "pre-line" }}
                ></textarea>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-end absolute bottom-4 right-4">
    <button id="addButton" className="inline-flex rounded items-center border border-transparent p-1 bg-gray-300 text-black shadow-sm hover:bg-gray-400">
     <a href="/veiwannouncements">
        Veiw</a> 
    </button>
  </div>
    </div>
  );
}

export default AdminAnnouncements;
