import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SecUser from './pages/SecUser';
import FirstUser from './pages/FirstUser';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Routes>
        <Route path="/user-1" element={<FirstUser />} />
        <Route path="/user-2" element={<SecUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;