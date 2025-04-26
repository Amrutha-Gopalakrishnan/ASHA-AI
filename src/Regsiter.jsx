import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from './supabaseClient';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    mobile: ''
  });
  const [agreed, setAgreed] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!agreed) {
      alert('You must agree before registering.');
      return;
    }

    // Save user in Supabase 'users' table
    const { error } = await supabase
      .from('register')
      .insert([formData]);

    if (error) {
      alert('Registration failed: ' + error.message);
    } else {
      alert('Registration successful!');
      navigate('/login');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
        
      <form onSubmit={handleRegister} className="bg-white p-6 shadow-lg rounded w-full max-w-lg">
      <div className="flex items-left space-x-2">
          <img src="images/logo.jpg" alt="Logo" className="w-8 h-8" /> {/* Update path */}
          <span className="text-xl font-bold text-purple-700 mb-4">Asha AI</span>
        </div>
        <h2 className="text-2xl font-bold text-center text-center">Registration Form</h2>
        <p className='text-center text mb-4'>Regsiter to apply for jobs of your choice all over the world</p>
        <div className="flex justify-center mb-6">
         <img
            src="/images/login.png" // make sure this path is correct (inside public folder)
            alt="Login Visual"
            className="w-50 h-auto"
          />
        </div>

        <input type="text" name="full_name" placeholder="Full Name" className="w-full border p-2 rounded mb-3" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" className="w-full border p-2 rounded mb-3" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="w-full border p-2 rounded mb-3" onChange={handleChange} required />
        <input type="text" name="mobile" placeholder="Mobile" className="w-full border p-2 rounded mb-3" onChange={handleChange} required />

        <label className="text-sm text-gray-600 mb-3 ms-2 flex items-center">
          <input type="checkbox" className="mr-2" checked={agreed} onChange={() => setAgreed(!agreed)} />
          Send me important updates & promotions via SMS, email, and WhatsApp
        </label>

        <button type="submit" className="bg-purple-700 text-white w-full py-2 rounded">Register</button>
        <p className="mt-4 text-sm text-center">Already have an account? <Link to="/login" className="text-blue-600">Login</Link></p>
      </form>
    </div>
  );
}

export default Register;