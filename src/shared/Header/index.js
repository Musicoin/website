import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'assets/images/logo.svg';
import { Wrapper, Image, Nav, NavItem } from './styles';
import { Content } from 'shared/Content';
import { SecondaryButton, TertiaryButton } from 'shared/buttons/styles';

export const Header = () => (
	<Content>
		<Wrapper>
			<NavLink to="/">
				<Image src={logo} width="132" height="30" alt="Musicoin" />
			</NavLink>
			<Nav>
				<NavItem to="/musicians">Musicians</NavItem>
				<NavItem to="/discover">Discover</NavItem>
				<NavItem to="/how-it-works">How it works</NavItem>
				<NavItem to="/resources">Resources</NavItem>
				<NavItem to="/faq">FAQ</NavItem>
				<SecondaryButton to="/log-in">Log in</SecondaryButton>
				<TertiaryButton to="/join">Sign up</TertiaryButton>
			</Nav>
		</Wrapper>
	</Content>
);
