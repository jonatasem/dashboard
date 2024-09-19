import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Caminho permanece o mesmo

const Login = () => {
    const { login } = useAuth(); // Obtém a função de login do contexto
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/api/login', credentials);
            console.log("Usuário logado:", response.data.user); // Verifica a resposta
            login(response.data.user); // Chama a função de login com os dados do usuário
            navigate('/home'); // Redireciona para a página home
        } catch (error) {
            setMessage('Erro ao fazer login: ' + (error.response ? error.response.data.message : 'Erro desconhecido'));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <h1>Seja Bem Vindo(a)! ao Sistema DashBoard</h1>
            <div className='container-login'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Email" value={credentials.email} onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Senha" value={credentials.password} onChange={handleChange} required />
                    <button type="submit" disabled={isLoading}>Entrar</button>
                    {isLoading && <span className="loader"></span>} {/* Loader durante o carregamento */}
                </form>
                <Link to="/register">Ainda não tem uma Conta?</Link>
                {message && <p className='message'>{message}</p>}
            </div>
        </>
    );
};

export default Login;