import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "firebase/compat/firestore";
import Header from "../component/Header";
import { TrashIcon } from '@heroicons/react/solid';

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
  const [formData, setFormData] = useState({
    date: "",
    details: "",
  });

  const [showForm, setShowForm] = useState(false);
  const [events, setEvents] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchEvents = () => {
      try {
        const eventRef = firestore.collection("events");
  
        // Subscribe to real-time updates
        const unsubscribe = eventRef.onSnapshot((snapshot) => {
          const eventData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setEvents(eventData);
        });
  
        // Clean up the listener when the component unmounts
        return () => unsubscribe();
      } catch (error) {
        console.error("Error fetching events: ", error);
      }
    };
  
    fetchEvents();
  }, []);
  
  const handleDelete = async (eventId) => {
    try {
      // Remove the event locally
      const updatedEvents = events.filter((event) => event.id !== eventId);
      setEvents(updatedEvents);
  
      // Remove the event from Firestore
      await firestore.collection("events").doc(eventId).delete();
  
      toast.success("Event deleted successfully");
    } catch (error) {
      toast.error("Error deleting event");
      console.error("Error deleting event:", error);
    }
  };
  

  const renderCalendar = () => {
    const daysInMonth = 31; // Assuming you want to display 31 days
    const calendarElements = [];
  
    for (let i = 1; i <= daysInMonth; i++) {
      const day = i;
      const eventDetails = events.find((event) => event.day === day);
  
      calendarElements.push(
        <div
        key={i}
        className={`relative ${
          eventDetails ? "bg-white" : "bg-gray-50"
        } py-2 h-[100px] px-3`}
      >
          <div className="upper-container flex items-center justify-between">
            <div className="date-container p-1">
              <time dateTime={`2023-01-${day}`} className="date">{day}</time>
            </div>
            {eventDetails && (
              <button
                onClick={() => handleDelete(eventDetails.id)}
                className="text-red-500 hover:text-red-700 cursor-pointer"
              >
                <TrashIcon className="w-5 h-5" />
              </button>
            )}
          </div>
          {eventDetails && (
            <div className="lower-container text-base">
              <div className="details">
                {eventDetails.details}
              </div>
            </div>
          )}
        </div>
      );
    }
  
    return calendarElements;
  };
  

  return (
    <div className="lg:flex lg:h-full lg:flex-col">
      <Header activePage="adminevents" isAdmin={true} />
      <header className="flex items-center justify-between border-b border-gray-200 py-4 px-6 lg:flex-none">
        <h1 className="text-lg font-semibold text-gray-900">
          <time dateTime="2022-01">January 2024</time>
        </h1>
        <div className="flex items-center">
          <div className="flex items-center rounded-md shadow-sm md:items-stretch">
            <button
              type="button"
              className="flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-white py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-indigo-200"
            >
              <span className="sr-only">Previous month</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              type="button"
              className="hidden border-t border-b border-gray-300 bg-white px-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:relative md:block"
            >
              January
            </button>
            <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden"></span>
            <button
              type="button"
              className="flex items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-white py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-indigo-200"
            >
              <span className="sr-only">Next month</span>
              <svg
                className="h-5 w-5"
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
            </button>
          </div>
          <div className="ml-6 h-6 w-px bg-gray-300"></div>
          <button
            type="addEventButton"
            onClick={() => setShowForm(!showForm)}
            className="ml-6 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {showForm ? "Cancel" : "Add Event"}
          </button>
        </div>
      </header>
      {showForm && (
        <form onSubmit={handleSubmit} className="p-6 mx-auto max-w-sm">
          {/* ... (form input fields) */}
          <div className="mb-4">
            <label htmlFor="date" className="text-sm font-medium text-gray-700">
              Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="details"
              className="text-sm font-medium text-gray-700"
            >
              Details:
            </label>
            <textarea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 border rounded-md w-full"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      )}
      <div className="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
        <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
          <div className="flex justify-center bg-white py-2">
            <span className="sr-only sm:not-sr-only">Mon</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span className="sr-only sm:not-sr-only">Tue</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span className="sr-only sm:not-sr-only">Wed</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span className="sr-only sm:not-sr-only">Thu</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span className="sr-only sm:not-sr-only">Fri</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span className="sr-only sm:not-sr-only">Sat</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span className="sr-only sm:not-sr-only">Sun</span>
          </div>
        </div>
        <div className="flex bg-gray-200 text-lg leading-6 text-gray-700 lg:flex-auto">
          <div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-5 lg:gap-px">
            {renderCalendar()}
            {/* {events.map((item) => ( 
              <div key={item.id} className="border p-4 rounded-lg shadow flex items-center justify-between">
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">{item.details}</p>
              </div>
            ))} */}
          </div>
        </div>
      </div>
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
