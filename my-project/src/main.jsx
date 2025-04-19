// // main.jsx
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css' //  Bootstrap
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css' //  Bootstrap
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
