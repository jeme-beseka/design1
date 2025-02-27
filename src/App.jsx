import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VendorApp from './vendor/VendorApp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/vendor/*" element={<VendorApp />} />
        {/* Add buyer routes here */}
      </Routes>
    </Router>
  );
};

export default App;
