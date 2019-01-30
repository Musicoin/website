import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
import googlePlayButtonImage from '../../Home/images/google-play-badge.png';
import appleAppMarketButtonImage from '../../Home/images/download_on_the_app_store_badge_us-uk_rgb_blk_092917.png';
const appleDownloadUrl =
	'https://itunes.apple.com/us/app/musicoin/id1447230096?ls=1&mt=8';
const googleDownloadUrl =
	'https://play.google.com/store/apps/details?id=org.musicoin.musicoin';

//function to load download urls
const openGoogleUrl = () => window.open(googleDownloadUrl, '_blank');
const openAppleUrl = () => window.open(appleDownloadUrl, '_blank');

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
					<NavItem>
						<a href="/legal">Legal</a>
					</NavItem>
				</NavItems>
			</NavGroup>
			<NavGroup>
				<NavTitle>Discover</NavTitle>
				<NavItems>
					<NavItem>
						<NavLink to="https://musicoin.org/welcome-musician">
							Web Application
						</NavLink>
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
					{/*}<NavItem>
						<a href="//forum.musicoin.org">Forum</a>
					</NavItem>*/}
					<NavItem>
						<NavLink to="/resources/faq">FAQ</NavLink>
					</NavItem>
				</NavItems>
			</NavGroup>
		</Nav>
		<SubNav>
			<SmallPrint>&copy; 2019, musicoin.org</SmallPrint>
			<div>
				{/*}<SocialLink href="//forum.musicoin.org" title="Musicoin Forum">
					<LogoIcon />
				</SocialLink>*/}
				<Link
					to="/"
					onClick={openGoogleUrl}
					style={{
						width: '100px',
						height: '40px',
						float: 'left',
						backgroundSize: '90%',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						backgroundImage: 'url(' + googlePlayButtonImage + ')',
					}}
				/>
				<Link
					to="/"
					onClick={openAppleUrl}
					style={{
						marginRight: '45px',
						width: '100px',
						height: '40px',
						float: 'left',
						backgroundSize: '90%',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						backgroundImage: 'url(' + appleAppMarketButtonImage + ')',
					}}
				/>
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
