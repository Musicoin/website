import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { rgba } from 'polished';

export const Wrapper = styled.footer`
	padding: 130px 0 20px;
	font-size: 14px;
`;

export const Nav = styled.ul`
	display: flex;
	border-bottom: 1px solid ${rgba('#fff', 0.08)};
	list-style: none;
	margin: 0;
	padding-bottom: 20px;
	font-size: 12px;
`;

export const NavGroup = styled.li`
	flex: 1 1 auto;
`;

export const NavTitle = styled.h4`
	text-transform: uppercase;
	font-weight: 900;
	letter-spacing: 2px;
	font-size: 1em;
	margin-bottom: 1em;
`;

export const NavItems = styled.ul`
	list-style: none;
	margin: 0;
`;

export const NavItem = styled(({ children, to, ...props }) => (
	<li {...props}>
		<NavLink to={to}>{children}</NavLink>
	</li>
))`
	opacity: 0.75;
	transition: 200ms ease-in-out;

	&:hover,
	&:focus {
		opacity: 1;
	}
`;

export const SubNav = styled.div`
	min-height: 70px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid ${rgba('#fff', 0.08)};
	margin-bottom: 20px;
`;

export const Language = styled.span`
	font-weight: bold;
`;

export const SocialLink = styled.a`
	font-size: 24px;
	opacity: 0.7;
	transition: 200ms ease-in-out;

	& + & {
		margin-left: 48px;
	}

	&:hover,
	&:focus {
		opacity: 1;
	}
`;

export const SmallPrint = styled.small`
	font-size: 1em;
	opacity: 0.5;
	font-weight: bold;
`;
