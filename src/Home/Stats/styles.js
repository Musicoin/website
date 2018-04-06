import styled from 'styled-components';
import { rem } from 'polished';
import { media } from '@/styles/media';

export const Wrapper = styled.ul`
	list-style: none;
	margin: 0 0 100px;
	display: flex;
	justify-content: space-between;
	transition: opacity 200ms ease-in-out;

	${media.medium`
		flex-wrap: wrap;
	`};

	${media.xsmall`
		flex-direction: column;
		text-align: center;
	`};
`;

export const Item = styled.li`
	font-size: ${rem(36)};
	margin: 0 0 30px;
`;

export const Label = styled.span`
	display: block;
	text-transform: uppercase;
	font-size: ${rem(16)};
`;
