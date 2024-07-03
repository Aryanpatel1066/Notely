import React, { useState } from 'react';
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import Navbar from "./pages/Navbar";
import './App.css';

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      {/* <Header /> */}
      <Navbar drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle} />
      <main style={{ 
        border: '2px solid red', 
        marginLeft: drawerOpen ? '250px' : '90px', 
        marginTop: '30px' 
      }}>
        <AppRouter />
      </main>
    </>
  );
}

 