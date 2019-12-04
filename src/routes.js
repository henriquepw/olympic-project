import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '~/pages/Home';
// import Call from '~/pages/Call';
import About from '~/pages/About';
import Gallery from '~/pages/Gallery';
import Schedule from '~/pages/Schedule';
import Event from '~/pages/Event';

export default function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/sobre" component={About} />
      {/* <Route path="/selecao" component={Call} /> */}
      <Route path="/galeria" component={Gallery} />
      <Route path="/cronograma" component={Schedule} />
      <Route path="/evento" component={Event} />
    </Switch>
  );
}
