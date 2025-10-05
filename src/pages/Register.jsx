import React, { useState } from 'react';
import data from '../data/user.json'; // import existing users

const Register = () => {
  const [users, setUsers] = useState(data); // state holds users
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Check if email already exists
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
      alert("Email already registered!");
      return;
    }

    // Create new user object
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password, // NOTE: in real apps, hash the password
      createdAt: new Date().toISOString()
    };

    // Update state
    setUsers([...users, newUser]);

    // Clear form
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');

    alert("Registration successful!");
    console.log('Updated Users:', [...users, newUser]);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-xl shadow-md w-80 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          required
        />

        <button 
          type="submit" 
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Register
        </button>

        <p className="text-sm text-center">
          Already have an account? <a href="/Login" className="text-blue-600 hover:underline">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
