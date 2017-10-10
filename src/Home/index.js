import React, { Component } from 'react';
import { Title, Wrapper, Left, Right, Footer } from './styles';
import Button, { PrimaryButton } from '../components/buttons';
import LogoAnim from '../components/LogoAnim';

export default class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Left>
          <Title>Play fair</Title>
          <p>Musicians get paid without intermediaries</p>
          <Button to="/join">I am a musician</Button>
        </Left>
        <LogoAnim className="logo" />
        <Right>
          <Title>Play free</Title>
          <p>Free streaming for listeners, indefinitely</p>
          <PrimaryButton to="/join">I am a listener</PrimaryButton>
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
