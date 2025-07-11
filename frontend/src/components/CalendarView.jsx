// src/components/CalendarView.jsx
import Navadmin from "C:/siteavocat-dev/src/components/admin/admin/Navadmin";
import React, { useEffect, useState } from 'react';
import './CalendarView.css'; // N'oublie d'importer le fichier CSS
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';


function CalendarView() {
  const [events, setEvents] = useState([]);
  const token = localStorage.getItem('token');

useEffect(() => {
  const isMobile = window.innerWidth <= 768;

  axios.get('https://avocat-backend.onrender.com/api/appointment/', {
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(res => {
      const calendarEvents = res.data.map(appt => ({
        title: isMobile ? `` : `${appt.fullName} (${appt.status})`,
        start: appt.appointmentDetails?.date,
        extendedProps: {
          id: appt._id,
          fullName: appt.fullName,
          time: appt.appointmentDetails?.time,
          location: appt.appointmentDetails?.location,
          
        }
      }));
      setEvents(calendarEvents);
    })
    .catch(err => {
      console.error("Erreur chargement rendez-vous :", err);
    });
}, [token]);


  return (
    <div>
      <div>
        <Navadmin />
      </div>
      <div className="calendrier-wrapper">
        <h2 className="calendrier-title">📅 Calendrier des Rendez-vous</h2>

        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          height="auto"
eventClick={(info) => {
  const { extendedProps } = info.event;
  alert(
    `🗓️ Rendez-vous\n👤 Client : ${extendedProps.fullName || 'Non spécifié'}\n📍 Lieu : ${extendedProps.location}\n⏰ Heure : ${extendedProps.time}`
  );
}}

        />
      </div>
    </div>
  );
}

export default CalendarView;
