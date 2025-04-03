import React from 'react'

const Footer = () => {
  return (
    
       <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light border sticky-bottom'>
        <div className='container-fluid'>
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
                    <a className='nav-link' href="#chat">Chat with AI</a>
                </li>
                
                <li className='nav-item'>
                    <a className='nav-link' href="#dashboard">My Dashboard</a>
                </li>
                
                <li className='nav-item'>
                    <a className='nav-link' href="#contact">Contact</a>
                </li>

                <li className='nav-item '>
                    <a className='nav-link' href="#sign">Login/SignUp</a>
                </li>
            </ul>
            </div>
        </div>
      </nav>
     
      </div>
      
  )
}

export default Footer
