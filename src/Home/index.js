import React, { Component } from 'react';
import {
	mediaSmall,
	Title,
	Wrapper,
	Left,
	LeftButton,
	Right,
	RightButton,
	CentralLogo,
	Footer,
} from './styles';

export default class Home extends Component {
	mql = window.matchMedia(mediaSmall);

	state = {
		small: this.mql.matches,
	};

	componentDidMount() {
		this.mql.addListener(this.resize);
	}

	resize = e => {
		this.setState({
			small: e.matches,
		});
	};

	render() {
		return (
			<Wrapper>
				<Left>
					<Title>Pay fair</Title>
					<p>Musicians get paid without intermediaries</p>
					<LeftButton to="/for-musicians">I am a musician</LeftButton>
				</Left>
				{!this.state.small && <CentralLogo />}
				<Right>
					<Title>Play free</Title>
					<p>Free streaming for listeners, indefinitely</p>
					<RightButton to="/for-listeners">I am a listener</RightButton>
				</Right>
				<Footer>
					<a href="//orbiter.musicoin.org/">Powered by $MUSIC blockchain</a>
				</Footer>
			</Wrapper>
		);
	}
}
