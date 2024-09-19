import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import PrivateRoute from '../components/PrivateRoute';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<PrivateRoute element={<Home />} />} />
    </Route>
  </Routes>
);

export default AppRoutes;