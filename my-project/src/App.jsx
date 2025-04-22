
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


import Login from './Login';
import Regsiter from './Regsiter';
import ProtectedRoute from './ProtectedRoute';
import House from './House';
import Home from './Home';
import FindJobs from './FindJobs';
import About from './About';
import ContactForm from './ContactForm';
import ChatBot from './ChatBot';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Regsiter />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <>
              <House />
              <Home />
              <FindJobs />
              <About />
              <ContactForm />
              <ChatBot />
            </>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;


