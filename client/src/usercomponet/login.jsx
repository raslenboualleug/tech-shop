import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './login.css'


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");

    const checkAcc = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/users/login", {
            email: email,
            password: password
        })
        .then(response => {
            console.log(response.data);
            localStorage.setItem("user", email);
           
        })
        .catch(error => {
            setError(error.response?.data?.error || 'Invalid email or password');
        });
    }

    return (
        <div className="container">
            <h3>Login</h3>
            <form onSubmit={checkAcc}>
                <input 
                    type="text" 
                    placeholder="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <p>
                    JOIN US 
                    <button onClick={(e) => {
                        navigate("/register");
                    }}>
                        Register
                    </button>
                </p>
                <button type="submit">Login</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
}

export default Login;
