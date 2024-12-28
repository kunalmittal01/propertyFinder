import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import Home from './pages/Home';
import Fav from './pages/Fav';
import { ToastContainer, toast } from 'react-toastify';

// toast.configure();
const Layout = () => {
  return (
    <Router>
      <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorities" element={<Fav />} />
        </Routes>
    </Router>
  )
}

export default Layout