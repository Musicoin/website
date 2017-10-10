import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { H1, H2 } from './styles';

export default class Heading extends Component {
  static propTypes = {
    level: PropTypes.number,
  };

  render() {
    const { level, ...props } = this.props;

    switch (level) {
      case 2:
        return <H2 {...props} />;
      default:
        return <H1 {...props} />;
    }
  }
}
