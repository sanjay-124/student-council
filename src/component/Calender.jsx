import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "firebase/compat/firestore";
import Header from "../component/Header";
import { TrashIcon } from "@heroicons/react/solid";
import { getDaysInMonth, getMonth } from "date-fns";

const firestore = firebase.firestore();

function Calendar({ handleDelete}) {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

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

  const openModal = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
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
              <time
                dateTime={`2023-01-${day}`}
                className="date cursor-pointer"
                onClick={() => openModal(eventDetails)}
              >
                {day}
              </time>
            </div>
            {eventDetails && (
              <button
                onClick={() => handleDelete(eventDetails.id)}
                className="text-transparent hover:text-gray-400 cursor-pointer"
              >
                <TrashIcon className="w-5 h-5" />
              </button>
            )}
          </div>
          {eventDetails && (
            <div className="lower-container text-black text-sm">
              <div className="details overflow-hidden line-clamp-2">
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
    <div className="lg:flex lg:h-full lg:flex-col relative">
      <div>
        <div className="flex bg-gray-200 text-lg leading-6 text-gray-700 lg:flex-auto">
          <div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-5 lg:gap-px">
            {renderCalendar()}
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
      {selectedEvent && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md max-w-md max-h-[500px] overflow-y-auto">
            <p className="text-gray-700">{selectedEvent.details}</p>
            <button
              onClick={closeModal}
              className="text-red-500 hover:text-red-700 cursor-pointer mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Calendar;
