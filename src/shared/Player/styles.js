import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { IconButton } from '@/shared/buttons';
import { SkipIcon, PlayIcon } from '@/shared/icons';

const button = `
	opacity: 0.5;
	transition: opacity 200ms ease-in-out;

	&:hover,
	&:focus {
		opacity: 1;
	}
`;

export const Wrapper = styled.section`
	background: #1d1825;
	border-radius: 4px;
	padding: 16px 36px;
`;

export const Title = styled.p`
	margin: 0;
	text-align: center;
`;

export const Artist = styled(Title)`
	font-size: ${rem(24)};
	line-height: 1.2;
`;

export const Controls = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px 0;
`;

export const SkipButton = styled(IconButton).attrs({ children: <SkipIcon /> })`
	${button};
	transform: ${props => props.previous && 'rotate(180deg)'};
	font-size: 17px;
	margin: 0 30px;
`;

export const PlayButton = styled(IconButton).attrs({ children: <PlayIcon /> })`
	${button};
	font-size: 22px;
`;
