import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import '~/config/ReactotronConfig';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

import Routes from './routes';

import GlobalStyle from '~/styles/global';
import { Box } from '~/styles/grids';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Box>
        <Routes />
      </Box>
      <Footer />
    </Router>
  );
}

export default App;
