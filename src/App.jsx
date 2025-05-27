import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from './Home';
import FindJobs from './FindJobs';
import About from './About';
import ContactForm from './ContactForm';
import ChatBot from './ChatBot';
import Login from './Login';
import Regsiter from './Regsiter';
import Nav from './Nav';
import UserProfile from './UserProfile';
import Dashboard from './Dashboard'

const MainPage = () => (
  <>
    <Nav />
    <Home />
    <FindJobs />
    <About />
    <ContactForm />
    <ChatBot />
  </>
);

const App = () => {
  return (
   
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Regsiter />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path='/dashboard' element={<Dashboard />} />

      </Routes>
  
  );
};

export default App;
