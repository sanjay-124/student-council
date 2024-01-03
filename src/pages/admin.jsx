/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const AdminPage = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      const feedbackRef = firebase.firestore().collection("feedback");
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
      <Header activePage="admin" />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Admin Page</h1>
        <div className="space-y-4">
          {feedback.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg shadow">
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">{item.email}</p>
              <p className="text-gray-700">{item.message}</p>
              {item.grade && (
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
                  {item.grade}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
