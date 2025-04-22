import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from './supabaseClient';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('register')
      .select('*')
      .eq('email', email)
      .eq('password', password)
      .single();

    if (error || !data) {
      alert('Email or Password is incorrect!');
    } else {
      // Optional: Save session info to localStorage
      localStorage.setItem('ashaUser', JSON.stringify(data));
      navigate('/'); // Redirect to home
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <form onSubmit={handleLogin} className="bg-white p-6 shadow-lg rounded w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <div className="flex justify-center mb-6">
         <img
            src="/images/login.png" // make sure this path is correct (inside public folder)
            alt="Login Visual"
            className="w-50 h-auto"
          />
        </div>

        <input type="email" placeholder="Email" className="w-full border p-2 rounded mb-3" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="w-full border p-2 rounded mb-3" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit" className="bg-purple-700 text-white w-full py-2 rounded">Login</button>
        <p className="mt-4 text-sm text-center">Don't have an account? <Link to="/register" className="text-blue-600">Register</Link></p>
      </form>
    </div>
  );
}

export default Login;
