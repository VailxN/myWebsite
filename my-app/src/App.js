import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu } from 'semantic-ui-react'

import home from './pages/home'
import projects from './pages/projects'
import about from './pages/about'

import MenuItem from './components/MenuItem'

class App extends Component {
  render() {
    return (
      <div className="App">  
        <Menu pointing secondary>
          <MenuItem to='/' name='home'/>
          <MenuItem to='/about' name='about'/>
          <MenuItem to='/projects' name='projects'/>
        </Menu>      
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Website</h1>
        </header> */}
        <hr />

        <Route exact path="/" component={home} />
        <Route path="/about" component={about} />
        <Route path="/projects" component={projects} />
      </div>
    );
  }
}

export default App;
