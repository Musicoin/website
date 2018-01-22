import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ButtonField = styled.button`
	display: inline-block;
	border: 2px solid;
	border-radius: 2em;
	color: inherit;
	font-family: 'Montserrat', sans-serif;
	font-size: 0.75em;
	font-weight: bold;
	padding: 0.7em 2.25em;
	text-transform: uppercase;
	text-decoration: none;
	outline: none;
	text-align: center;
	transition: 200ms ease-in-out;
	transition-property: color, border-color, background-color;

	&:hover,
	&:focus {
		background-color: #171717;
		color: #fff;
		border-color: transparent;
	}
`;

// TODO: Figure out why we can't `styled(ButtonField)` here?
export const PrimaryButtonField = ButtonField.extend`
	background-color: #fff;
	border-color: #fbbf02;
	color: #fbbf02;

	&:hover,
	&:focus {
		background-color: #fbbf02;
		color: #fff;
	}
`;

export const ButtonLink = ButtonField.withComponent(NavLink);
export const ButtonAnchor = ButtonField.withComponent('a');
export const PrimaryButtonLink = PrimaryButtonField.withComponent(NavLink);
export const PrimaryButtonAnchor = PrimaryButtonField.withComponent('a');
