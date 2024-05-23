import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import "./reg.css"

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();

    axios.get("http://localhost:3000/Users/get")
      .then(response => {
        const existingusername = response.data.find(user => user.username === username);
        const existingemail = response.data.find(user => user.email === email);
  
        if (existingusername) {
          setError("Username already exists.");
        } else if (existingemail) {
          setError("Email already exists.");
        } else {
          axios.post("http://localhost:3000/Users/create", {
            username: username,
            email: email,
            password: password
          })
          .then(() => {
            setError("");
            navigate('/login');
          })
          .catch(error => {
            console.error(error);
            setError("An error occurred while creating the account.");
          });
        }
      })
      .catch(error => {
        console.error(error);
        setError("An error occurred while fetching users.");
      })
    }

  return (
    <div className="register-container">
      <h3>Register</h3>
      <form onSubmit={registerUser}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
        {error && <p style={{ color: 'red' }}>{error}</p>} 
      </form>
    </div>
  );
};

export default Register;
