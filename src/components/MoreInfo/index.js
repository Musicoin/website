import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Article, Toggle, ToggleArrow, Content } from './styles';

export default class MoreInfo extends Component {
  static defaultProps = {
    open: false,
  };

  static propTypes = {
    open: PropTypes.bool,
  };

  state = {
    open: this.props.open,
  };

  click = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  };

  render() {
    return (
      <Article className={this.props.className} style={this.props.style}>
        <Toggle onClick={this.click}>
          {this.props.title}
          <ToggleArrow open={this.state.open} />
        </Toggle>
        <Content open={this.state.open}>{this.props.children}</Content>
      </Article>
    );
  }
}
