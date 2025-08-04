import React from 'react';
import Navbar from './Components/Navbar';
import Documentation from './Components/Documentation';
import Problems from './Components/Problems';
import Visualizers from './Components/Visualizers';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className='container mt-4'>
        <Routes>
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/documentation/:algo" element={<Documentation />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/visualizers" element={<Visualizers />} />
          <Route path="/" element={<h2>Welcome to Algo Visualizer</h2>} />
        </Routes>
      </div>
    </Router>
  );
}
