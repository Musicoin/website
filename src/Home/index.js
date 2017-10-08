import React from 'react';
import {
  Title,
  IntroBanner,
  IntroPlayer,
  IntroLeft,
  IntroRight,
  IntroFooter,
  Content,
} from './styles';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <IntroBanner>
          <IntroLeft>
            <Title>Play fair</Title>
            <p>Get paid without intermediaries</p>
          </IntroLeft>
          <IntroPlayer />
          <IntroRight>
            <Title>Play free</Title>
            <p>Listen for free, indefinitely</p>
          </IntroRight>
          <IntroFooter>Powered by Ethereum blockchain</IntroFooter>
        </IntroBanner>
        <Content>
          <Title>What is Musicoin</Title>
          <p>
            Musicoin is not just a currency. It’s an ecosystem - one that
            enables Musicians to release their works, create simplified
            licenses, and get paid - directly and immediately - every time a
            music lover listens to a song.
          </p>

          <p>
            Musicoin employs blockchain and ‘smart contract’ technology to
            execute a usage contract along with a payment transaction -
            automatically and seamlessly - each and every time a listener clicks
            the ‘Play’ button. No industry intermediaries required. No monthly
            fees. So everybody wins. (Learn more from our whitepaper and
            roadmap)
          </p>
        </Content>
      </div>
    );
  }
}
