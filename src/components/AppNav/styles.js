import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { rgba } from 'polished';
import { PrimaryButton } from '../buttons';

export const mediaSmall = '(max-width: 1175px)';
export const mediaLarge = '(min-width: 1175px)';

const NavOpen = css`
	opacity: 1;
	max-height: 1000px;
	margin-top: 30px;
`;

const NavClosed = css`
	opacity: 0;
	max-height: 0;
	margin-top: 0;
	pointer-events: none;
`;

export const NavItems = styled.nav`
	display: 'flex';
	justify-content: flex-end;
	align-items: flex-start;
	flex-wrap: wrap;
	padding: 2px 0;

	@media ${mediaSmall} {
		display: flex;
		flex-direction: column;
		transition: 200ms ease-in-out;
		transition-property: opacity, margin-top, max-height;
		position: relative;
		${props => (props.open ? NavOpen : NavClosed)};
	}
`;

export const NavItem = styled(NavLink)`
	color: inherit;
	border-bottom: 2px solid transparent;
	text-transform: uppercase;
	text-decoration: none;
	font-weight: bold;
	font-size: 12px;
	padding: 12px 0;
	transition: border-color 200ms ease-out;
	outline: none;
	margin-right: 40px;

	&:not(.active):hover,
	&:not(.active):focus {
		border-color: inherit;
	}

	&.active {
		color: #fbbf02;
		border-color: #fbbf02;
	}

	@media ${mediaSmall} {
		display: block;
		margin-right: 0;
		width: 100%;
	}
`;

export const NavItemExternal = NavItem.withComponent('a');

export const NavItemLogIn = styled(PrimaryButton)`
	font-size: 12px;

	@media ${mediaSmall} {
		width: 100%;
		margin: 10px 0 0;
		text-align: left;
	}
`;

export const NavItemJoin = styled.a`
	background: #ffbb00;
	color: inherit;
	box-shadow: 0 8px 24px ${rgba('#ffc300', 0.2)};
	border-radius: 30px;
	padding: 10px 25px;
	text-decoration: none;
	text-transform: uppercase;
	font-size: 12px;
	font-weight: bold;
	transition: background-color 200ms ease-out;
	margin-left: 15px;
	text-align: center;

	&:not(.active):hover,
	&:not(.active):focus {
		background: #fece00;
	}

	&.active {
		background: ${rgba('#fece00', 0.4)};
	}

	@media ${mediaSmall} {
		width: 100%;
		margin: 10px 0 0;
		text-align: left;
	}
`;
