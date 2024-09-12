import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/auth/register', {
                username, password, email
            });
            alert("Usuário cadastrado com sucesso!");
            navigate('/login');
        } catch (error) {
            alert("Erro ao cadastrar usuário!");
        }
    };

    const handleLoginRedirect = () => {
        navigate('/login');
    }

    return (
        <div className='register-container'>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type='submit'>Register</button>
                <button type='button' onClick={handleLoginRedirect}>Já tenho uma conta</button>
            </form>
        </div>
    );

}

export default Register;