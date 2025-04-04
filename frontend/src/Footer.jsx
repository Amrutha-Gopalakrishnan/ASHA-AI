import React from 'react'

const Footer = () => {
    return (
        
        <footer className=" bg light text-black text-center p-2">
            <hr></hr>
            <div className='container'>
          
          <p className="fw-bold">📧 <a href="mailto:ashai@gmail.com" className="text-black">ashai@gmail.com</a></p>
          <p className="copyright mb-0">&copy; {new Date().getFullYear()} All Rights Reserved | ASHA AI</p>
          </div>
        </footer>
      );
}

export default Footer
