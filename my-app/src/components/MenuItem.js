import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class MenuItem extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <Link to={this.props.to}><Menu.Item name={this.props.name} active={activeItem === this.props.name} onClick={this.handleItemClick} /></Link>
    )
  }
}