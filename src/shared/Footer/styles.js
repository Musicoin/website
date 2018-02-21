import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { rgba } from 'polished';
import { media } from '@/styles/media';

export const Wrapper = styled.footer`
	padding: 130px 0 20px;
	font-size: 14px;
`;

export const Nav = styled.ul`
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	margin: 0;
	font-size: 12px;
	width: calc(100% + 20px);
`;

export const NavGroup = styled.li`
	flex: 1 1 auto;
	margin-bottom: 30px;
	margin-right: 20px;
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
	border: 1px solid ${rgba('#fff', 0.08)};
	border-width: 1px 0;
	margin-bottom: 20px;

	${media.xsmall`
		flex-direction: column;
		border-top: 0;
		text-align: center;
	`};
`;

export const Language = styled.span`
	font-weight: bold;

	${media.xsmall`
		width: 100%;
		border-top: 1px solid ${rgba('#fff', 0.08)};
		order: 1;
		margin-top: 20px;
		padding: 20px 0;
	`};
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

	${media.xsmall`
		font-size: 16px;

		& + & {
			margin-left: 28px;
		}
	`};
`;

export const SmallPrint = styled.small`
	font-size: 1em;
	opacity: 0.5;
	font-weight: bold;

	${media.xsmall`
		display: block;
		text-align: center;
	`};
`;
