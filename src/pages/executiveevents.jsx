import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ExecutiveHeader from "../component/ExecutiveHeader";

const CLIENT_ID =
  "1007834033090-fj3bbslo2cclfd33oacskvt69kuj4pu5.apps.googleusercontent.com";
const API_KEY = "AIzaSyC54fo6lyoVHUVidCUSK5WRgg7ukfqdRW0";
const DISCOVERY_DOC =
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";
const SCOPES = "https://www.googleapis.com/auth/calendar";

const localizer = momentLocalizer(moment);

const formatEvents = (events) => {
  return events.map((event) => {
    const start = event.start.dateTime
      ? moment(event.start.dateTime)
      : moment(event.start.date);
    const end = event.end.dateTime
      ? moment(event.end.dateTime)
      : moment(event.end.date);

    return {
      title: event.summary,
      start: start.toDate(),
      end: end.toDate(),
      id: event.id,
    };
  });
};

function CustomEvent({ event, onDelete }) {
  const [showDelete, setShowDelete] = useState(false);
  return (
    <div
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
      style={{ position: "relative" }}
    >
      {event.title}
      {showDelete && (
        <button
          onClick={() => onDelete(event.id)}
          style={{
            position: "absolute",
            top: "50%",
            right: "5%",
            transform: "translate(50%, -50%)",
            cursor: "pointer",
            background: "none",
            border: "none",
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            className="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
          </svg>
        </button>
      )}
    </div>
  );
}
function ExecutiveEvents() {
  const [isGapiLoaded, setGapiLoaded] = useState(false);
  const [isGisLoaded, setGisLoaded] = useState(false);
  const [tokenClient, setTokenClient] = useState(null);
  const [events, setEvents] = useState([]);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventStart, setNewEventStart] = useState(new Date());
  const [newEventEnd, setNewEventEnd] = useState(new Date());
  const [showAddEventForm, setShowAddEventForm] = useState(false);

  useEffect(() => {
    const scriptGapi = document.createElement("script");
    scriptGapi.src = "https://apis.google.com/js/api.js";
    scriptGapi.onload = gapiLoaded;
    document.body.appendChild(scriptGapi);

    const scriptGis = document.createElement("script");
    scriptGis.src = "https://accounts.google.com/gsi/client";
    scriptGis.onload = gisLoaded;
    document.body.appendChild(scriptGis);

    return () => {
      document.body.removeChild(scriptGapi);
      document.body.removeChild(scriptGis);
    };
  }, []);

  const gapiLoaded = () => {
    window.gapi.load("client", initializeGapiClient);
  };

  const initializeGapiClient = async () => {
    await window.gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: [DISCOVERY_DOC],
    });
    setGapiLoaded(true);
  };

  const gisLoaded = () => {
    setTokenClient(
      window.google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: "",
      })
    );
    setGisLoaded(true);
  };

  const handleAuthClick = () => {
    tokenClient.callback = async (resp) => {
      if (resp.error !== undefined) {
        throw resp;
      }
      setIsAuthorized(true);
      await listUpcomingEvents();
    };

    if (window.gapi.client.getToken() === null) {
      tokenClient.requestAccessToken({ prompt: "consent" });
    } else {
      tokenClient.requestAccessToken({ prompt: "" });
    }
  };

  const handleSignoutClick = () => {
    const token = window.gapi.client.getToken();
    if (token !== null) {
      window.google.accounts.oauth2.revoke(token.access_token);
      window.gapi.client.setToken("");
      setEvents([]);
      setIsAuthorized(false);
    }
  };

  const listUpcomingEvents = async () => {
    let response;
    try {
      const request = {
        calendarId: "primary",
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: "startTime",
      };
      response = await window.gapi.client.calendar.events.list(request);
    } catch (err) {
      console.error("Error fetching events", err);
      return;
    }

    const fetchedEvents = response.result.items;
    setEvents(fetchedEvents);
  };

  const createEvent = async () => {
    const event = {
      summary: newEventTitle,
      start: {
        date: newEventStart.toISOString().split("T")[0], // Only the date part
      },
      end: {
        date: newEventEnd.toISOString().split("T")[0], // Only the date part
      },
    };

    try {
      const request = await window.gapi.client.calendar.events.insert({
        calendarId: "primary",
        resource: event,
      });
      const newEvent = request.result;
      setEvents([...events, newEvent]);
      setNewEventTitle("");
      setNewEventStart(new Date());
      setNewEventEnd(new Date());
    } catch (err) {
      console.error("Error creating event", err);
    }
  };

  const deleteEvent = async (eventId) => {
    try {
      await window.gapi.client.calendar.events.delete({
        calendarId: "primary",
        eventId: eventId,
      });
      setEvents(events.filter((event) => event.id !== eventId));
    } catch (err) {
      console.error("Error deleting event", err);
    }
  };

  const eventStyleGetter = (event) => {
    const style = {
      backgroundColor: "#3174ad",
      borderRadius: "5px",
      opacity: 0.8,
      color: "white",
      border: "0px",
      display: "block",
    };

    return { style };
  };

  return (
    <div className="px-16 ">
      <ExecutiveHeader
        activePage="adminevents"
        isAdmin={true}
        handleAuthClick={handleAuthClick}
        handleSignoutClick={handleSignoutClick}
        isGapiLoaded={isGapiLoaded}
        isGisLoaded={isGisLoaded}
        isAuthorized={isAuthorized}
        showAddEventForm={showAddEventForm}
        setShowAddEventForm={setShowAddEventForm}
      />
      <div style={{ height: "600px" }}>
        <Calendar
          localizer={localizer}
          events={formatEvents(events)}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "100%", borderRadius: "8px" }}
          eventPropGetter={eventStyleGetter}
          components={{
            event: (props) => <CustomEvent {...props} onDelete={deleteEvent} />,
          }}
        />
      </div>

      {showAddEventForm && isAuthorized && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Add Event</h2>
            <input
              type="text"
              placeholder="Event Title"
              value={newEventTitle}
              onChange={(e) => setNewEventTitle(e.target.value)}
              className="border p-2 mb-2 w-full"
            />
            <label htmlFor="startDate">Start Date</label>
            <input
              id="startDate"
              type="date"
              onChange={(e) => setNewEventStart(new Date(e.target.value))}
              className="border p-2 mb-2 w-full"
            />

            <label htmlFor="endDate">End Date</label>
            <input
              id="endDate"
              type="date"
              onChange={(e) => setNewEventEnd(new Date(e.target.value))}
              className="border p-2 mb-2 w-full"
            />
            <div className="flex justify-end">
              <button
                onClick={() => setShowAddEventForm(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={createEvent}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExecutiveEvents;