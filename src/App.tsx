import { FC } from 'react';

import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: FC = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <Navbar />
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
};

export default App;
