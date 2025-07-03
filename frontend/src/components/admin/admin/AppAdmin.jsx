// import React, { useState } from 'react';
import './AppAdmin.css';
// import Header from './Header';
// import Sidebar from './Sidebar';
import Home from './Home';
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
      <Home />
    
    </div>
  );
};

export default AppAdmin;
