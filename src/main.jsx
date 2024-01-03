import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./index.css";
import Feedback from "./pages/feedback.jsx";
import AboutUs from "./pages/aboutus.jsx";
import Contact from "./pages/contact.jsx";
import SignUp from "./pages/signup.jsx";
import Announcements from "./pages/announcements.jsx";
import Events from "./pages/events.jsx";
// import admin
import Admin from "./pages/admin.jsx";
import FetchFeedback from "./pages/fetchfeedback.jsx";
import Home from "./Home.jsx";

function Apps() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/events" element={<Events />} />
        {/* admin */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/fetchfeedback" element={<FetchFeedback />} />
      </Routes>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");

// Check if the root element exists before rendering
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<Apps />);
} else {
  console.error("Root element with id 'root' not found.");
}
