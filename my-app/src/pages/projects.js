import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'

import kaggle from '../resources/Kaggle_logo.png'

// class project extends Component {
//   render() {
//     return (
      
//     );
//   }
// }

export default class projects extends Component {
  render() {
    return (
      <div>        
        <Card>
          <Image src={kaggle}/>
          <Card.Content>
            <Card.Header>
              Kaggle project
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                Started at November 2016
              </span>
            </Card.Meta>
            <Card.Description>
              Machine learning model to predict the survival rate of the Titanic
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export { projects };
