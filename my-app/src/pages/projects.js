import React, { Component } from 'react';
import ProjectCard from './../components/ProjectCard'

import kaggle from './../resources/Kaggle_logo.png'

export default class Home extends Component {
  render() {
    return (
      <div>
        <ProjectCard title='Kaggle' thumbnail={kaggle} subtitle='Started in Nov 2016' description='ML model to predict survival rate of the titanic'/>
      </div>
    );
  }
}

export { Home };
