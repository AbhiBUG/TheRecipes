import React, { useState } from 'react';
import usersData from '../data/user.json'; // adjust path if needed
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the email exists in usersData
    const user = usersData.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Authentication successful
      setUser(user); // Set user in parent state
      alert(`Welcome back, ${user.name}!`);
      navigate('/'); // Redirect to home
    } else {
      alert('Invalid email or password!');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-80 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1 font-medium">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Login
        </button>

        <p className="text-sm text-center">
          Don't have an account? <a href="/Register" className="text-blue-600 hover:underline">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
