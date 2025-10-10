import React, { useState } from 'react';
import usersData from '../data/user.json'; // adjust path if needed
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Submitting login with:', { username, password: '*****' });

    fetch('https://recipemanagmentbackend-1.onrender.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
      .then(response => response.json())
      .then(data => {
        setUser(username);
        console.log('Backend response:', data);

        if (data.message.toLowerCase().includes('successful')) {

          alert(data.message);
          navigate('/');
        }
      })
      .catch(error => {
        console.error('Login error:', error);
        alert('Error logging in. Please try again later.');
      });
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-100 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('image.png')`,
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-black/20 backdrop-blur-sm p-8 rounded-xl shadow-md w-80 flex flex-col gap-4"
      >
        <h2 className="text-2xl text-white font-bold text-center mb-4">Login</h2>

        <div className="flex flex-col">
          <label htmlFor="username" className="mb-1  font-medium text-white">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            className="border-2 border-gray-300 rounded-md p-2 backdrop-blur-sm bg-white/20 text-white placeholder-white focus:outline-none focus:border-blue-500"
            required
          />

        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1 font-medium text-white">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-gray-300 rounded-md p-2 backdrop-blur-sm bg-white/20 text-white placeholder-white focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Login
        </button>

        <p className="text-sm text-center text-white">
          Don’t have an account?{" "}
          <a href="/Register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>

  );
};

export default Login;
