import React, { useState, useContext } from 'react';
import { ProgramContext } from '../Store/StoreContext';

const LoginCard = () => {
  const { setLogin , setPopupContent } = useContext(ProgramContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // **Simplified "authentication" - replace with real logic later**
  const handleLogin = () => {
    if (username === 'Prabhu' && password === '543') {
      setLogin(true);
      setPopupContent(null)
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-lg font-semibold mb-4">Login</h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <div className="mb-2">
          <label htmlFor="username" className="block text-gray-700 text-sm mb-1">Username:</label>
          <input
            type="text"
            id="username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus-shadow-outline"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm mb-1">Password:</label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus-shadow-outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
          type="button"
          onClick={() => setPopupContent(null)}>
            Cancel
        </button>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;