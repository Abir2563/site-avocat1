import Navbar from "../navbar/navbar";
import AppointmentDetails from "./appoint";
import UserProfileView from "./seeProfil";

const profile = () => {
  return (
    <>
      <Navbar />
      <UserProfileView />
      <AppointmentDetails />
    </>
  );
};
export default profile;
