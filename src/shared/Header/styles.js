import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { rem, rgba } from 'polished';
import { media } from '@/styles/media';
import { Button } from '@/shared/buttons';

export const Wrapper = styled.header`
	display: flex;
	min-height: 80px;
	justify-content: space-between;
	align-items: center;
	text-transform: uppercase;
	font-weight: bold;
	flex: 0 0 auto;
`;

export const Logo = styled(NavLink)`
	flex: 0 0 auto;
`;

export const Image = styled.img`
	margin: 0;
	display: block;
`;

export const Nav = styled.nav`
	font-size: 12px;
	white-space: nowrap;
	margin-left: ${rem(10)};

	${media.large`
		${Button} {
			margin-top: 30px;
		}
	`};
`;

export const NavToggle = styled.button`
	all: inherit;
	z-index: 2;
	position: relative;
	display: flex;
	align-items: center;
	font-size: 14px;
	font-weight: normal;
	cursor: pointer;
`;

export const NavIcon = styled(props => (
	<span {...props}>
		<span />
		<span />
		<span />
	</span>
))`
	position: relative;
	display: block;
	height: 12px;
	width: 14px;
	margin-right: 6px;

	span {
		width: 100%;
		height: 2px;
		display: block;
		border-radius: 3px;
		background-color: currentColor;
		transition: 200ms ease;
		position: absolute;
		top: 0;
		right: 0;

		&:last-child {
			width: 8px;
		}

		&:nth-child(2) {
			transform: translateY(4px);
		}

		&:nth-child(3) {
			transform: translateY(8px);
		}

		&:nth-child(1) {
			transform: ${props => props.open && 'translateY(4px) rotate(45deg)'};
		}

		&:nth-child(2) {
			transform: ${props => props.open && 'translateY(4px) rotate(-45deg)'};
		}

		&:nth-child(3) {
			width: ${props => props.open && '100%'};
			height: ${props => props.open && '1px'};
			transform: ${props => props.open && 'translateY(20px)'};
			opacity: ${props => props.open && 0};
		}
	}
}
`;

export const NavItems = styled.div`
	${media.large`
		background: linear-gradient(to bottom, #26043d, #0f052c);
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		width: 320px;
		z-index: 1;
		transform: translateX(${props => (props.open ? 0 : '120%')});
		transition: transform 200ms;
		transition-timing-function: ${props => (props.open ? 'ease-out' : 'ease-in')};
		box-shadow: 0 0 30px ${rgba('#000', 0.5)};
		padding: 7em 30px 30px;
	`};
`;

export const NavItem = styled(NavLink)`
	transition: color 200ms ease-in-out;
	margin-right: ${rem(40)};

	&:hover,
	&:focus,
	&.active {
		color: #fbbf02;
	}

	${media.large`
		display: flex;
		align-items: center;
		min-height: 5em;
		border-bottom: 1px solid ${rgba('#fff', 0.1)};
		margin: 0;
	`};
`;
