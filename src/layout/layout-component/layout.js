// Layout.js
import React from 'react';
import Sidebar from '../navbar/navbar';
import MainContent from '../main-content/main';
import './layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Layout;
