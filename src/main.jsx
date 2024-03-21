import React from "react";


import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import "./index.css";
import Home from "./Home.jsx";
import UserEvents from "./pages/userevents.jsx";
import UserAnnouncements from "./pages/userannouncements.jsx";
import UserAboutus from "./pages/useraboutus.jsx";
import UserContact from "./pages/usercontact.jsx";
import UserFeedback from "./pages/userfeedback.jsx";
import UserSignin from "./pages/usersignin.jsx";
import Executive from "./pages/executive.jsx";
import ExecutiveAnnouncements from "./pages/executiveannouncements.jsx";
import ExecutiveEvents from "./pages/executiveevents.jsx";
import ExecutiveFeedback from "./pages/executivefeedback.jsx";
import SecondAnnouncement from "./pages/secondannouncement.jsx";
import SecondChamber from "./pages/secondchamber.jsx";
import SecondEvents from "./pages/secondevents.jsx";
import SecondFeedback from "./pages/secondfeedback.jsx";
import VeiwAnnouncements from "./pages/veiwannouncements.jsx";



function Apps() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="userevents" element={<UserEvents />} />
        <Route path="userannouncements" element={< UserAnnouncements/>} />
        <Route path="useraboutus" element={< UserAboutus/>} />
        <Route path="usercontact" element={<UserContact />} />
        <Route path="userfeedback" element={< UserFeedback/>} />
        <Route path="usersignin" element={< UserSignin/>} />
        <Route path="executive" element={< Executive/>} />
        <Route path="executiveannouncements" element={<ExecutiveAnnouncements />} />
        <Route path="executiveevents" element={< ExecutiveEvents/>} />
        <Route path="executivefeedback" element={< ExecutiveFeedback/>} />
        <Route path="secondannouncement" element={<SecondAnnouncement />} />
        <Route path="secondchamber" element={< SecondChamber/>} />
        <Route path="secondevents" element={< SecondEvents/>} />
        <Route path="secondfeedback" element={< SecondFeedback/>} />
        <Route path="/veiwannouncements" element={<VeiwAnnouncements />} />
      </Routes>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<Apps />);
} else {
  console.error("Root element with id 'root' not found.");
}
