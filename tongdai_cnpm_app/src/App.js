// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BookingtaxiScreen from './components/BookingtaxiScreen';
import ConfirmationScreen from './components/ConfirmationScreen';
import TaxiManagementScreen from './components/TaxiManagementScreen';

function App() {

  return (
    <Router>
      <div>
        <h1>HỆ THỐNG CALLCENTER</h1>
        <nav>
          <ul>
            <li>
              <Link to="/call-center">Booking taxi</Link>
            </li>
            <li>
              <Link to="/taxi-management">Manage Taxi</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/call-center" element={<BookingtaxiScreen />} />
          <Route path="/confirmation" element={<ConfirmationScreen />} />
          <Route path="/taxi-management" element={<TaxiManagementScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
