import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import home from './pages/home'
import projects from './pages/projects'
import about from './pages/about'

class App extends Component {
  render() {
    return (
      <div className="App">        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Website</h1>
        </header>
 
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
        <hr />

        <Route exact path="/" component={home} />
        <Route path="/about" component={about} />
        <Route path="/projects" component={projects} />
      </div>
    );
  }
}

export default App;
