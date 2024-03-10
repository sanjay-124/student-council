import React, { useState, useEffect, useRef } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firebaseConfig } from "../fireconfig";

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const auth = firebase.auth();

function ChatRoom() {
  const dummy = useRef();
  const chatAreaRef = useRef(null);
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");
  useEffect(() => {
    // Scroll to the bottom of the chat area when a new message is added
    chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid } = auth.currentUser;
    const userEmail = auth.currentUser.email;
    const name = userEmail.substring(0, userEmail.lastIndexOf("@"));

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      name,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main className="container mx-auto p-4 max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Chat Room</h1>

        <div
          className="chat-area bg-white p-4 rounded-lg shadow-md h-96 overflow-y-auto mb-4"
          ref={chatAreaRef}
        >
          {messages &&
            messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
          <span ref={dummy}></span>
        </div>

        <form onSubmit={sendMessage} className="message-input">
          <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full mb-2"
            placeholder="Type a message..."
          />
          <button
            type="submit"
            disabled={!formValue}
            className="w-full bg-blue-500 text-white py-2 rounded-lg"
          >
            Send
          </button>
        </form>
      </main>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, name, createdAt } = props.message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  const timestamp = new Date(createdAt?.seconds * 1000).toLocaleTimeString();
  const time = timestamp.slice(0, -6) + timestamp.slice(-3);

  return (
    <div
      className={`message flex ${
        messageClass === "sent" ? "justify-end" : "justify-start"
      } mb-2`}
    >
      <div
        className={`inline-block max-w-xs break-words rounded-lg px-3 py-2 ${
          messageClass === "sent"
            ? "bg-[#DCF8C6] text-gray-800 shadow"
            : "bg-[#fefefe] text-gray-700 shadow"
        }`}
      >
        <div className="flex items-center gap-1">
          <p className="text-xs mr-1 capitalize font-medium">{name}</p>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default ChatRoom;
