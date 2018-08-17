import React, { Component } from 'react';
import { Image } from 'semantic-ui-react/dist/commonjs';
import './home.css'
import homeBackground from '../resources/homeBackground.jpeg'

export default class Home extends Component {
  render() {
    return (
      <div className='home' style={{height: 10000}} >
        {/* <Image src={homeBackground} fluid /> */}
      </div>
    );
  }
}

// export { Home };
