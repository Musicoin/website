import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { ArrowIcon } from './ArrowIcon';

export const Article = styled.article`
	display: flex;
	flex-direction: column;
	background-color: #fff;
	border-radius: 8px;
	box-shadow: 0 8px 16px ${rgba('#575211', 0.1)};
	margin-top: 30px;
	overflow: hidden;
	padding: 22px;

	*:last-child {
		margin-bottom: 0;
	}
`;

export const Toggle = styled.button`
	border: 0;
	background: transparent;
	padding: 22px;
	margin: -22px;
	outline: none;
	text-align: left;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
`;

export const ToggleArrow = styled.span.attrs({
	children: <ArrowIcon width="14" height="15" />,
})`
	display: block;
	margin-left: 10px;
	transform: ${props => props.isOpen && 'rotate(-180deg)'};
	color: ${props => (props.isOpen ? '#fece00' : 'inherit')};
	transition: 200ms ease-in-out;
	transition-property: transform, color;
	flex: 0 0 auto;

	${Toggle}:hover &,
	${Toggle}:focus & {
		color: #fece00;
	}
`;

export const Content = styled.div`
	opacity: 0.5;
	display: ${props => (props.isOpen ? 'block' : 'none')};
	transition: max-height 300ms ease-in-out;
	overflow: auto;
`;
