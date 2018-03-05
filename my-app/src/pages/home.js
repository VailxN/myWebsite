import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import homeBackground from '../resources/homeBackground.jpeg'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Image src={homeBackground} fluid />
      </div>
    );
  }
}

export { Home };
