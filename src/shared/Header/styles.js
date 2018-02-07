import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { rem } from 'polished';

export const Wrapper = styled.header`
	display: flex;
	min-height: 80px;
	justify-content: space-between;
	align-items: center;
`;

export const Logo = styled(NavLink)`
	flex: 0 0 auto;
`;

export const Image = styled.img`
	margin: 0;
`;

export const Nav = styled.nav`
	font-size: ${rem(12)};
`;

export const NavItem = styled(NavLink)`
	text-transform: uppercase;
	transition: color 200ms ease-in-out;
	font-weight: bold;
	margin-right: ${rem(40)};

	&:hover,
	&:focus {
		color: #fbbf02;
	}
`;
