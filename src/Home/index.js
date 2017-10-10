import React, { Component } from 'react';
import {
  Title,
  Wrapper,
  Left,
  LeftButton,
  Right,
  RightButton,
  Footer,
} from './styles';
import LogoAnim from '../components/LogoAnim';

export default class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Left>
          <Title>Pay fair</Title>
          <p>Musicians get paid without intermediaries</p>
          <LeftButton to="/join">I am a musician</LeftButton>
        </Left>
        <LogoAnim className="logo" />
        <Right>
          <Title>Play free</Title>
          <p>Free streaming for listeners, indefinitely</p>
          <RightButton to="/join">I am a listener</RightButton>
        </Right>
        <Footer>
          <a href="https://orbiter.musicoin.org/">
            Powered by $MUSIC blockchain
          </a>
        </Footer>
      </Wrapper>
    );
  }
}
