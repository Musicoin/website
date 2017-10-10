import React, { Component } from 'react';
import bodymovin from 'bodymovin';
import { animationData } from './data';

export default class LogoAnim extends Component {
  componentDidMount() {
    bodymovin.loadAnimation({
      container: this.el,
      animationData,
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });
  }

  render() {
    return (
      <div
        className={this.props.className}
        style={this.props.style}
        ref={el => (this.el = el)}
      />
    );
  }
}
