import React from 'react';
import dva from './utils/dva';
import Router from './routes';

import Home from './models/Home';
import Mine from './models/Mine';

const app = dva({
  models: [Home, Mine],
  onError(e) {
    console.log('onError', e);
  },
});

const App = app.start(<Router />);
const store =  app._store;
export default App;
export { store };
