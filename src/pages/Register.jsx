import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users', formData);
      setMessage('Usuário cadastrado com sucesso!');
      navigate('/'); // Redireciona para a página de login após o registro
    } catch (error) {
      setMessage('Erro ao cadastrar usuário: ' + (error.response ? error.response.data.message : 'Erro desconhecido'));
    }
  };

  return (
    <>
      <h1>Cadastre-se no Sistema DashBoard</h1>
      <div className='container-register'>
        <h2>Faça seu Cadastro</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nome" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Senha" value={formData.password} onChange={handleChange} required />
          <button type="submit">Cadastrar</button>
        </form>
        {message && <p className='message'>{message}</p>} {/* Exibe mensagem de sucesso ou erro */}
      </div>
    </>
  );
};

export default Register;