import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react/dist/commonjs'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class NormanMenu extends Component {
  constructor() {
    super();
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  state = { activeItem: 'home' }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary size='massive'>
        {this.props.data.map(obj => {
          return ( 
            <Link key={obj.name} to={obj.link}>
              <Menu.Item name={obj.name} active={activeItem === obj.name} onClick={this.handleItemClick} />
            </Link>
          );
        })}
      </Menu>
    )
  }
}