import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    const handleLogin= async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', {
                username, password
            });
            if(response.status = 200) {
                alert("Login bem-sucedido!");
                navigate("/dashboard");
            }
        } catch (error) {
            if(error.response && error.response.status == 401) {
                alert("Credenciais inválidas");
            }
            alert("Erro ao fazer login!");
        }
    };

    const handleRegisterRedirect = () => {
        navigate('/register');
    }


    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
                <button type="button" onClick={handleRegisterRedirect}>Crie sua conta</button>
            </form>
        </div>
    );

}

export default Login;