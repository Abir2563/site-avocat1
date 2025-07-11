import React, { useState, useEffect } from "react";
import PrivateRoute from "./components/PrivateRoute"; // adapte le chemin si besoin

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TestAPI from "./TestAPI";
import CalendarView from './components/CalendarView';
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Newsletter from "./components/newsletter/newsletter"; // la nouvelle page
//Début Route Client
import Homeclient from "./components/EspaceClient/home";
//Fin Route Client
import ChatInterface from "./components/chat/chat";
import Team from "./components/team/team";
import Team1 from "./components/team/team1";
import Team2 from "./components/team/team2";
import Team3 from "./components/team/team3";
import Team4 from "./components/team/team4";
import Team5 from "./components/team/team5";
import ContactUs from "./components/contactus/contactus";
import Forget from "./components/forget/forget";
import Reset from "./components/reset/reset";
import Reserver from "./components/reserver/reserver";
import Media from "./components/media/media";
import Service from "./components/service/service";
//Admin
import AppAdmin from "./components/admin/admin/AppAdmin";
import AppPoint from "./components/admin/admin/appointments/AppPoint";
import AdminProfile from "./components/admin/admin/AdminProfile";
import ReadAppointment from "./components/admin/admin/appointments/ReadPoint";
import UpdateAppointmentStatus from "./components/admin/admin/appointments/UpdatePointt";
import AppUser from "./components/admin/admin/user/AppUser";
import Create from "./components/admin/admin/user/Create";
import Read from "./components/admin/admin/user/Read";
import ConsultationListe from "./components/admin/admin/Consultation/constListe";
import CreateConsultation from "./components/admin/admin/Consultation/CreateConst"
//User
import EditProfile from "./components/profil/editprofil";
import UserProfileView from "./components/profil/seeProfil";
import AppointmentDetails from "./components/profil/appoint";
import EditAppointment from "./components/profil/editappoint";
import Profile from "./components/profil/profile";
import ReminderPage from "./components/profil/reminder";
import Modal from "./components/buttonchat/Modal";
import ChatbotAvoca from "./components/chatbot/chatbot/ChatbotAvoca";
import FloatingButton from "./components/buttonchat/FloatingButton";

function App() {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const role = localStorage.getItem("role");
    console.log(role);
    if (role) {
      setUserRole(role);
    }
  }, []);

  // Function to check if user is authenticated
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return token ? true : false;
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };
  return (

    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/EspaceClient"
            element={
              <PrivateRoute allowedRoles={["client"]}>
                <Homeclient />
              </PrivateRoute>
            }
          />

          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team1" element={<Team1 />} />
          <Route path="/team2" element={<Team2 />} />
          <Route path="/team3" element={<Team3 />} />
          <Route path="/team4" element={<Team4 />} />
          <Route path="/team5" element={<Team5 />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/reset/:userId" element={<Reset />} />
          <Route path="/media" element={<Media />} />
          <Route path="/service" element={<Service />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/chat" element={<ChatInterface />} />
         

          {/* Protected Routes for Authenticated Users */}
          {userRole === "client" && (
            <>

              <Route
                path="/EspaceClient"
                element={
                  isAuthenticated() ? <Homeclient/> : <Navigate to="/login" />
                }
              />
              <Route
                path="/reserver"
                element={
                  isAuthenticated() ? <Reserver /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/seeprofile"
                element={
                  isAuthenticated() ? (
                    <UserProfileView />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
              <Route
                path="/editprofile"
                element={
                  isAuthenticated() ? <EditProfile /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/EditAppointment"
                element={
                  isAuthenticated() ? (
                    <EditAppointment />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute allowedRoles={["client", "admin"]}>
                    <Profile />
                  </PrivateRoute>
                }
              />


              <Route
                path="/reminder"
                element={
                  isAuthenticated() ? (
                    <ReminderPage />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
            </>
          )}

          {/* Admin Routes */}
          {userRole === "admin" && (
            <>

              <Route path="/consultation" element={<ConsultationListe />} />
              <Route path="/CreateConst" element={<CreateConsultation />} />
              <Route path="/AdminProfile" element={<AdminProfile />} />
              <Route path="/AppPoint" element={<AppPoint />} />
              <Route path="/appuser" element={<AppUser />} />
              <Route path="/create" element={<Create />} />
              <Route path="/users/:id" element={<Read />} />
              <Route path="/users/:id" element={<Read />} />
              <Route path="/calendrier" element={<CalendarView />} />

              <Route
                path="/editprofile"
                element={
                  isAuthenticated() ? <EditProfile /> : <Navigate to="/login" />
                }
              />
              <Route path="/appadmin" element={isAuthenticated() ? (<AppAdmin />) : (
                    <Navigate to="/login" />)} 
              />
              <Route
                path="/updatea/:id"
                element={<UpdateAppointmentStatus />}
              />
              <Route path="/reada/:id" element={<ReadAppointment />} />
            </>
          )}
        </Routes>
         {/* ChatBot Message 
        <FloatingButton onClick={handleButtonClick} />
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <ChatbotAvoca />
        </Modal>*/}
        <Footer />
      </div>
      {/*Test Backend */}
      {/*<div>
        <h1>Test Backend</h1>
        <TestAPI />
      </div>*/}
    </BrowserRouter>


  );
}
// tekhdemmmm el acess route dontttttttttt change a thing i ll smash ur head if u do
//rjaa3et ma temchich ma naaresh alesh sakret w halit ma aamlt chy
export default App;
