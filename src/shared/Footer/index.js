import React from 'react';
import { NavLink } from 'react-router-dom';
import {
	Wrapper,
	Nav,
	NavGroup,
	NavTitle,
	NavItems,
	NavItem,
	SubNav,
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
} from '@/shared/icons';

export const Footer = () => (
	<Wrapper>
		<Nav>
			<NavGroup>
				<NavTitle>About</NavTitle>
				<NavItems>
					<NavItem>
						<NavLink to="/how-it-works">What is musicoin?</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/musicians">For musicians</NavLink>
					</NavItem>
					<NavItem>
						<a href="//www.scribd.com/document/362834077/Musicoin-White-Paper-v2-0-0">
							Whitepaper
						</a>
					</NavItem>
				</NavItems>
			</NavGroup>
			<NavGroup>
				<NavTitle>Discover</NavTitle>
				<NavItems>
					<NavItem>
						<NavLink to="/welcome">Web Application</NavLink>
					</NavItem>
					<NavItem>
						<a href="//github.com/Musicoin/desktop/releases">Desktop Wallet</a>
					</NavItem>
				</NavItems>
			</NavGroup>
			<NavGroup>
				<NavTitle>Resources</NavTitle>
				<NavItems>
					<NavItem>
						<NavLink to="/developers">Developers</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/developers/bounty">Bounty program</NavLink>
					</NavItem>
					<NavItem>
						<a href="//explorer.musicoin.org">Blockchain explorer</a>
					</NavItem>
				</NavItems>
			</NavGroup>
			<NavGroup>
				<NavTitle>Help</NavTitle>
				<NavItems>
					<NavItem>
						<a href="//forum.musicoin.org">Forum</a>
					</NavItem>
					<NavItem>
						<NavLink to="/resources/faq">FAQ</NavLink>
					</NavItem>
				</NavItems>
			</NavGroup>
		</Nav>
		<SubNav>
			<SmallPrint>&copy; 2018, musicoin.org</SmallPrint>
			<div>
				<SocialLink href="//forum.musicoin.org" title="Musicoin Forum">
					<LogoIcon />
				</SocialLink>
				<SocialLink href="//twitter.com/musicoins" title="Twitter">
					<TwitterIcon />
				</SocialLink>
				<SocialLink href="//reddit.com/r/musicoin" title="Reddit">
					<RedditIcon />
				</SocialLink>
				<SocialLink href="//medium.com/@musicoin" title="Medium">
					<MediumIcon />
				</SocialLink>
				<SocialLink
					href="//bitcointalk.org/index.php?topic=1776113.0"
					title="BitcoinTalk"
				>
					<BitcoinIcon />
				</SocialLink>
				<SocialLink href="//github.com/musicoin" title="Github">
					<GitIcon />
				</SocialLink>
				<SocialLink href="//www.facebook.com/lovemusicoin/" title="Facebook">
					<FacebookIcon />
				</SocialLink>
			</div>
		</SubNav>
	</Wrapper>
);
