import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '~/pages/Home';
import About from '~/pages/About';
import Gallery from '~/pages/Gallery';
import Schedule from '~/pages/Schedule';

export default function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/sobre" component={About} />
      <Route path="/galeria" component={Gallery} />
      <Route path="/cronograma" component={Schedule} />
    </Switch>
  );
}
