import styled from 'styled-components';
import { rem } from 'polished';
import { media } from '@/styles/media';

export const Wrapper = styled.ul`
	list-style: none;
	margin: 40px 0 0;
	display: flex;
	justify-content: space-between;
	transition: opacity 200ms ease-in-out;

	${media.medium`
		margin-bottom: 40px;
		flex-wrap: wrap;
	`};

	${media.xsmall`
		flex-direction: column;
	`};
`;

export const Item = styled.li`
	font-size: ${rem(36)};
	font-weight: bold;
	margin: 0 0 30px;
`;

export const Label = styled.span`
	display: block;
	text-transform: uppercase;
	font-weight: normal;
	font-size: ${rem(16)};
`;
