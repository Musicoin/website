import styled, { css } from 'styled-components';
import { PrimaryButton } from '../buttons';
import { NavLink } from 'react-router-dom';
import AppNav from '../AppNav';

export const mediaSmall = '(max-width: 1090px)';
const mediaLarge = '(min-width: 1090px)';

export const Wrapper = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 50px;
	margin: 30px 0 80px;
	color: inherit;
	flex-wrap: wrap;
	overflow: hidden;

	${props =>
		props.home &&
		css`
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 1;

			@media ${mediaSmall} {
				position: relative;
				margin-bottom: 30px;
			}
		`};

	@media ${mediaSmall} {
		padding-left: 30px;
		padding-right: 30px;
	}
`;

export const LogoLink = styled(NavLink)`
	order: 1;
`;

export const NavToggle = styled(PrimaryButton)`
	order: 2;

	@media ${mediaLarge} {
		display: none;
	}
`;

export const Nav = styled(AppNav)`
	order: 3;

	@media ${mediaSmall} {
		width: 100%;
	}
`;
