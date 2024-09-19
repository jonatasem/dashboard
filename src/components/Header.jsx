import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Importa o contexto de autenticação
import { BsBoxArrowRight } from "react-icons/bs";

const Header = () => {
    const { logout } = useAuth(); // Obtém a função de logout do contexto
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); // Chama a função de logout
        navigate('/'); // Redireciona para a página de login
    };

    return (
        <header className='container-header'>
            <h1>DagBanc</h1>
            <nav>
                <ul>
                    <li className='logout'>
                        <a onClick={handleLogout}>Logout</a>
                        <BsBoxArrowRight  className='icon-logout'/>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
