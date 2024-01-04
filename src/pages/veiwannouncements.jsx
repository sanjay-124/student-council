import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { TrashIcon } from '@heroicons/react/solid';

function VeiwAnnouncements() {
  const [announcement, setAnnouncements] = useState([]);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const announcementRef = firebase.firestore().collection("announcement");

        const snapshot = await announcementRef.get();
        const announcementData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAnnouncements(announcementData);
      } catch (error) {
        console.error("Error fetching announcements: ", error);
      }
    };

    fetchAnnouncements();
  }, []);

  const handleDelete = async (announcementId) => {
    try {
      await firebase
        .firestore()
        .collection("announcement")
        .doc(announcementId)
        .delete();
  
      // Clear the selected announcement and update the state
      setSelectedAnnouncement(null);
  
      setAnnouncements((prevAnnouncements) =>
        prevAnnouncements.filter((item) => item.id !== announcementId)
      );
    } catch (error) {
      console.error("Error deleting announcement: ", error);
    }
  };
  

  const handleAnnouncementClick = (announcement) => {
    setSelectedAnnouncement(announcement);
  };

  const formatDate = (dateString) => {
    const [year, month, date] = dateString.split("-");

    // Convert month string to respective month name
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthName = months[parseInt(month, 10) - 1];

    return `${parseInt(date, 10)} ${monthName} ${year}`;
  };

  return (
    <div>
      <div className="isolate bg-white">
        <div className="pt-20">
          <div className="flex">
            {/* Sidebar */}
            <div className="w-1/4 p-4 border-r overflow-y-auto">
              {announcement.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => handleAnnouncementClick(item)}
                  className={`p-2 cursor-pointer ${
                    selectedAnnouncement?.id === item.id ? "bg-gray-200" : ""
                  } ${index !== 0 ? "border-t pt-3 pb-3" : ""}`}
                >
                  <div className="text-lg pb-1 font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap">
                    {item.title}
                  </div>
                  <p className="text-sm text-gray-500 font-medium overflow-hidden overflow-ellipsis whitespace-nowrap">
                    <span className="text-black font-normal">
                      {formatDate(item.date)}{" "}
                    </span>{" "}
                    | {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Announcement Details */}
            <div className="flex-1 p-4">
              {selectedAnnouncement ? (
                <div className="border p-4 rounded-lg shadow">
                  <h2 className="text-2xl font-semibold">
                    {selectedAnnouncement.title}
                  </h2>
                  <p className="text-gray-600 text-sm mt-2">
                    {formatDate(selectedAnnouncement.date)}
                  </p>
                  <p className="text-gray-700 mt-4">
                    {selectedAnnouncement.description}
                  </p>
                  {/* Add more fields as needed */}
                  <button
                    onClick={() => handleDelete(selectedAnnouncement.id)}
                    className="text-red-500 font-semibold pt-4 hover:text-red-700 cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <p className="text-gray-500">
                  Select an announcement to view details
                </p>
              )}
            </div>
          </div>
        </div>
        <div class="flex justify-end absolute bottom-4 right-4">
    <button id="addButton" class="inline-flex rounded items-center border border-transparent p-1 bg-gray-300 text-black shadow-sm hover:bg-gray-400">
     <a href="/adminannouncements">
        ADD</a> 
    </button>
  </div>
      </div>
    </div>
  );
}

export default VeiwAnnouncements;
