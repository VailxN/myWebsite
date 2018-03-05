import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'

export default class Project extends React.Component {
  render() {
    return (
        <Card>
          <Image src={this.props.thumbnail} />
          <Card.Content>
            <Card.Header>
              {this.props.title}
          </Card.Header>
            <Card.Meta>
              <span className='date'>
                {this.props.subtitle}
              </span>
            </Card.Meta>
            <Card.Description>
              {this.props.description}
          </Card.Description>
          </Card.Content>
        </Card>
        );
  }
}