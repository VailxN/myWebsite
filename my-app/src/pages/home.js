import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Image } from 'semantic-ui-react';
import homeBackground from '../resources/homeBackground.jpeg'

export default class Home extends Component {
  render() {
    return (
      <div>        
        <p>home1</p>
        <Image src={homeBackground} fluid />
      </div>
    );
  }
}

export { Home };
