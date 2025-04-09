import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserForm from './UserForm';
import FindImage from './FindImage'
import AcceptedImage from './acceptImage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<UserForm/>} />
        <Route path="/findImage" element={<FindImage/>} />
        <Route path="/acceptedImage" element={<AcceptedImage/>} />
      </Routes>
    </Router>
  );
};

export default App;