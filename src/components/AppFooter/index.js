import React, { Component } from 'react';
import { Wrapper, SocialButtons, SocialButton } from './styles';
import Logo from '../Logo';
import { Bitcoin, Facebook, Github, Medium, Slack, Twitter } from '../icons';

export default class AppFooter extends Component {
	render() {
		const { home, ...props } = this.props;

		if (home) {
			return null;
		}

		return (
			<Wrapper {...props}>
				<Logo width="134" height="38" fill="#ffc300" />
				<SocialButtons>
					<SocialButton href="https://www.facebook.com/lovemusicoin">
						<Facebook />
					</SocialButton>
					<SocialButton href="https://twitter.com/musicoins">
						<Twitter />
					</SocialButton>
					<SocialButton href="http://slack.musicoin.org/">
						<Slack />
					</SocialButton>
					<SocialButton href="https://github.com/Musicoin">
						<Github />
					</SocialButton>
					<SocialButton href="https://bitcointalk.org/index.php?topic=1776113.0">
						<Bitcoin />
					</SocialButton>
					<SocialButton href="https://medium.com/@musicoin">
						<Medium />
					</SocialButton>
				</SocialButtons>
				<small>&copy;2017 Musicoin.org</small>
			</Wrapper>
		);
	}
}
