import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './pages/home'
import Projects from './pages/projects'
import About from './pages/about'

import Menu from './components/Menu'

const menuItems = [
  { name: 'home', link: '/' },
  { name: 'about', link: '/about' },
  { name: 'projects', link: '/projects' }
]

export default class App extends Component {
  state = {}

  render() {
    return (
      <div>
        <div className="menu" >
          <Menu data={menuItems} />
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
