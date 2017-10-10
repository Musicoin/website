import React, { Component } from 'react';
import Icon from '.';

export default class ArrowDown extends Component {
  render() {
    const { transform, ...props } = this.props;

    return (
      <Icon {...props} viewBox="0 0 14 15">
        <title>Down</title>
        <path
          d="M12.707,13.707 L4.707,13.707 L4.707,11.707 L10.293,11.707 L0,1.414 L1.414,0 L11.707,10.293 L11.707,4.707 L13.707,4.707 L13.707,12.707 C13.707,13.259 13.259,13.707 12.707,13.707 Z"
          fill="currentColor"
          fillRule="nonzero"
          transform={transform}
        />
      </Icon>
    );
  }
}
