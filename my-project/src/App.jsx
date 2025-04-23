
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';


// // import Login from './Login';
// // import Regsiter from './Regsiter';
// // import ProtectedRoute from './ProtectedRoute';
// import House from './House';
// import Home from './Home';
// import FindJobs from './FindJobs';
// import About from './About';
// import ContactForm from './ContactForm';
// import ChatBot from './ChatBot';

// const App = () => {
//   return (
//     // <Routes>
//     //   <Route path="/login" element={<Login />} />
//     //   <Route path="/register" element={<Regsiter />} />
// {/* 
//       <Route
//         path="/"
//         element={
//           <ProtectedRoute>
//             <> 
//               <House />
//               <Home />
//               <FindJobs />
//               <About />
//               <ContactForm />
//               <ChatBot />
//              </>
//           </ProtectedRoute>
//         }
//       />
//     </Routes> */}
//     <> 
//     <House />
//     <Home />
//     <FindJobs />
//     <About />
//     <ContactForm />
//     <ChatBot />
//    </>
//   );
// };

// export default App;

// import React from 'react';
// import { HashRouter, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
// import House from './House';
// import Home from './Home';
// import FindJobs from './FindJobs';
// import About from './About';
// import ContactForm from './ContactForm';
// import ChatBot from './ChatBot';
// import Login from './Login'
// import Regsiter from './Regsiter'

// const App = () =>{
//   return(
//     <div>
    
        
    

//       <Home />
//       <House />
//       <About />
//       <FindJobs />
//       <ContactForm />
//       <ChatBot />

//       <HashRouter>
//         <Routes>
//         <Route path='/login' element={<Login />} />
//         <Route path='/regsiter' element={<Regsiter />} />

//         </Routes>
//       </HashRouter>

//     </div>
//   )
// }

// export default App

// App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Home from './Home';
import House from './House';
import FindJobs from './FindJobs';
import About from './About';
import ContactForm from './ContactForm';
import ChatBot from './ChatBot';
import Login from './Login';
import Regsiter from './Regsiter';

const MainPage = () => (
  <>
    <Home />
    <House />
    
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
      </Routes>
  
  );
};

export default App;
