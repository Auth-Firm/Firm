// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './custom_login_page';
import AdditionalFields from './Login';
import Conditional from './conditional';

function App() {
  return (
      <Routes>
        <Route path="/" exact element={<Register/>} />
        <Route path="/additional-fields" element={<AdditionalFields/>} />
        {/* Add other routes as needed */}
      </Routes>
  );
};

export default App;
