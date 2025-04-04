import React, { useState} from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Job from './Job'
import Chatbot from './ChatBot';
import Contact from './Contact';
import Footer from './Footer';
import Login from './Login';



export const App = () => {

    const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // NEW STATE

  const toggleForm = () => setIsLogin(!isLogin);
  const handleLogin = () => setIsAuthenticated(true); // Trigger this on successful login/signup

  return (
    <div>
        {!isAuthenticated ? (
        <Login isLogin={isLogin} toggleForm={toggleForm} onLogin={handleLogin} />
      ) : (
        <>
           <header>
       <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light border sticky-top'>
        <div className='container-fluid'>
            <a className='navbar-brand ms-5 fs-1 fw-bold text-primary' href="#">ASHA AI</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className='collapse navbar-collapse justify-content-evenly' id='navbarNav'>
           <ul className='navbar-nav me-auto mb-2 mb-lg-0 p-3 d-flex justify-content-evenly w-100'>
                <li className='nav-item'>
                    <a className='nav-link' href="#home">Home</a>
                </li>

                <li className='nav-item'>
                    <a className='nav-link' href="#jobs">Jobs</a>
                </li>

                <li className='nav-item'>
                    <a className='nav-link' href="#chat">Meet ASHA AI</a>
                </li>
                
                <li className='nav-item'>
                    <a className='nav-link' href="#dashboard">My Profile</a>
                </li>
                
                <li className='nav-item'>
                    <a className='nav-link' href="#contact">Contact</a>
                </li>

            </ul>
            </div>
        </div>
      </nav>
      <br></br>
      </div> 
      </header>

      <Home />
      <Job /> 
      <Chatbot />
      <Contact />
      <Footer />
      
     </>

      )}

    </div>
  )
}

export default App