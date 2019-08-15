import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import '~/config/ReactotronConfig';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

import Routes from './routes';

import GlobalStyle from '~/styles/global';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
