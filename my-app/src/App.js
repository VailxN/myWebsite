import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './pages/home'
import Projects from './pages/projects'
import About from './pages/about'

import MenuItems from './components/MenuItems'

export default class App extends Component {
  state = {
    menu: [
      { name: 'home', link: '/' },
      { name: 'about', link: '/about' },
      { name: 'projects', link: '/projects' }
    ]
  }

  render() {
    return (
      <div>
        <div className="menu" >
          <MenuItems data={this.state.menu} />
        </div>

        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </div>
      </div>
    );
  }
}
