import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

import TopMenu from './components/TopMenu'

ReactDOM.render(
  <BrowserRouter>
    <TopMenu />
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
