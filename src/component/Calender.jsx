import React, { useState } from 'react';
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

function Calendar() {
  const [showEventForm, setShowEventForm] = useState(false);
  const [eventDate, setEventDate] = useState(null);

  const handleDateClick = (info) => {
    setShowEventForm(true);
    setEventDate(info.dateStr);
  };

  const handleEventAdd = (event) => {
    // Add logic to handle the event data (e.g., save to a database)
    console.log('Event added:', event);
    setShowEventForm(false);
  };

  const handleEventCancel = () => {
    setShowEventForm(false);
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={'dayGridMonth'}
        dateClick={handleDateClick}
      />

      {showEventForm && (
        <div>
          <h3>Add Event</h3>
          <form onSubmit={handleEventAdd}>
            <label>Date: {eventDate}</label>
            <br />
            <label>Description:</label>
            <input type="text" placeholder="Event description" required />
            <br />
            <label>Date:</label>
            <input type="date" required />
            <br />
            <button type="submit">Add Event</button>
            <button type="button" onClick={handleEventCancel}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Calendar;
