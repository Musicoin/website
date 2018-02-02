import React from 'react';
import {
	Wrapper,
	Nav,
	NavGroup,
	NavTitle,
	NavItems,
	NavItem,
	SubNav,
	Language,
	SocialLink,
	SmallPrint,
} from './styles';
import {
	LogoIcon,
	TwitterIcon,
	RedditIcon,
	MediumIcon,
	BitcoinIcon,
	GitIcon,
	FacebookIcon,
} from 'shared/icons';

export const Footer = () => (
	<Wrapper>
		<Nav>
			<NavGroup>
				<NavTitle>For musicians</NavTitle>
				<NavItems>
					<NavItem to="/">How to start</NavItem>
					<NavItem to="/">Features</NavItem>
					<NavItem to="/">Payments</NavItem>
					<NavItem to="/">Testimonials</NavItem>
				</NavItems>
			</NavGroup>
			<NavGroup>
				<NavTitle>Discover</NavTitle>
				<NavItems>
					<NavItem to="/join">Web</NavItem>
					<NavItem to="/">Desktop</NavItem>
					<NavItem to="/">Mobile</NavItem>
				</NavItems>
			</NavGroup>
			<NavGroup>
				<NavTitle>How it works</NavTitle>
				<NavItems>
					<NavItem to="/">Blockchain</NavItem>
					<NavItem to="/">Musicoin</NavItem>
					<NavItem to="/">Whitepaper</NavItem>
					<NavItem to="/">Roadmap</NavItem>
				</NavItems>
			</NavGroup>
			<NavGroup>
				<NavTitle>Resources</NavTitle>
				<NavItems>
					<NavItem to="/">Wallet</NavItem>
					<NavItem to="/">Blockchange explorer</NavItem>
					<NavItem to="/">Bounty</NavItem>
					<NavItem to="/">Social media</NavItem>
				</NavItems>
			</NavGroup>
			<NavGroup>
				<NavTitle>Help</NavTitle>
				<NavItems>
					<NavItem to="/">FAQ</NavItem>
					<NavItem to="/">Support</NavItem>
					<NavItem to="/">Contact</NavItem>
				</NavItems>
			</NavGroup>
		</Nav>
		<SubNav>
			<Language>English</Language>
			<div>
				<SocialLink href="#" title="Musicoin Forum">
					<LogoIcon />
				</SocialLink>
				<SocialLink href="#" title="Twitter">
					<TwitterIcon />
				</SocialLink>
				<SocialLink href="#" title="Reddit">
					<RedditIcon />
				</SocialLink>
				<SocialLink href="#" title="Medium">
					<MediumIcon />
				</SocialLink>
				<SocialLink href="#" title="BitcoinTalk">
					<BitcoinIcon />
				</SocialLink>
				<SocialLink href="#" title="Github">
					<GitIcon />
				</SocialLink>
				<SocialLink href="#" title="Facebook">
					<FacebookIcon />
				</SocialLink>
			</div>
		</SubNav>
		<SmallPrint>&copy; 2018, musicoin.org</SmallPrint>
	</Wrapper>
);
