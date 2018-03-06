import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import home from './pages/home'
import projects from './pages/projects'
import about from './pages/about'

import MenuItems from './components/MenuItems'

export default class App extends Component {
  state = {
    menu: [
      {name: 'home', link: '/'},
      {name: 'about', link: '/about'},
      {name: 'projects', link: '/projects'}
    ]
  }

  render() {
    return (
      <div>
        <div className="menu" >  
          <MenuItems data={this.state.menu} />
        </div>

        <div className="content">
          <Route exact path="/" component={home} />
          <Route path="/about" component={about} />
          <Route path="/projects" component={projects} />
        </div>
      </div>
    );
  }
}
