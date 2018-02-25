import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

import SideMenu from './components/SideMenu'

ReactDOM.render(
  <BrowserRouter>
    <SideMenu />
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
