import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'

export default class About extends Component {
  render() {
    return (
      <div>        
        <Header as ='h1'>About me</Header>
        <p>Aspiring math graduate working as a software developer</p>
      </div>
    );
  }
}

// export { projects };
