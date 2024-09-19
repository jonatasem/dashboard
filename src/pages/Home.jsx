import React from 'react';
import { useAuth } from '../context/AuthContext'; // Caminho permanece o mesmo
import Header from '../components/Header'; // Atualizado para o novo caminho

const Home = () => {
    const { user } = useAuth(); // Obtém o usuário logado

    console.log("Usuário na página Home:", user); // Verifica o usuário na página

    return (
        <>
            <Header />
            <section className='container-home'>
                <article className='welcome-user'>
                    <h2>Olá, {user ? user.name : 'Visitante'}...</h2> {/* Exibe o nome do usuário */}
                    <p>Seja Bem Vindo!</p>
                </article>
                <article>
                    <h2>Conteudo Principal</h2>
                </article>
                <article>
                    <p>Conteudo segundario</p>
                </article>
            </section>
        </>
    );
};

export default Home;