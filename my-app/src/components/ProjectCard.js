import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'

export default class ProjectCard extends React.Component {
  render() {
    return (
        <Card>
          <Image src={this.props.data.thumbnail} />
          <Card.Content>
            <Card.Header>
              {this.props.data.title}
          </Card.Header>
            <Card.Meta>
              <span className='date'>
                {this.props.data.subtitle}
              </span>
            </Card.Meta>
            <Card.Description>
              {this.props.data.description}
          </Card.Description>
          </Card.Content>
        </Card>
        );
  }
}