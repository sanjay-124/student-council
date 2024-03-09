import React, { useEffect, useState } from "react";
import Feedback from "../component/Feedback";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import SecondChamber from "../component/SecondChamber";
import SecondHeader from "../component/SecondHeader";

function SecondFeedback() {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const feedbackRef = firebase
          .firestore()
          .collection("feedback")
          .orderBy("timestamp", "desc");

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

  const handleReply = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="bg-gradient-to-r from-purple-100 to-pink-100 min-h-screen">
      <SecondHeader activePage="secondfeedback" isSecond={true}/>
      <div className="mx-auto max-w-5xl">
        <div className="space-y-4">
          <Feedback feedback={feedback} onDelete={handleDelete} onReply={handleReply} />
        </div>
      </div>
    </div>
  );
};

export default SecondFeedback;