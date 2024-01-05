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
import Home from "./Home.jsx";
import SecondChamber from "./pages/secondchamber.jsx";
import AdminFeedback from "./pages/adminfeedback.jsx";
import AdminAnnouncements from "./pages/adminannouncements.jsx";
import VeiwAnnouncements from "./pages/veiwannouncements.jsx";
import AdminEvents from "./pages/adminevents.jsx";


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
        <Route path="/secondchamber" element={<SecondChamber />} />
        <Route path="/adminfeedback" element={<AdminFeedback />} />
        <Route path="/adminannouncements" element={<AdminAnnouncements />} />
        <Route path="/veiwannouncements" element={<VeiwAnnouncements/>} />
        <Route path="/adminevents" element={<AdminEvents/>} />
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
