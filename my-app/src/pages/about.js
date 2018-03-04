import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'

import kaggle from '../resources/Kaggle_logo.png'

export default class projects extends Component {
  render() {
    return (
      <div>        
        <Header as ='h1'>About me</Header>
        <p>Aspiring math graduate working as a software developer</p>
      </div>
    );
  }
}

export { projects };
