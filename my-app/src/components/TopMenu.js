import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class TopMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary>
        <Link to="/"><Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} /></Link>
        <Link to="/about"><Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} /></Link>
        <Link to="/projects"><Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} /></Link>
      </Menu>
    )
  }
}