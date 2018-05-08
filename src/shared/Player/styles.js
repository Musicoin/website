import React from 'react';
import styled from 'styled-components';
import { rem, rgba } from 'polished';
import { IconButton } from '@/shared/buttons';
import { PlayIcon } from '@/shared/icons';

export const Wrapper = styled.section`
	display: flex;
	height: 80px;
	width: 1080px;
	justify-content: space-between;
	align-items: center;
	background: #fff;
	border-radius: 4px;
	padding: 17px;
`;

export const Block = styled.div`
	height: 100%;
	flex-direction: row;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const TextInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

export const Title = styled.p`
	font-size: ${rem(14)};
	color: #000;
	margin: 0;
`;

export const Artist = styled(Title)`
	font-size: ${rem(14)};
	font-weight: 600;
`;

export const Tip = styled(Title)`
	color: #ccc;
	user-select: none;
	&:hover {
		color: #000;
	}
`;

export const Controls = styled.div`
	display: flex;
	width: 50%;
	align-items: center;
	justify-content: center;
`;

export const CentralWrapper = styled(Controls)`
	width: 100%;
	position: relative;
	padding-top: 25px;
`;

const Time = styled.p`
	margin: 0px;
	font-size: ${rem(14)};
	user-select: none;
	position: absolute;
	top: 0;
`;

export const ActualTime = styled(Time)`
	background: linear-gradient(to right, #fece00 0%, #ff9000 100%);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	left: 0;
`;

export const TrackLength = styled(Time)`
	color: #ccc;
	right: 0;
	&:hover {
		color: #000;
	}
`;

export const ProgressBar = styled.progress`
	width: 100%;
	height: 3px;
	margin-top: 10px;
	background: ${rgba('#000', 0.1)};
	&::-webkit-progress-value {
		background-image: linear-gradient(to right, #fece00 0%, #ff9000 100%);
	}
	&::-webkit-progress-bar {
		background: transparent;
	}
`;

export const CenterBlock = styled.div`
	width: 540px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

export const Cover = styled.img`
	display: flex;
	border-radius: 4px;
	height: 100%;
	margin-right: 17px;
`;

export const PlayButton = styled(IconButton).attrs({ children: <PlayIcon /> })`
	color: #000;
	transition: color 200ms ease-in-out;
	font-size: 22px;
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);

	&:hover {
		color: #FECE00;
	};
`;

export const PauseButton = styled(IconButton)`
	color: #000;
	transition: color 200ms ease-in-out;
	height: 19px;
	width: 12px;
	border: 5px solid;
	border-width: 0 5px;
	position: absolute;
	top: 2px;
	left: 50%;
	transform: translateX(-50%);

	&:hover {
		color: #fece00;
	}
`;
