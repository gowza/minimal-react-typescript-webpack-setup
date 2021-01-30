import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <App title="Minimal React TypeScript setup" />,
  document.getElementById('app')
);

module.hot.accept();
