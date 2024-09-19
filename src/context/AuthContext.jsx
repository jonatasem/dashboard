import React, { createContext, useContext, useState } from 'react';

// Cria o contexto de autenticação
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Armazena o usuário logado
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticação

    const login = (userData) => {
        setUser(userData); // Define o usuário logado
        setIsAuthenticated(true); // Atualiza o estado de autenticação
    };

    const logout = () => {
        setUser(null); // Limpa o usuário ao deslogar
        setIsAuthenticated(false); // Atualiza o estado de autenticação
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext); // Hook para acessar o contexto
};