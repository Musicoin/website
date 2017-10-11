import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { H1, H2, Prefix } from './styles';

function HeadingLevel({ level, ...props }) {
  switch (level) {
    case 2:
      return <H2 {...props} />;
    default:
      return <H1 {...props} />;
  }
}

export default class Heading extends Component {
  static propTypes = {
    level: PropTypes.number,
    prefix: PropTypes.string,
    middle: PropTypes.bool,
  };

  static defaultProps = {
    level: 1,
    prefix: '',
    middle: false,
  };

  render() {
    const { prefix, children, ...props } = this.props;

    return (
      <HeadingLevel {...props}>
        {prefix ? <Prefix>{prefix}</Prefix> : null}
        {children}
      </HeadingLevel>
    );
  }
}
