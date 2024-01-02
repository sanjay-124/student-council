import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Feedback from './Feedback.jsx'
import AboutUs from './AboutUs.jsx'
import Contact from './Contact.jsx'

export default function Apps() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="about-us" element={<AboutUs/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Apps />);
