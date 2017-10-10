import React, { Component } from 'react';
import { Btn, Link } from './styles';

export default class Button extends Component {
  render() {
    if (this.props.to) {
      return <Link {...this.props} />;
    }

    return <Btn {...this.props} />;
  }
}

export { Btn, Link };
