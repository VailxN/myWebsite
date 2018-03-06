import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu } from 'semantic-ui-react'

import home from './pages/home'
import projects from './pages/projects'
import about from './pages/about'

import MenuItems from './components/MenuItems'

class App extends Component {
  state = {
    menu: [
      {name: 'home', link: '/'},
      {name: 'about', link: '/about'},
      {name: 'projects', link: '/projects'}
    ]
  }

  render() {
    return (
      <div className="App">  
        <MenuItems items={this.state.menu} />
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
