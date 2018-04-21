import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { backgroundGradient } from '@/styles/utils';
import { Icon, ArrowRightIcon } from '@/shared/icons';

export const Button = styled(({ children, ...props }) => {
	const Tag = props.to ? NavLink : 'a';
	return <Tag {...props}>{children}</Tag>;
})`
	border-radius: 4px;
	text-transform: uppercase;
	padding: 0 26px;
	min-height: 3em;
	display: inline-flex;
	align-items: center;
	font-weight: bold;
	transition: all 200ms ease-in-out;
	font-size: 12px;
	line-height: 1;

	& + & {
		margin-left: 24px;
	}
`;

export const PrimaryButton = styled(Button)`
	${backgroundGradient()};
	color: #171717;

	&:hover,
	&:focus {
		background-position: right center;
	}
`;

export const SecondaryButton = styled(Button)`
	box-shadow: inset 0 0 0 2px #fff;

	&:hover,
	&:focus {
		background-color: #fff;
		color: #171717;
	}
`;

export const TertiaryButton = styled(Button)`
	background-color: #fff;
	color: #171717;
`;

export const ArrowButton = styled(({ children, ...props }) => (
	<Button {...props}>
		{children}
		<ArrowRightIcon />
	</Button>
))`
	color: #fbbf02;
	padding-right: 8px;

	${Icon} {
		margin-left: 20px;
		font-size: 1.3em;
		margin-top: -2px;
	}

	&:hover,
	&:focus {
		box-shadow: inset 0 0 0 2px #fbbf02;
	}
`;

export const IconButton = styled.button.attrs({ type: 'button' })`
	background: transparent;
	border: 0;
	line-height: 1;
	padding: 0;
	outline: none;
	cursor: pointer;

	${Icon} {
		vertical-align: middle;
	}
`;
