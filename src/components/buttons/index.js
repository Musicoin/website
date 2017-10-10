import React, { Component } from 'react';
import {
  ButtonField,
  ButtonLink,
  PrimaryButtonField,
  PrimaryButtonLink,
} from './styles';

export default class Button extends Component {
  render() {
    if (this.props.to) {
      return <ButtonLink {...this.props} />;
    }

    return <ButtonField {...this.props} />;
  }
}

export class PrimaryButton extends Component {
  render() {
    if (this.props.to) {
      return <PrimaryButtonLink {...this.props} />;
    }

    return <PrimaryButtonField {...this.props} />;
  }
}

export { ButtonField, ButtonLink, PrimaryButtonField, PrimaryButtonLink };
