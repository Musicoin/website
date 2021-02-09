import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BOX_CONTENT_PADDING } from '@/shared/Box';

export const Nav = styled.ul`
	margin: -${BOX_CONTENT_PADDING};
	padding: 0 ${BOX_CONTENT_PADDING};
	list-style: none;
	display: flex;
	justify-content: center;
`;

export const NavItem = styled.li`
	& + & {
		margin-left: 40px;
	}
`;

export const ExternalLink = styled.a`
	padding: ${BOX_CONTENT_PADDING} 0;
	display: block;
	position: relative;

	&.active::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 4px;
		background-color: #fece00;
		background-image: linear-gradient(to right, #fece00, #ff9000);
	}
`;

export const InternalLink = ExternalLink.withComponent(NavLink);
