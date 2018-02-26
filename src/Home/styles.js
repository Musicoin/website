import React from 'react';
import styled from 'styled-components';
import microphone from './images/microphone.jpg';
import highlight from './images/highlight.png';
import { PrettyText } from '@/shared/PrettyText';
import { media } from '@/styles/media';
import {
	Media as SharedMedia,
	MediaImage as SharedMediaImage,
	MediaContent as SharedMediaContent,
} from '@/shared/Media';
import { Page } from '@/shared/Page';

const bgGrad = `linear-gradient(to bottom, #260441 3%, #27033c 51%, #270337 100%)`;
const overlayGrad = `linear-gradient(to bottom, rgba(23, 21, 30, 0) 0%, #17151e 100%)`;
const innerGrad = `linear-gradient(to bottom, transparent 0%, #17151e 733px, rgba(23, 23, 23, 0) 100%)`;

export const Wrapper = styled(({ children, ...props }) => (
	<Page {...props}>
		<Background>{children}</Background>
	</Page>
))`
	background-image: ${bgGrad};
	background-repeat: no-repeat;
	background-size: 100% 733px;
	position: relative;
	overflow: hidden;
	transform: translate3d(0, 0, 0);

	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 733px;
		background: url(${microphone}) center top no-repeat;
		z-index: -1;
		top: 0;
		left: 0;
		transition: background-position 200ms ease-in-out;

		${media.xlarge`
			background-position: right -1130px top;
		`};

		${media.small`
			background-position: right -990px top;
			background-size: auto 600px;
		`};
	}

	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 733px;
		background-image: ${overlayGrad};
		z-index: -1;
		top: 0;
		left: 0;
	}
`;

const Background = styled.div`
	position: relative;
	background: url(${highlight}) center 670px no-repeat;
	transform: translate3d(0, 0, 0);

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 1450px;
		background-image: ${innerGrad};
		z-index: -1;
	}

	${media.medium`
		background-size: auto 880px;
	`};

	${media.small`
		background-size: auto 820px;
	`};

	${media.xsmall`
		background: none;
	`};
`;

export const BlockTitle = styled.h2`
	text-align: center;
`;

export const FirstContent = styled.div`
	min-height: 720px;
	display: flex;
	align-items: center;
	margin-bottom: 80px;

	${media.medium`
		min-height: 0;
	`};

	${media.xsmall`
		margin-top: -40px;
		margin-bottom: -100px;
	`};
`;

export const Media = styled(SharedMedia)`
	margin-bottom: 150px;
	margin-top: 80px;

	${media.small`
		margin-bottom: 110px;
	`};

	${media.xsmall`
		flex-direction: column;
		margin-bottom: 70px;
	`};
`;

export const MediaContent = styled(SharedMediaContent)`
	${media.xsmall`
		&& {
			text-align: center;
		}
	`};
`;

export const MediaImage = styled(SharedMediaImage)`
	${media.large`
		max-width: 400px;
	`};

	${media.medium`
		max-width: 300px;
	`};

	${media.xsmall`
		margin-bottom: 30px;

		&& {
			order: 0;

			img {
				right: auto;
				left: auto;
			}
		}
	`};
`;

export const SectionTitle = styled(({ children, ...props }) => (
	<h3 {...props}>
		<PrettyText>{children}</PrettyText>
	</h3>
))`
	display: inline-flex;
`;

export const GetStarted = styled.div`
	text-align: center;
`;
