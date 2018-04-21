import React, { Component } from 'react';
import ProjectCard from './../components/ProjectCard'

import kaggle from './../resources/Kaggle_logo.png'

export default class Projects extends Component {
  state = {
    kaggle: { title: 'Kaggle', thumbnail: kaggle, subtitle: 'Started in Nov 2016', description: 'ML model to predict survival rate of the titanic' }
  }

  render() {
    return (
      <div>
        <ProjectCard data={this.state.kaggle} />
      </div>
    );
  }
}

