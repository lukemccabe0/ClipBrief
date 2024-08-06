import React from 'react';
import Navbar from './Navbar'; // Ensure this path is correct
import Footer from './footer'; // Import the Footer component

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default Layout;
