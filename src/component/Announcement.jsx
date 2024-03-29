import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import DOMPurify from "dompurify";
import { firebaseConfig } from "../fireconfig";
firebase.initializeApp(firebaseConfig);

firebase
  .firestore()
  .enablePersistence()
  .catch(function (err) {
    if (err.code === "failed-precondition") {
      console.error("Firestore persistence failed:", err);
    } else if (err.code === "unimplemented") {
      console.error("Firestore persistence is not available:", err);
    }
  });

function Announcement() {
  const [announcements, setAnnouncements] = useState([]);
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
        console.error(
          "Cannot connect to the server, please try again later",
          error
        );
      }
    };

    fetchAnnouncements();
  }, []);

  const handleAnnouncementClick = (announcement) => {
    setSelectedAnnouncement(announcement);
  };

  const formatDate = (dateString) => {
    const [year, month, date] = dateString.split("-");
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
    <div className="isolate bg-white">
      <div className="sticky -z-9999 top-0 left-0">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-1/3 p-4 border-r overflow-y-auto">
            {announcements.map((item, index) => (
              <div
                key={item.id}
                onClick={() => handleAnnouncementClick(item)}
                className={`p-2 cursor-pointer m-2 border shadow-sm rounded-md ${
                  selectedAnnouncement?.id === item.id ? "bg-gray-100 " : ""
                } ${index !== 0 ? "pt-3 pb-3" : ""}`}
              >
                <div className="text-lg pb-1 font-semibold overflow-hidden overflow-ellipsis">
                  {item.title}
                </div>
                <p className="text-sm text-gray-500 font-medium overflow-hidden overflow-ellipsis whitespace-nowrap">
                  <span className="text-black font-normal">
                    {formatDate(item.date)}
                  </span>{" "}
                  |
                  <div
                    className="max-h-[20px] overflow-hidden overflow-ellipsis whitespace-nowrap text-gray-600 text-sm mt-2"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(item.description),
                    }}
                  />
                </p>
              </div>
            ))}
          </div>

          {/* Announcement Details */}
          <div className="flex-1 p-4">
            {selectedAnnouncement ? (
              <div className="border p-4 bg-gradient-to-br from-pink-100 to-purple-200 rounded-lg shadow">
                <h2 className="text-2xl font-semibold">
                  {selectedAnnouncement.title}
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  {formatDate(selectedAnnouncement.date)}
                </p>
                <div
                  className="text-black text-sm mt-2"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      selectedAnnouncement.description
                    ),
                  }}
                />
              </div>
            ) : (
              <p className="text-gray-500">
                Select an announcement to view details
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Announcement;
