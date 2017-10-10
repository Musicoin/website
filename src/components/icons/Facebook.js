import React, { Component } from 'react';
import Icon from '.';

export default class Facebook extends Component {
  render() {
    return (
      <Icon {...this.props} viewBox="0 0 13 24">
        <title>Facebook</title>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path
            d="M3.569748,24 L3.569748,13.6 L0,13.6 L0,8.8 L3.569748,8.8 L3.569748,5.447984 C3.569748,1.796612 5.881332,0 9.138604,0 C10.698872,0 12.03984,0.116164 12.430636,0.168088 L12.430636,3.983988 L10.171544,3.985016 C8.400056,3.985012 8,4.826796 8,6.06206 L8,8.8 L12.8,8.8 L11.2,13.6 L8,13.6 L8,24 L3.569748,24 Z"
            fill="currentColor"
            fillRule="nonzero"
          />
        </g>
      </Icon>
    );
  }
}
