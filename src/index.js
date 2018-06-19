import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import routes from './Components/routes';
// import registerServiceWorker from './registerServiceWorker';

import {HashRouter} from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    {routes}
  </HashRouter>
  , document.getElementById('root'));
// registerServiceWorker();
