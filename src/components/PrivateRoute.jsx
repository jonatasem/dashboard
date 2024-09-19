import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Importa o contexto de autenticação

const PrivateRoute = ({ element }) => {
    const { isAuthenticated } = useAuth(); // Obtém o estado de autenticação
    return isAuthenticated ? element : <Navigate to="/" />; // Redireciona se não autenticado
};

export default PrivateRoute;