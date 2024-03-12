import "./App.css";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./Home.jsx";
import UserFeedback from "./pages/userfeedback.jsx";
import UserAboutus from "./pages/useraboutus.jsx";
import UserContact from "./pages/usercontact.jsx";
import UserSignup from "./pages/usersignup.jsx";
import UserAnnouncements from "./pages/userannouncements.jsx";
import UserEvents from "./pages/userevents.jsx";
import Executive from "./pages/executive.jsx";
import SecondChamber from "./pages/secondchamber.jsx";
import ExecutiveFeedback from "./pages/executivefeedback.jsx";
import ExecutiveAnnouncements from "./pages/executiveannouncements.jsx";
import VeiwAnnouncements from "./pages/veiwannouncements.jsx";
import ExecutiveEvents from "./calender/executiveevents.jsx";
import SecondFeedback from "./pages/secondfeedback.jsx";
import SecondAnnouncement from "./pages/secondannouncement.jsx";
import SecondEvents from "./pages/secondevents.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/userfeedback",
    element: <UserFeedback />,
  },
  {
    path: "/useraboutus",
    element: <UserAboutus />,
  },
  {
    path: "/usercontact",
    element: <UserContact />,
  },
  {
    path: "/usersignup",
    element: <UserSignup />,
  },
  {
    path: "/userannouncements",
    element: <UserAnnouncements />,
  },
  {
    path: "/userevents",
    element: <UserEvents />,
  },
  {
    path: "/executive",
    element: <Executive />,
  },
  {
    path: "/secondchamber",
    element: <SecondChamber />,
  },
  {
    path:"/executivefeedback",
    element:<ExecutiveFeedback/>,
  },
  {
    path:"/executiveannouncements",
    element:<ExecutiveAnnouncements/>,
  },
  {
    path:"/veiwannouncements",
    element:<VeiwAnnouncements/>,
  },
  {
    path:"/executiveevents",
    element:<ExecutiveEvents/>,
  },
  {
    path:"/secondevents",
    element:<SecondFeedback/>,
  },
  {
    path:"/secondannouncement",
    element:<SecondAnnouncement/>,
  },
  {
    path:"/secondevents",
    element:<SecondEvents/>,
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
