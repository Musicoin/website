import React, { Component } from 'react';
import { Title, Wrapper, Left, Right, Footer } from './styles';
import Button from '../components/Button';
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
          <Button to="/join">I am a listener</Button>
        </Right>
        <Footer>Powered by Ethereum blockchain</Footer>
      </Wrapper>
    );
  }
}
