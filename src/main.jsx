/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
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
import AdminFeedback from "./pages/adminfeedback.jsx";
// import PrivateRoute from './component/PrivateRoute.jsx';

export default function Apps() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/events" element={<Events />} />
        {/* admin */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/fetchfeedback" element={<FetchFeedback />} />
        <Route path="/adminfeedback" element={<AdminFeedback />} />
        {/* <PrivateRoute path="/admin" component={<Admin/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Apps />);
