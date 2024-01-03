/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"; // Include the firestore module
import Header from "./component/Header";
// import react router dom
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import Home from "./Home.jsx";
import Feedback from "./pages/feedback.jsx";
import AboutUs from "./pages/aboutus.jsx";
import Contact from "./pages/contact.jsx";
import SignUp from "./pages/signup.jsx";
import Announcements from "./pages/announcements.jsx";
import Events from "./pages/events.jsx";
import Admin from "./pages/admin.jsx";
import SecondChamber from "./pages/secondchamber.jsx";
import AdminFeedback from "./pages/adminfeedback.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/feedback",
    element: <Feedback />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/announcements",
    element: <Announcements />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/secondchamber",
    element: <SecondChamber />,
  },
  {
    path:"/adminfeedback",
    element:<AdminFeedback/>,
  },
]);

function App() {
  return (
    <div className="isolate bg-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
