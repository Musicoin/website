import React, { Component } from 'react';
import { Wrapper, SocialButtons, SocialButton } from './styles';
import Logo from '../Logo';
import {
	Bitcoin,
	Facebook,
	Github,
	Medium,
	Slack,
	Twitter,
	Discord,
} from '../icons';

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
					<SocialButton href="//www.facebook.com/lovemusicoin">
						<Facebook />
					</SocialButton>
					<SocialButton href="//twitter.com/musicoins">
						<Twitter />
					</SocialButton>
					<SocialButton href="//slack.musicoin.org/">
						<Slack />
					</SocialButton>
					<SocialButton href="//github.com/Musicoin">
						<Github />
					</SocialButton>
					<SocialButton href="//bitcointalk.org/index.php?topic=1776113.0">
						<Bitcoin />
					</SocialButton>
					<SocialButton href="//medium.com/@musicoin">
						<Medium />
					</SocialButton>
					<SocialButton href="https://discord.gg/gA8gjxC">
						<Discord />
					</SocialButton>
				</SocialButtons>
				<small>&copy;2017 Musicoin.org</small>
			</Wrapper>
		);
	}
}
