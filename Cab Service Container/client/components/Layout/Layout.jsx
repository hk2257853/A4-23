import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = () => {

    const [isSidebarHidden, setIsSidebarHidden] = useState(true);

    const handleSidebarToggle = (isHidden) => {
      setIsSidebarHidden(isHidden);
    }

  return (
    <div>
        <Navbar handleSidebarToggle={handleSidebarToggle}/>
        <Sidebar isSidebarHidden={isSidebarHidden}/>
    </div>
  );
};

export default Layout;
