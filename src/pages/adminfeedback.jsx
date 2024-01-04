/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { TrashIcon } from '@heroicons/react/solid';

const AdminFeedback = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const feedbackRef = firebase
          .firestore()
          .collection("feedback")
          .orderBy("timestamp", "desc"); // Add this line to order by timestamp in descending order
  
        const snapshot = await feedbackRef.get();
        const feedbackData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFeedback(feedbackData);
      } catch (error) {
        console.error("Error fetching feedback: ", error);
      }
    };

    fetchFeedback();
  }, []);

  const handleDelete = async (feedbackId) => {
    try {
      await firebase.firestore().collection("feedback").doc(feedbackId).delete();
      setFeedback((prevFeedback) => prevFeedback.filter((item) => item.id !== feedbackId));
    } catch (error) {
      console.error("Error deleting feedback: ", error);
    }
  };

  return (
    <div>
    <div className="container mx-auto p-y-4">
      <Header activePage="adminfeedback" isAdmin={true} />
      <div className="space-y-4">
        {feedback.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">{item.email}</p>
              <p className="text-gray-700">{item.message}</p>
              {item.grade && (
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
                  {item.grade}
                </span>
              )}
              <p className="text-xs text-gray-500 mt-2">
                Submitted at: {new Date(item.timestamp?.seconds * 1000).toLocaleString()}
              </p>
            </div>
            <button
              onClick={() => handleDelete(item.id)}
              className="text-red-500 hover:text-red-700 cursor-pointer"
            >
              <TrashIcon className="w-6 h-8" />
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default AdminFeedback;
