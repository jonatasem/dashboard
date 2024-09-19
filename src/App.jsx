import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => (
  <div className='container-app'>
    <main className='welcome-app'>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default App;