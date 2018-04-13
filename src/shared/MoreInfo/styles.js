import styled from 'styled-components';
import { rgba } from 'polished';

// TODO: Improve code here

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
	font-size: inherit;
	font-family: inherit;
	color: inherit;
	padding: 22px;
	margin: -22px;
	outline: none;
	text-align: left;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ToggleArrow = styled.span`
	margin-left: 10px;
	transform: ${props => (props.isOpen ? 'rotate(-90deg)' : 'rotate(90deg)')};
	color: ${props => (props.isOpen ? '#fece00' : 'inherit')};
	transition: 200ms ease-in-out;
	transition-property: transform, color;
	${Toggle}:hover &,
	${Toggle}:focus & {
		color: #fece00;
	}
`;

export const Content = styled.div`
	opacity: 0.5;
	max-height: ${props => (props.isOpen ? '500px' : 0)};
	transition: max-height 200ms ease;
	overflow: hidden;
`;
