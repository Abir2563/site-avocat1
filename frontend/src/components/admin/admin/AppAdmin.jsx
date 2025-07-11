// import React, { useState } from 'react';
import './AppAdmin.css';
// import Header from './Header';
// import Sidebar from './Sidebar';
import Home from './Home';
import AdminProfile from './AdminProfile';
import Navadmin from './Navadmin';

const AppAdmin = () => {
  // const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  // const OpenSidebar = () => {
  //   setOpenSidebarToggle(!openSidebarToggle);
  // };

  return (
    <div>
      <div>
        <Navadmin />
      </div>
      <AdminProfile />
    
    </div>
  );
};

export default AppAdmin;
