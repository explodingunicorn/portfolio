import React, { Component } from 'react';
import Link from 'gatsby-link';
import './button.scss';

class Button extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      flash: ''
    }
  }

  render() {
    return (
      <div 
        className={"button " + this.props.type} 
        onMouseOver={() => this.setState({flash: 'flash'})}
        onMouseOut={() => this.setState({flash: ''})}
      >
        <div className={"anim-deco " + this.state.flash}/>
        <Link to={this.props.link}>{this.props.children}</Link>
      </div>
    )
  }
}

export default Button;