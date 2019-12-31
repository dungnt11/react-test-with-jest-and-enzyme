import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <div id="name">dung</div>
        {this.props.header}
      </div>
    )
  }
}
