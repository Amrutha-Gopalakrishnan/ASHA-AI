import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css' //  Bootstrap
import './index.css'
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import FindJobs from './FindJobs'
import About from './About'
import ContactForm from './ContactForm'
import ChatBot from './ChatBot'



const App = () => {
  return (
    <div>


      <Home />
    <Routes>
      <Route path="/" element={<FindJobs />} />
    </Routes>
      <About />
      <ContactForm />
      <ChatBot />
    </div>
  )
}

export default App


