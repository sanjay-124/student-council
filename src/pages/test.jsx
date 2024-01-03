/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const FetchFeedback = () => {
  const [feedback, setFeedback] = useState([]);
  console.log(feedback);

  useEffect(() => {
    const fetchFeedback = async () => {
      const feedbackRef = firebase.firestore().collection("announcement");
      const snapshot = await feedbackRef.get();
      const feedbackData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFeedback(feedbackData);
    };

    fetchFeedback();
  }, []);

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Announcements</h1>
        <div className="space-y-4">
          {feedback.map((announcement) => (
            <div key={announcement.id} className="border p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{announcement.title}</h2>
              <p className="text-gray-600">
                {announcement.date.seconds}
              </p>
              <p className="text-gray-700">{announcement.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FetchFeedback;
