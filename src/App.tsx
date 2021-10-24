import React, { FC } from 'react';

import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: FC = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
};

export default App;
