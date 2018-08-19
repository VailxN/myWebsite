import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './pages/home'
import Projects from './pages/projects'
import About from './pages/about'

import Menu from './components/Menu'
import Contact from './pages/contact';

const menuItems = [
  { name: 'home', link: '/' },
  { name: 'about', link: '/about' },
  { name: 'projects', link: '/projects' },
  { name: 'contact', link: '/contact' }
]

export default class App extends Component {
  state = {}

  render() {
    return (
      <div className="App" >
        <div className="Menu" >
          <Menu data={menuItems} />
        </div>

        <div className="Content">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </div>
      </div>
    );
  }
}
