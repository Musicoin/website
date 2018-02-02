import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.header`
	display: flex;
	min-height: 80px;
	justify-content: space-between;
	align-items: center;
`;

export const Image = styled.img`
	margin: 0;
`;

export const Nav = styled.nav`
	font-size: 12px;
`;

export const NavItem = styled(NavLink)`
	text-transform: uppercase;
	transition: color 200ms ease-in-out;
	font-weight: bold;
	margin-right: 40px;

	&:hover,
	&:focus {
		color: #fbbf02;
	}
`;
