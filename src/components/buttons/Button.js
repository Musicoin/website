import React, { Component } from 'react';
import { ButtonField, ButtonLink } from './styles';

export default class Button extends Component {
  render() {
    if (this.props.to) {
      return <ButtonLink {...this.props} />;
    }

    return <ButtonField {...this.props} />;
  }
}
