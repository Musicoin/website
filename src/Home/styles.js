import React from 'react';
import styled from 'styled-components';
import microphone from './images/microphone.jpg';
import highlight from './images/highlight.png';
import { Content } from 'shared/Content';
import { PrettyText } from 'shared/PrettyText';
import { Button } from 'shared/buttons';
import { Media as SharedMedia } from 'shared/Media';

const bgGrad = `linear-gradient(to bottom, #260441 3%, #27033c 51%, #270337 100%)`;
const overlayGrad = `linear-gradient(to bottom, rgba(23, 21, 30, 0) 0%, #17151e 100%)`;
const innerGrad = `linear-gradient(to bottom, transparent 0%, #17151e 733px, rgba(23, 23, 23, 0) 100%)`;

export const Wrapper = styled(({ children, ...props }) => (
	<div {...props}>
		<Background>{children}</Background>
	</div>
))`
	background-image: ${bgGrad};
	background-repeat: no-repeat;
	background-size: 100% 733px;
	min-height: 100vh;
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
`;

export const Banner = styled.div`
	min-height: 660px;
	display: flex;
	align-items: center;

	${Button} {
		font-size: 14px;
	}
`;

export const BannerTitle = styled.h1`
	max-width: 610px;
	line-height: 1.3;
	margin-bottom: 0.2em;
`;

export const BannerText = styled.p`
	max-width: 485px;
	margin-bottom: 50px;
	font-size: 24px;
`;

export const Stats = styled.ul`
	list-style: none;
	margin: 100px 0;
	display: flex;
	justify-content: space-between;
`;

export const StatsItem = styled.li`
	font-size: 36px;
	font-weight: bold;
	margin: 0;
`;

export const StatsLabel = styled.span`
	display: block;
	text-transform: uppercase;
	font-weight: normal;
	font-size: 16px;
`;

export const BlockTitle = styled.h3`
	text-align: center;
	font-weight: normal;
	font-size: 48px;
`;

export const FirstContent = styled(Content)`
	min-height: 720px;
	display: flex;
	align-items: center;
	margin-bottom: 80px;
`;

export const Media = styled(SharedMedia)`
	margin-bottom: 150px;
	margin-top: 80px;

	& + & {
		margin-top: 80px;
	}
`;

export const SectionTitle = PrettyText.withComponent('h3').extend`
	display: inline-flex;
	font-size: 36px;
`;

export const GetStarted = styled(Content)`
	text-align: center;
`;
