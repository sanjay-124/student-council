import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Feedback from './Feedback.jsx'
import AboutUs from './AboutUs.jsx'
import Contact from './Contact.jsx'
import SignUp from './SignUp.jsx'
import Announcements from './Announcements.jsx'
import Events from './Events.jsx'

export default function Apps() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="aboutus" element={<AboutUs/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="announcements" element={<Announcements/>}/>
        <Route path="events" element={<Events/>}/>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Apps />);
